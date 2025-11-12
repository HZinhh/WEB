checkLogin();

function checkLogin() {
  if (localStorage.getItem('adminLogin') === null) {
      localStorage.setItem('adminLogin',JSON.stringify(""));
      adminLogin = "";
  }
  else adminLogin = JSON.parse(localStorage.getItem("adminLogin"));

  if (adminLogin === "") document.body.innerHTML = `<div class="admin-error">ĐÂY LÀ TRANG CỦA QUẢN TRỊ VIÊN</div>`;
  document.body.style.display = "initial";
}

function dangXuat() {
  localStorage.removeItem("adminLogin");
  location.href = "../index.html";
}