function loadTimelineData(order) {
  // 1. Kiểm tra xem có nhận được đơn hàng không
  if (!order) {
    document.getElementById("order-id-display").textContent =
      "Không tìm thấy đơn hàng";
    return;
  }

  // 2. Hiển thị thông tin tóm tắt đơn hàng
  document.getElementById("order-id-display").textContent = order.id;

  const formattedTotal = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(order.total);

  const subTotalEl = document.querySelector(
    "#order-summary-total span:last-child"
  );
  const shippingEl = document.querySelector(
    "#order-summary-shipping span:last-child"
  );
  const grandTotalEl = document.querySelector(
    "#order-summary-grand-total span:last-child"
  );
  const paymentEl = document.querySelector(
    "#order-summary-payment span:last-child"
  );

  if (subTotalEl) subTotalEl.textContent = formattedTotal;
  if (shippingEl) shippingEl.textContent = "0đ";
  if (grandTotalEl) grandTotalEl.textContent = formattedTotal;
  if (paymentEl) paymentEl.textContent = order.payment;

  // 3. Hiển thị danh sách sản phẩm
  const productListEl = document.getElementById("order-products-list");
  if (productListEl) {
    productListEl.innerHTML = "";

    if (order.order && Array.isArray(order.order)) {
      order.order.forEach((item) => {
        const itemHTML = `
          <div class="d-flex align-items-center mb-3 p-2 border rounded">
              <div class="flex-shrink-0">
                  <img src="${item.img}" alt="${
          item.name
        }" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">
              </div>
              <div class="flex-grow-1 ms-3">
                  <h6 class="mb-1">${item.name}</h6>
                  <div class="text-muted" style="font-size: 0.9em;">
                      <span>Số lượng: ${item.amount}</span>
                  </div>
              </div>
              <div class="ms-auto fw-bold text-danger">
                  ${new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(item.total)}
              </div>
          </div>
        `;
        productListEl.innerHTML += itemHTML;
      });
    }
  }

  // 4. HIỂN THỊ ĐỊA CHỈ NHẬN HÀNG
  if (order.address) {
    document.getElementById("timeline-shipping-name").innerHTML =
      "<b>Tên người nhận:</b> " + order.address.name;
    document.getElementById("timeline-shipping-phone").innerHTML =
      "<b>SĐT:</b> " + order.address.phone;
    document.getElementById("timeline-shipping-address").innerHTML =
      "<b>Địa chỉ nhận hàng:</b> " + order.address.address;
  }

  // 5. Cập nhật timeline theo trạng thái hiện tại (****** PHẦN ĐÃ SỬA LỖI ******)
  const steps = document.querySelectorAll(".timeline-step");
  let activeFound = false;

  steps.forEach((step) => {
    step.classList.remove("active", "completed");
    const timeEl = step.querySelector(".timeline-time");
    if (timeEl) timeEl.textContent = "";
  });

  steps.forEach((step) => {
    // Dòng này đã được sửa từ step.step.dataset.status
    const stepStatus = step.dataset.status;
    if (activeFound) return;

    if (stepStatus === order.status) {
      step.classList.add("active");
      activeFound = true;
      const activeTimeEl = step.querySelector(".timeline-time");
      if (activeTimeEl) activeTimeEl.textContent = order.time;
    } else {
      step.classList.add("completed");
    }
  });

  // 6. Ẩn giỏ hàng và hiển thị timeline (Phần này sẽ chạy được sau khi sửa lỗi)
  document.getElementById("cart-list").style.display = "none";
  document.getElementById("cart-empty").style.display = "none";
  document.getElementById("order-timeline-view").style.display = "block";
}
