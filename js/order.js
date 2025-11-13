let orderData = [
  {
    date: "21/11/2023 20:53:00",
    username: "admin",
    order: [
      {
        id: "10007",
        name: "Green Tea Foam Cleanser 150mL",
        img: "./img/SP/0007.jpg",
        amount: 10,
      },
      {
        id: "10010",
        name: "Canola Honey Deep-Moisture",
        img: "./img/SP/0010.jpg",
        amount: 10,
      },
    ],
    total: 3900000,
    status: "Chờ Xác Nhận",
  },
];

onload = () => {
  if (localStorage.getItem("orderDatabase") === null)
    localStorage.setItem("orderDatabase", JSON.stringify(orderData));
  else orderData = JSON.parse(localStorage.getItem("orderDatabase"));
  if (location.pathname.includes("admin")) loadBang();
};

function loadBang(searchValue = "") {
  let display = "";
  for (let i = 0; i < orderData.length; i++) {
    if (
      orderData[i].username.toLowerCase().includes(searchValue.toLowerCase()) ||
      searchValue === ""
    ) {
      let order = orderData[i];
      for (let j = 0; j < order.order.length; j++)
        if (j === 0) {
          display += `
              <tr style="padding: 0px">
                  <td rowspan="${order.order.length}">${order.username}</td>
                  <td>
                      <img src="${
                        "../" + order.order[j].img
                      }" alt="" width="100px">
                  </td>
                  <td>${order.order[j].name}<br>Số lượng: ${
            order.order[j].amount
          }</td>
                  <td rowspan="${order.order.length}">${order.total}</td>
                  <td rowspan="${order.order.length}">${order.date}</td>
                  <td rowspan="${order.order.length}">${order.status}</td>
          `;

          // ✅ Nếu đơn đang chờ xác nhận → hiển thị nút “Xác nhận”
          if (order.status === "Chờ Xác Nhận")
            display += `
                  <td rowspan="${order.order.length}">
                      <button class="btn btn-success" onclick="xacNhan(${i})">Xác nhận</button>
                  </td>
              </tr>
            `;
          else
            display += `
                  <td rowspan="${order.order.length}">
                      <button class="btn btn-secondary" disabled>Đã xử lý</button>
                  </td>
              </tr>
            `;
        } else
          display += `
              <tr style="padding: 0px">
                  <td>
                      <img src="${
                        "../" + order.order[j].img
                      }" alt="" width="100px">
                  </td>
                  <td>${order.order[j].name}<br>Số lượng: ${
            order.order[j].amount
          }</td>
              </tr>
          `;
    }
  }
  document.getElementById("order-ready").innerHTML = display;
}

function searchOrderByUsername() {
  loadBang(document.getElementById("search").value);
}

document.getElementById("search").addEventListener("keyup", (event) => {
  if (event.key === "Enter") searchOrderByUsername();
});

// ✅ HÀM QUAN TRỌNG: Admin xác nhận đơn hàng
function xacNhan(index) {
  // Cập nhật trạng thái đơn
  orderData[index].status = "Đã Giao Cho ĐVVC";

  // Lưu lại vào localStorage
  localStorage.setItem("orderDatabase", JSON.stringify(orderData));

  // Nếu đây là đơn hàng người dùng đang xem (currentOrder), cập nhật luôn
  const current = JSON.parse(localStorage.getItem("currentOrder"));
  if (
    current &&
    current.user === orderData[index].username &&
    current.time === orderData[index].date
  ) {
    current.status = "Đã Giao Cho ĐVVC";
    localStorage.setItem("currentOrder", JSON.stringify(current));
  }

  alert("✅ Đã xác nhận: đơn hàng chuyển sang trạng thái 'Đã Giao Cho ĐVVC'");
  loadBang();
}

// ✅ Các hàm khác giữ nguyên
function getOrderList(username) {
  if (localStorage.getItem("orderDatabase") === null)
    localStorage.setItem("orderDatabase", JSON.stringify(orderData));
  orderList = JSON.parse(localStorage.getItem("orderDatabase"));
  let returnList = new Array();
  for (let i = 0; i < orderList.length; i++)
    if (orderList[i].username === username) returnList.push(orderList[i]);
  return returnList;
}

function themDonHang(date, username, order, total) {
  orderData = JSON.parse(localStorage.getItem("orderDatabase"));
  for (var i = 0; i < order.length; i++) {
    updateSoLuong(order[i].id, order[i].amount * -1);
  }

  // ✅ Lưu đơn với trạng thái thống nhất "Chờ Xác Nhận"
  orderData.push({
    date: date,
    username: username,
    order: order,
    total: total,
    status: "Chờ Xác Nhận",
  });

  localStorage.setItem("orderDatabase", JSON.stringify(orderData));
}

function SearchOrder(date, username) {
  orderData = JSON.parse(localStorage.getItem("orderDatabase"));
  for (var i = 0; i < orderData.length; i++) {
    if (orderData[i].date == date && orderData[i].username == username)
      return i;
  }
  return -1;
}

function deleteOrder(date, username) {
  const index = SearchOrder(date, username);
  for (var i = 0; i < orderData[index].order.length; i++) {
    updateSoLuong(
      orderData[index].order[i].id,
      orderData[index].order[i].amount
    );
  }
  orderData.splice(index, 1);
  localStorage.setItem("orderDatabase", JSON.stringify(orderData));
}
