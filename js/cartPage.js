let tempShippingAddress = {}; // BIẾN QUAN TRỌNG ĐỂ LƯU ĐỊA CHỈ TẠM

onload = () => {
  displayCart();
};

function emptyCart() {
  if (userLogin === "") {
    document.getElementById("cart-empty-message").innerHTML =
      "Bạn cần phải đăng nhập để mua sắm!!!";
    return true;
  }
  selectCart();
  if (userCart.length === 0) {
    document.getElementById(
      "cart-empty-message"
    ).innerHTML = `Bạn cần phải thêm <a href="./san-pham.html" style="text-decoration:none;">sản phẩm</a> vào giỏ hàng!!!`;
    return true;
  }
  return false;
}

function getTotal() {
  let total = 0;
  for (let i = 0; i < userCart.length; i++)
    if (userCart[i].checked) total += Number(userCart[i].total);
  return total;
}

function displayCart() {
  if (emptyCart()) {
    $("#cart-list").css("display", "none");
    $("#cart-action").css("display", "none");
    return;
  }
  document.getElementById("cart-body").innerHTML = "";
  $("#cart-empty").css("display", "none");
  let display = "";
  for (let i = 0; i < userCart.length; i++) {
    let item = userCart[i];
    display += `        
            <tr class="p-0">
                <td>
                    <input type="checkbox" class="check" onclick="checkChanged(${i})">
                </td>
                <td>
                    <img src="${item.img}" alt="" width="80%">
                </td>
                <td>${item.name}</td>
                <td>
                    <input type="number" class="text-center" value="${
                      item.amount
                    }" min="1" max="" style="width: 60px" onchange="tinhTong(this, ${i})" onkeyup="checkKey(this, event);">
                </td>
                <td>${getGia(item.total)}</td>
                <td>
                    <button class="btn btn-danger" onclick="deleteCart(${i})">Xóa</button>
                </td>
            </tr>        
        `;
  }
  document.getElementById("cart-body").innerHTML =
    document.getElementById("cart-body").innerHTML +
    display +
    `
        <tr style="padding: 0px;font-size: 20px;">
            <th colspan="4" class="text-end">TỔNG:</th>
            <th colspan="2" id="tong-hang">${getGia(getTotal())}</th>
        </tr>
    `;
  $("#cart-action").css("display", "initial");
  for (let i = 0; i < userCart.length; i++)
    document.querySelectorAll(".check")[i + 1].checked = userCart[i].checked;

  autoCheckAll();
}

function tinhTong(input, i) {
  if (input.value === "") {
    input.value = cartList[i].amount;
    return;
  }
  const index = cartList.findIndex((cart) => cart === userCart[i]);
  cartList[index].amount = Number(input.value);
  cartList[index].total =
    Number(cartList[index].price) * cartList[index].amount;
  localStorage.setItem("cartList", JSON.stringify(cartList));
  displayCart();
}

function checkChanged(index) {
  userCart[index].checked = !userCart[index].checked;
  autoCheckAll();
  document.getElementById("tong-hang").innerHTML = getGia(getTotal());
  localStorage.setItem("cartList", JSON.stringify(cartList));
}

function checkAllChanged() {
  const status = document.getElementById("check-all").checked;
  for (let i = 0; i < userCart.length; i++) {
    document.querySelectorAll(".check")[i + 1].checked = status;
    userCart[i].checked = status;
  }
  document.getElementById("tong-hang").innerHTML = getGia(getTotal());
  localStorage.setItem("cartList", JSON.stringify(cartList));
}

function autoCheckAll() {
  for (let i = 0; i < userCart.length; i++)
    if (!userCart[i].checked) {
      document.getElementById("check-all").checked = false;
      return;
    }
  document.getElementById("check-all").checked = true;
}

function validateCart() {
  let warning = true;
  const length = userCart.length;
  if (length === 0) {
    dangerMessage("Giỏ hàng của bạn đang trống");
    return false;
  }
  for (let i = 0; i < length; ++i) {
    if (userCart[i].checked) {
      if (userCart[i].amount > userCart[i].remain) {
        dangerMessage(
          `Bạn đang đặt sản phẩm ${userCart[i].name} với số lượng nhiều hơn tồn kho (${userCart[i].remain})`
        );
        return false;
      }
      if (userCart[i].amount == 0) {
        dangerMessage(`Vui lòng thêm số lượng cho ${userCart[i].name}`);
        return false;
      }
      warning = false;
    }
  }
  if (warning) {
    dangerMessage("Vui lòng chọn ít nhất 1 món để đặt hàng");
    return false;
  }
  return true;
}

/**
 * HÀM 2: HÀM CHO NÚT "ĐẶT HÀNG" (ĐÃ SỬA)
 * Mở modal ĐỊA CHỈ
 */
function validateAndShowModal() {
  if (validateCart()) {
    $("#addressModal").modal("show"); // Mở modal ĐỊA CHỈ
  }
}

/**
 * HÀM MỚI: XÁC NHẬN ĐỊA CHỈ VÀ MỞ MODAL THANH TOÁN
 */
function confirmAddressAndShowPayment() {
  // 1. Lấy dữ liệu từ form địa chỉ
  const name = document.getElementById("shippingName").value;
  const phone = document.getElementById("shippingPhone").value;
  const address = document.getElementById("shippingAddress").value;

  // 2. Kiểm tra dữ liệu (đơn giản)
  if (!name || !phone || !address) {
    dangerMessage("Vui lòng điền đầy đủ thông tin nhận hàng.");
    return;
  }

  // 3. Lưu vào biến tạm
  tempShippingAddress = {
    name: name,
    phone: phone,
    address: address,
  };

  // 4. Ẩn modal địa chỉ và hiện modal thanh toán
  $("#addressModal").modal("hide");
  $("#paymentModal").modal("show");
}

/**
 * HÀM 3: HÀM "XÁC NHẬN" (ĐÃ SỬA ĐỔI)
 */
function confirmOrder() {
  // 1. Lấy phương thức thanh toán
  const paymentElement = document.querySelector(
    'input[name="paymentMethod"]:checked'
  );
  const paymentMethod = paymentElement.value;

  if (paymentMethod === "tiền mặt") {
    // --- XỬ LÝ CHO "TIỀN MẶT" ---
    let order = []; // Mảng sản phẩm MỚI
    let total = getTotal(); // Tổng tiền MỚI
    const length = userCart.length;

    for (let i = 0; i < length; ++i) {
      if (userCart[i].checked) {
        delete userCart[i].username;
        delete userCart[i].checked;
        order.push(userCart[i]); // Thêm sản phẩm MỚI vào mảng

        let index = cartList.findIndex(
          (cart) => cart.id === userCart[i].id && cart.username === userLogin
        );
        if (index !== -1) cartList.splice(index, 1);
      }
    }

    const orderTime = new Date().toLocaleString("fr-FR");

    // Gọi hàm lưu đơn hàng (giống cũ)
    themDonHang(orderTime, userLogin, order, total, "tiền mặt");

    // Dọn dẹp cartList
    localStorage.setItem("cartList", JSON.stringify(cartList));

    // ****** PHẦN SỬA LỖI (KHÔNG LẤY TỪ LOCALSTORAGE) ******
    // Lấy ID đơn hàng cuối cùng (giả sử themDonHang đã cập nhật)
    let currentOrderList = JSON.parse(localStorage.getItem("orderList")) || [];
    let newOrderID =
      currentOrderList.length > 0
        ? currentOrderList[currentOrderList.length - 1].id
        : "N/A";

    // Tự xây dựng đối tượng order object với dữ liệu MỚI
    let newOrderObject = {
      id: newOrderID,
      order: order, // <-- 'order' là mảng sản phẩm MỚI ta vừa tạo
      total: total, // <-- 'total' là tổng tiền MỚI
      payment: "tiền mặt",
      status: "Chờ Xác Nhận",
      time: orderTime,
      address: tempShippingAddress, // <-- 'address' là địa chỉ MỚI
    };
    // ****** KẾT THÚC PHẦN SỬA LỖI ******

    // Đóng modal và hiển thị thông báo
    $("#paymentModal").modal("hide");
    successMessage("Đặt hàng thành công", 1500);

    // Gọi hàm timeline với object MỚI
    loadTimelineData(newOrderObject);
  } else {
    // --- XỬ LÝ CHO "CHUYỂN KHOẢN" (Mở Modal QR) ---
    let total = getTotal();
    document.getElementById("qrTotalAmount").innerText = getGia(total);
    document.getElementById(
      "paymentContentSuggestion"
    ).innerText = `TT Mua Hang ${userLogin}`;
    $("#paymentModal").modal("hide");
    $("#qrCodeModal").modal("show");
  }
}

/**
 * HÀM 4: "TÔI ĐÃ THANH TOÁN" (ĐÃ SỬA ĐỔI)
 */
function confirmBankTransfer() {
  const proofInput = document.getElementById("paymentProofInput");
  if (proofInput.files.length === 0) {
    dangerMessage("Vui lòng tải lên ảnh chụp màn hình đã thanh toán");
    return;
  }

  // --- Logic lưu đơn hàng ---
  let order = []; // Mảng sản phẩm MỚI
  let total = getTotal(); // Tổng tiền MỚI
  for (let i = 0; i < userCart.length; ++i) {
    if (userCart[i].checked) {
      delete userCart[i].username;
      delete userCart[i].checked;
      order.push(userCart[i]); // Thêm sản phẩm MỚI vào mảng
      let index = cartList.findIndex(
        (cart) => cart.id === userCart[i].id && cart.username === userLogin
      );
      if (index !== -1) cartList.splice(index, 1);
    }
  }

  const orderTime = new Date().toLocaleString("fr-FR");

  // Gọi hàm lưu đơn hàng (giống cũ)
  themDonHang(orderTime, userLogin, order, total, "chuyển khoản");

  // Dọn dẹp cartList
  localStorage.setItem("cartList", JSON.stringify(cartList));

  // ****** PHẦN SỬA LỖI (KHÔNG LẤY TỪ LOCALSTORAGE) ******
  let currentOrderList = JSON.parse(localStorage.getItem("orderList")) || [];
  let newOrderID =
    currentOrderList.length > 0
      ? currentOrderList[currentOrderList.length - 1].id
      : "N/A";

  // Tự xây dựng đối tượng order object với dữ liệu MỚI
  let newOrderObject = {
    id: newOrderID,
    order: order, // <-- 'order' là mảng sản phẩm MỚI ta vừa tạo
    total: total, // <-- 'total' là tổng tiền MỚI
    payment: "chuyển khoản",
    status: "Chờ Xác Nhận",
    time: orderTime,
    address: tempShippingAddress, // <-- 'address' là địa chỉ MỚI
  };
  // ****** KẾT THÚC PHẦN SỬA LỖI ******

  // Đóng modal và hiển thị thông báo
  $("#qrCodeModal").modal("hide");
  successMessage("Đặt hàng thành công, đang chờ xác nhận thanh toán", 2500);

  // Gọi hàm timeline với object MỚI
  loadTimelineData(newOrderObject);
}

/**
 * HÀM 5: HỦY CHUYỂN KHOẢN (Giữ nguyên)
 */
function cancelBankTransfer() {
  $("#qrCodeModal").modal("hide");
  $("#paymentModal").modal("show");
}

function checkKey(input, event) {
  if (event.key === "Backspace" || event.key === "Enter") return;
  if (isNaN(event.key)) input.value = input.min;
}
