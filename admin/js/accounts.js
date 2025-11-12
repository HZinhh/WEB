let userData = [
  { username: 'admin', password: 'admin', email: 'admin@gmail.com', ngaydangky: '1/11/2025', status: 1 },
  { username: 'tai', password: '123456', email: 'tai@gmail.com', ngaydangky: '1/11/2025', status: 1 },
  { username: 'an', password: '123456', email: 'an@gmail.com', ngaydangky: '1/11/2025', status: 1 },
  { username: 'vinh', password: '123456', email: 'vinh@gmail.com', ngaydangky: '1/11/2025', status: 1 },
  { username: 'kha', password: '123456', email: 'kha@gmail.com', ngaydangky: '1/11/2025', status: 1 },
  { username: 'dat', password: '123456', email: 'dat@gmail.com', ngaydangky: '1/11/2025', status: 1 },
];

onload = () => {
  if (localStorage.getItem('userDatabase') === null)
      localStorage.setItem('userDatabase',JSON.stringify(userData));
  else
      userData = JSON.parse(localStorage.getItem("userDatabase"));
  
  if (location.pathname.includes("admin")) loadBang()
}

function loadBang() {
  let display = '';
  for (let i=0; i<userData.length; i++)
      display += `
        <tr>
            <td>${userData[i].username}</td>
            <td>${userData[i].password}</td>
            <td>${userData[i].email}</td>
            <td>${userData[i].ngaydangky}</td>
            <td>
                <button class="btn btn-danger" onclick="khoaUser(${i})" id="lock">
                    ${(userData[i].status === 0) ? 'Mở khóa' : 'Khóa'}
                </button>
            </td>
        </tr>
      `
  document.getElementById('user-list').innerHTML = display;
}

function dangKi(user) {
  userData = JSON.parse(localStorage.getItem('userDatabase'));
  userData.push(user);
  localStorage.setItem('userDatabase',JSON.stringify(userData));
}

function suaMatKhau(username, password) {
  userData = JSON.parse(localStorage.getItem('userDatabase'));
  const index = userData.findIndex(user => user.username === username);
  userData[index].password = password;
  userData[index].status = 1;
  localStorage.setItem('userDatabase',JSON.stringify(userData));
}

function khoaUser(index) {
  userData = JSON.parse(localStorage.getItem('userDatabase'));
  userData[index].status = (userData[index].status === 1) ? 0 : 1;
  localStorage.setItem('userDatabase',JSON.stringify(userData));
  loadBang();
}

function checkKhoa(username) {
  userData = JSON.parse(localStorage.getItem('userDatabase'));
  return userData[userData.findIndex(user => user.username === username)].status === 0;
}

function usernameTonTai(username) {
  userData = JSON.parse(localStorage.getItem('userDatabase'));
  return userData.findIndex(user => user.username === username);
}

function checkPassword(index, password) {
  userData = JSON.parse(localStorage.getItem('userDatabase'));
  return (userData[index].password === password);
}

function checkEmail(index, email) {
  userData = JSON.parse(localStorage.getItem('userDatabase'));
  return (userData[index].email === email);
}