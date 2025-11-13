document.addEventListener("DOMContentLoaded", function () {
  const order = JSON.parse(localStorage.getItem("currentOrder"));
  if (!order) {
    document.getElementById("order-id-display").textContent =
      "Không tìm thấy đơn hàng";
    return;
  }

  // Hiển thị thông tin đơn hàng
  document.getElementById("order-id-display").textContent = order.id;
  document.querySelector(
    "#order-summary-grand-total span:last-child"
  ).textContent = order.total;
  document.querySelector("#order-summary-payment span:last-child").textContent =
    order.payment;

  // Cập nhật timeline theo trạng thái hiện tại
  const steps = document.querySelectorAll(".timeline-step");
  let activeFound = false;
  steps.forEach((step) => {
    const stepStatus = step.dataset.status;
    if (stepStatus === order.status) {
      step.classList.add("active");
      activeFound = true;
    } else if (!activeFound) {
      step.classList.add("completed");
    }
  });

  // Hiển thị thời gian tại bước hiện tại
  document.querySelector(".timeline-step.active .timeline-time").textContent =
    order.time;
});
