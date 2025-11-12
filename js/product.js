const page = {current: 1, numOfProducts: 9};
const content = document.querySelector(".danh-sach");
let filter = {searchString: "", priceMin: 0, priceMax: 0, searchBrand: [], searchType: [], index: 0, checked: false}

const brandList = ["Innisfree", "Hadalabo", "Maybelline", "Black Rouge",
"Perfect Diary", "Romand", "Merzy", "BBIA", "La Roche-Posay"];

const typeList = [ "Combo", "Tẩy trang", "Sữa rửa mặt", "Toner", "Son môi", "Mặt nạ",
"Kem chống nắng", "Lotion", "Kem dưỡng", "Sữa dưỡng trắng", "Gel dưỡng ẩm", "Kem nền",
"Phấn phủ", "Cushion", "Phấn má hồng", "Che khuyết điểm", "Phấn mắt", "Eyeliner", "Mascara",
"Kẻ mày, Tạo khối", "Kẻ mày" ];


window.onload = () => {
    const urlParam = new URLSearchParams(location.search);
    filter.searchString = urlParam.get('search');

    filterProduct(filter);

    productsList = JSON.parse(localStorage.getItem("productsList"));
    setPage();
    loadThuongHieu();
    loadLoaiSanPham();
}

function setPage(current = page.current, numOfProducts = page.numOfProducts) {
    page.current = current;
    page.numOfProducts = numOfProducts;
    renderPage();
}

function renderPage() {
    if (productsList === null || productsList.length === 0) {
        content.style.display = "initial";
        content.innerHTML = `
            <div class="text-center" style="margin: 100px 0">
                <h1 class="text-center">Không có sản phẩm. Vui lòng thử lại</h1>
                <img src="https://media.tenor.com/v_W_gDtULNwAAAAi/confused-face.gif" alt="">
            </div>
        `
        document.getElementById("page").innerHTML = "";
        return;
    }

    const start = page.numOfProducts * (page.current - 1);
    const end = Math.min(page.numOfProducts * page.current, productsList.length);
    content.style.display = "flex";
    let contentDetail = "";

    for (let i=start; i<end; i++) {
        contentDetail += `
            <div id="chi-tiet" class="chi-tiet">
                <div class="hinh-san-pham" onclick="showInfo(${productsList[i].id})">
                    <img src="${productsList[i].img}" alt="${productsList[i].id}">
                </div>
                <div class="ten-san-pham pt-3" onclick="showInfo(${productsList[i].id})">
                    ${productsList[i].name}
                </div>
                <div class="gia">${getGia(productsList[i].price)}</div>

                <div class="mua-hang d-flex justify-content-center"></div>
            </div>
        `;
        content.innerHTML = contentDetail;
    }

    for (let i=start, j=0; i<end; i++) {
        if (productsList[i].remain > 0)
            document.querySelectorAll(".mua-hang")[i%page.numOfProducts].innerHTML = `
                <div class="input-group mb-3 d-flex justify-content-center pt-3">
                    <input type="number" name="" value="1" min="1" max="${Number(productsList[i].remain)}" class="amount amount-page text-center" onkeyup="checkKey(this, event);">
                    <button class="btn btn-warning" onclick="addToCart(${productsList[i].id}, ${j++})">
                        <i class="bi bi-cart"></i>
                    </button>
                </div>
            `
        else document.querySelectorAll(".mua-hang")[i%page.numOfProducts].innerHTML = `<div class="mb-3 pt-3">Hết hàng</div>`
    }
    renderNumber();
}

function renderNumber() {
    const soTrang = Math.ceil(productsList.length / page.numOfProducts);
    const danhSach = [page.current];
    switch (true) {
        case (page.current === 1): {
            let i = page.current + 1;
            while (i<=soTrang && i<=page.current + 2) danhSach.push(i++);
            break;
        }
        case (page.current === soTrang): {
            let i = page.current - 1;
            while (i>=1 && i>=page.current - 2) danhSach.unshift(i--);
            break;
        }
        default: {
            danhSach.unshift(page.current -  1);
            danhSach.push(page.current + 1);
        }
    }

    let bottom = '<button class="btn btn-outline-danger" onclick="setPage(1)" id="first-page">&lt;</button>';
    for (let i=0; i<danhSach.length; i++) {
        bottom += `
            <button class="btn btn-outline-danger" value="${danhSach[i]}" onclick="setPage(${danhSach[i]})">${danhSach[i]}</button>
        `;
    }
    
    bottom += `<button class="btn btn-outline-danger" onclick="setPage(${soTrang})" id="last-page">&gt;</button>`;
    document.getElementById("page").innerHTML = bottom;

    (page.current === 1) && $("#first-page").css("visibility", "hidden") || $("#first-page").css("visibility", "visible");
    (page.current === soTrang) && $("#last-page").css("visibility", "hidden") || $("#last-page").css("visibility", "visible");

    document.querySelectorAll("#page .btn").forEach(button => {
        if (button.value !== `${page.current}`) {
            button.style.backgroundColor = "white";
            button.style.color = "var(--bs-danger)";
        }
        else {
            button.style.backgroundColor = "var(--bs-danger)";
            button.style.color = "white";
        }
    });
}

function getProduct(id) {
    for (let i=0; i<productsList.length; i++)
        if (productsList[i].id === `${id}`) return productsList[i];
    return null;
}

function sort(index) {
    filter.index = index;
    filterProduct(filter);
    
    productsList = JSON.parse(localStorage.getItem("productsList"));
    setPage();
}

function locGia() {
    filter.priceMin = Number(document.getElementById("price-min").value);
    filter.priceMax = Number(document.getElementById("price-max").value);

    if (filter.priceMin > filter.priceMax) {
        [filter.priceMin, filter.priceMax] = [filter.priceMax, filter.priceMin];
        document.getElementById("price-min").value = filter.priceMin;
        document.getElementById("price-max").value = filter.priceMax;     
    }
    filterProduct(filter);
    
    productsList = JSON.parse(localStorage.getItem("productsList"));
    setPage(1);
}

function loadThuongHieu() {
    brandList.forEach(brand => {
        document.getElementById("listThuongHieu").innerHTML += `
            <div class="input-group mb-3">
                <input type="checkbox" id="${brand}" class="check check-th" onclick="locThuongHieu()">
                <label for="${brand}">${brand}</label>
            </div>`;
    });
}

function locThuongHieu() {
    const check = document.querySelectorAll(".check-th");
    filter.searchBrand = [];
    for (let i=0; i<brandList.length; i++)
        if (check[i].checked) filter.searchBrand.push(brandList[i]);
    filterProduct(filter);
    
    productsList = JSON.parse(localStorage.getItem("productsList"));
    setPage(1);
}

function loadLoaiSanPham() {
    typeList.forEach(type => {
        document.getElementById("listLoaiSP").innerHTML += `
            <div class="input-group mb-3">
                <input type="checkbox" class="check check-lsp" onclick="locLoaiSanPham()">
                <label>${type}</label>
            </div>`;
    });

}

function locLoaiSanPham() {
    const check = document.querySelectorAll(".check-lsp");
    filter.searchType = [];
    for (let i=0; i<typeList.length; i++)
        if (check[i].checked) filter.searchType.push(typeList[i]);
    filterProduct(filter);
    
    productsList = JSON.parse(localStorage.getItem("productsList"));
    setPage(1);
}

function locCoHang() {
    filter.checked = document.getElementById("check-co-hang").checked;
    filterProduct(filter);
    
    productsList = JSON.parse(localStorage.getItem("productsList"));
    setPage(1);
}

function checkKey(input, event) {
    if (event.key === "Backspace" || event.key === "Enter") return;
    if (isNaN(event.key)) input.value = input.min;
}

const productView = document.getElementById("productModal");

function showInfo(id) {
    product = getProduct(id);
    
    productView.innerHTML = `
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="p-2 text-end">
                    <button class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <div class="container">
                    <div class="row p-5">
                        <div class="col-5">
                            <img src=${product.img} class="d-block w-100" style="aspect-ratio: 1/1">
                        </div>
                        <div class="col-7">
                            <fieldset class="tieu-de mb-5">
                                <h2 class="mb-4">${product.name}</h2>
                                <h3 style="color: #FF4F81;">${getGia(product.price)}</h3>
                                <div id="mua-hang-info"></div>
                            </fieldset>
        
                            <fieldset class="mb-3">
                                <legend>Mô tả</legend>
                                <p>
                                    ${product.description}
                                </p>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    if (product.remain > 0) document.getElementById("mua-hang-info").innerHTML = `
        <div class="input-group mb-3 pt-3">
            <button class="btn amount text-center" onclick="changeNumber('-')">-</button>
            <input id="amount-info" type="number" name="" id="" value="1" min="1" max="${product.remain}" class="ammount text-center" onkeyup="checkKey(this, event);">
            <button class="btn amount text-center" onclick="changeNumber('+')">+</button>
            <div class="btn btn-warning" onclick="addToCart(${product.id})">Thêm vào giỏ hàng</div>
        </div>
        <div>Tồn kho: ${product.remain}</div>
    `
    else document.getElementById("mua-hang-info").innerHTML = `<div class="mb-3 pt-3">Hết hàng</div>`    
    new bootstrap.Modal(productView).show();
}

function changeNumber(input) {
    amount = document.getElementById("amount-info");
    if (input === "+" && amount.value + 1 <= document.getElementById("amount-info").max) amount.value++;
    else if (amount.value > 1) amount.value--;
}

function addToCart(product, index = undefined) {
    if (userLogin === "") {
        dangerMessage("Bạn cần phải đăng nhập để thêm sản phẩm");
        return;
    }
    if (index === undefined)
        amount = document.getElementById("amount-info");
    else
        amount = document.getElementsByClassName("amount-page")[index];

    if (amount.value === "") dangerMessage("Vui lòng nhập số lượng cần thêm");
    else if (amount.value == 0) dangerMessage("Vui lòng thêm nhiều hơn 1 sản phẩm");
    else {
        if(findProduct(product) === -1) {
            insertCart(product, amount.value);
            successMessage("Thêm thành công sản phẩm");
        }

        else {
            updateCart(product, amount.value);
            successMessage("Update thành công sản phẩm");
        }
    }
}