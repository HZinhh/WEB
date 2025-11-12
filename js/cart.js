initCart();
cartList = JSON.parse(localStorage.getItem("cartList")); //danh sách toàn bộ cart của toàn bộ user

function findProduct(id) {
  for (let i = 0; i < cartList.length; i++) if (cartList[i].id === id) return i;
  return -1;
}

function insertCart(id, amount) {
  product = getProduct(id);

  let temp = {
    username: userLogin,
    id: id,
    name: product.name,
    img: product.img,
    brand: product.brand,
    amount: amount,
    remain: product.remain,
    price: product.price,
    total: product.price * amount,
    checked: true,
  };

  cartList.push(temp);
  localStorage.setItem("cartList", JSON.stringify(cartList));
}

function updateCart(id, amount) {
  for (let i = 0; i < cartList.length; i++)
    if (cartList[i].id === id) {
      cartList[i].amount = Number(cartList[i].amount) + Number(amount);
      cartList[i].total =
        Number(cartList[i].total) + Number(cartList[i].price) * Number(amount);
      break;
    }
  localStorage.setItem("cartList", JSON.stringify(cartList));
}

function deleteCart(id) {
  cartList.splice(
    cartList.findIndex((cart) => cart === userCart[id]),
    1
  );
  localStorage.setItem("cartList", JSON.stringify(cartList));
  if (cartList.length === 0) location.reload();
  displayCart();
}

function deleteAllCart() {
  while (true) {
    let index = cartList.findIndex((cart) => cart.username === userLogin);
    if (index === -1) break;
    cartList.splice(index);
  }
  localStorage.setItem("cartList", JSON.stringify(cartList));
  location.reload();
  displayCart();
}

//danh sách cart của user đang đăng nhập, chỉ dùng để output
let userCart = [];

function selectCart() {
  userCart = [];
  for (let i = 0; i < cartList.length; i++)
    if (cartList[i].username === userLogin) userCart.push(cartList[i]);
}
