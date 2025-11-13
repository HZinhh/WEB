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

/**
 * HÀM 1: KIỂM TRA GIỎ HÀNG
 * (Logic được tách ra từ hàm makeOrder cũ)
 */

// Kiểm tra xem có check món nào không

/**
 * HÀM 2: HÀM MỚI CHO NÚT "ĐẶT HÀNG"
 * Sẽ được gọi bởi nút bạn vừa sửa ở Bước 1.
 */

/**
 * HÀM 3: HÀM MỚI CHO NÚT "XÁC NHẬN" TRÊN MODAL
 * Xử lý đặt hàng sau khi đã chọn thanh toán
 */
/**
 * HÀM 1: KIỂM TRA GIỎ HÀNG (Giữ nguyên)
 */
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
 * HÀM 2: HÀM CHO NÚT "ĐẶT HÀNG" (Giữ nguyên)
 */
function validateAndShowModal() {
  if (validateCart()) {
    $("#paymentModal").modal("show");
  }
}

/**
 * HÀM 3: HÀM "XÁC NHẬN" (ĐÃ SỬA ĐỔI)
 * Hàm này bây giờ sẽ kiểm tra phương thức thanh toán:
 * - Nếu là "tiền mặt" -> Lưu đơn hàng ngay.
 * - Nếu là "chuyển khoản" -> Mở Modal QR.
 */
function confirmOrder() {
  const paymentElement = document.querySelector(
    'input[name="paymentMethod"]:checked'
  );
  const paymentMethod = paymentElement.value;

  if (paymentMethod === "tiền mặt") {
    let order = [];
    let total = getTotal();
    const length = userCart.length;

    for (let i = 0; i < length; ++i) {
      if (userCart[i].checked) {
        delete userCart[i].username;
        delete userCart[i].checked;
        order.push(userCart[i]);
        let index = cartList.findIndex(
          (cart) => cart.id === userCart[i].id && cart.username === userLogin
        );
        if (index !== -1) cartList.splice(index, 1);
      }
    }

    // ✅ Lưu đơn hàng
    themDonHang(
      new Date().toLocaleString("fr-FR"),
      userLogin,
      order,
      total,
      "tiền mặt"
    );

    // ✅ Lưu thông tin tạm để trang timeline hiển thị
    const currentOrder = {
      id: Date.now(),
      user: userLogin,
      total: getGia(total),
      payment:
        paymentMethod === "tiền mặt"
          ? "Thanh toán tiền mặt"
          : "Chuyển khoản ngân hàng",
      status: "Chờ Xác Nhận", // ✅ Trạng thái đầu tiên sau khi đặt hàng
      time: new Date().toLocaleString("vi-VN"),
    };
    localStorage.setItem("currentOrder", JSON.stringify(currentOrder));

    $("#paymentModal").modal("hide");
    successMessage("Đặt hàng thành công", 1500);

    // ✅ Chuyển sang trang TimeLineOrder.html sau 1.5 giây
    setTimeout(() => {
      window.location.href = "TimeLineOrder.html";
    }, 1500);
  } else {
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
 * HÀM 4: HÀM MỚI - "TÔI ĐÃ THANH TOÁN"
 * Sẽ được gọi khi nhấn nút "Tôi đã thanh toán" trên Modal QR.
 */
function confirmBankTransfer() {
  const proofInput = document.getElementById("paymentProofInput");
  if (proofInput.files.length === 0) {
    dangerMessage("Vui lòng tải lên ảnh chụp màn hình đã thanh toán");
    return;
  }

  let order = [];
  let total = getTotal();
  for (let i = 0; i < userCart.length; ++i) {
    if (userCart[i].checked) {
      delete userCart[i].username;
      delete userCart[i].checked;
      order.push(userCart[i]);
      let index = cartList.findIndex(
        (cart) => cart.id === userCart[i].id && cart.username === userLogin
      );
      if (index !== -1) cartList.splice(index, 1);
    }
  }

  themDonHang(
    new Date().toLocaleString("fr-FR"),
    userLogin,
    order,
    total,
    "chuyển khoản"
  );

  // ✅ Lưu thông tin tạm để trang timeline hiển thị
  const currentOrder = {
    id: Date.now(),
    user: userLogin,
    total: getGia(total),
    payment:
      paymentMethod === "tiền mặt"
        ? "Thanh toán tiền mặt"
        : "Chuyển khoản ngân hàng",
    status: "Chờ Xác Nhận", // ✅ Trạng thái đầu tiên sau khi đặt hàng
    time: new Date().toLocaleString("vi-VN"),
  };
  localStorage.setItem("currentOrder", JSON.stringify(currentOrder));

  $("#qrCodeModal").modal("hide");
  successMessage("Đặt hàng thành công, đang chờ xác nhận", 2000);

  // ✅ Chuyển sang trang TimeLineOrder.html sau 2 giây
  setTimeout(() => {
    window.location.href = "TimeLineOrder.html";
  }, 2000);
}

/**
 * HÀM MỚI: XỬ LÝ KHI NGƯỜI DÙNG HỦY CHUYỂN KHOẢN
 * Được gọi bởi nút "X" hoặc nút "Quay lại" trên Modal QR
 */
function cancelBankTransfer() {
  // 1. Ẩn modal QR đi
  $("#qrCodeModal").modal("hide");

  // 2. Mở LẠI modal chọn phương thức thanh toán
  $("#paymentModal").modal("show");
}
function checkKey(input, event) {
  if (event.key === "Backspace" || event.key === "Enter") return;
  if (isNaN(event.key)) input.value = input.min;
}
