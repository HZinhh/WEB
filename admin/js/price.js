window.onload = function () {
  if (!localStorage.getItem("productDatabase")) {
    console.error(
      "Chưa có productDatabase. Vui lòng chạy trang products.html trước."
    );
    alert(
      "Lỗi: Chưa có dữ liệu sản phẩm. Vui lòng chạy trang Quản lý sản phẩm trước."
    );
    return;
  }

  // Khởi tạo priceDatabase (lưu % lợi nhuận theo loại)
  if (!localStorage.getItem("priceDatabase")) {
    localStorage.setItem("priceDatabase", JSON.stringify({}));
  }

  loadPriceList();
  loadTypeSelect();

  document
    .getElementById("searchPrice")
    .addEventListener("keyup", function (e) {
      if (e.key === "Enter") {
        searchPrice();
      }
    });

  document
    .getElementById("select-type")
    .addEventListener("change", function () {
      const type = this.value;
      const priceDB = getPriceDB();
      const inputPercent = document.getElementById("type-profit-percent");
      if (type && priceDB[type] !== undefined) {
        inputPercent.value = priceDB[type];
      } else {
        inputPercent.value = "";
      }
    });
};

function getProducts() {
  return JSON.parse(localStorage.getItem("productDatabase"));
}

function saveProducts(products) {
  localStorage.setItem("productDatabase", JSON.stringify(products));
}

function getPriceDB() {
  return JSON.parse(localStorage.getItem("priceDatabase"));
}

function savePriceDB(priceDB) {
  localStorage.setItem("priceDatabase", JSON.stringify(priceDB));
}

function formatCurrency(number) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(number);
}

function showAlert(message, isSuccess = true) {
  const alertClass = isSuccess ? ".alert-success" : ".alert-danger";
  const alertEl = document.querySelector(alertClass);
  alertEl.textContent = message;
  alertEl.style.display = "block";
  setTimeout(() => {
    alertEl.style.display = "none";
  }, 3000);
}

// Tải danh sách các loại sản phẩm vào dropdown
function loadTypeSelect() {
  const products = getProducts();
  const types = [...new Set(products.map((p) => p.type))];
  const selectEl = document.getElementById("select-type");
  selectEl.innerHTML = '<option value="">-- Chọn loại sản phẩm --</option>';
  types.forEach((type) => {
    if (type) {
      selectEl.innerHTML += `<option value="${type}">${type}</option>`;
    }
  });
}

// Tính giá bán
function calculateSalePrice(importPrice, profitPercent) {
  importPrice = Number(importPrice) || 0;
  profitPercent = Number(profitPercent) || 0;

  if (importPrice === 0) return 0;

  const salePrice = importPrice * (1 + profitPercent / 100);
  return Math.round(salePrice / 1000) * 1000;
}

function loadPriceList(search = "") {
  const products = getProducts();
  const priceDB = getPriceDB();
  const tbody = document.getElementById("price-list");
  tbody.innerHTML = "";

  const searchTerm = search.toLowerCase();
  const searchNumber = searchTerm.replace(/\.|đ|\s|vnd/g, "");

  const filteredProducts = products.filter((p) => {
    const name = p.name.toLowerCase();
    const id = p.id.toLowerCase();

    const importPrice = p.importPrice || 0;

    let profitPercent = p.profitPercent;
    if (profitPercent === undefined || profitPercent === null) {
      profitPercent = priceDB[p.type] || 0;
    }

    const salePrice = calculateSalePrice(importPrice, profitPercent);

    if (name.includes(searchTerm)) return true;
    if (id.includes(searchTerm)) return true;

    if (String(importPrice).includes(searchNumber)) return true;
    if (String(profitPercent).includes(searchNumber)) return true;
    if (String(salePrice).includes(searchNumber)) return true;

    return false;
  });

  if (filteredProducts.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7">Không tìm thấy sản phẩm.</td></tr>';
    return;
  }

  filteredProducts.forEach((p) => {
    const importPrice =
      p.importPrice && p.importPrice > 0 ? p.importPrice : p.price || 0;

    let profitPercent = p.profitPercent;
    let isIndividual = true;
    if (profitPercent === undefined || profitPercent === null) {
      profitPercent = priceDB[p.type] || 0;
      isIndividual = false;
    }

    const salePrice = calculateSalePrice(importPrice, profitPercent);

    if (!p.importPrice || p.importPrice === 0) {
      p.importPrice = importPrice;
    }

    if (p.price !== salePrice && salePrice > 0) p.price = salePrice;

    tbody.innerHTML += `
    <tr>
      <td>${p.id}</td>
      <td class="text-start">${p.name}</td>
      <td>${p.type}</td>
      <td>${formatCurrency(importPrice)}</td>
      <td>
        <div class="input-group input-group-sm" style="width: 120px; margin: auto;">
          <input type="number" class="form-control" id="profit-${
            p.id
          }" min="0" value="${profitPercent}">
          <span class="input-group-text ${
            isIndividual ? "bg-warning" : "bg-light"
          }">%</span>
        </div>
      </td>
      <td class="fw-bold text-danger">${formatCurrency(salePrice)}</td>
      <td>
        <div class="d-flex justify-content-center">
          <button class="btn btn-success btn-sm me-1" onclick="saveIndividualProfit('${
            p.id
          }')">Lưu</button>
          <button class="btn btn-secondary btn-sm" onclick="resetIndividualProfit('${
            p.id
          }')">Reset</button>
        </div>
      </td>
    </tr>
  `;
  });

  saveProducts(products);
}

function searchPrice() {
  const searchVal = document.getElementById("searchPrice").value;
  loadPriceList(searchVal);
}

// Áp dụng % lợi nhuận cho cả một LOẠI sản phẩm
function applyProfitToType() {
  const type = document.getElementById("select-type").value;
  const percent = Number(document.getElementById("type-profit-percent").value);

  if (!type) {
    alert("Vui lòng chọn một loại sản phẩm.");
    return;
  }
  if (percent < 0) {
    alert("Phần trăm lợi nhuận không thể âm.");
    return;
  }

  const priceDB = getPriceDB();
  const products = getProducts();

  priceDB[type] = percent;
  savePriceDB(priceDB);

  let updateCount = 0;
  products.forEach((p) => {
    if (p.type === type) {
      if (p.profitPercent === undefined || p.profitPercent === null) {
        const importPrice = p.importPrice || 0;
        p.price = calculateSalePrice(importPrice, percent);
        updateCount++;
      }
    }
  });
  saveProducts(products);
  showAlert(
    `Đã áp dụng ${percent}% lợi nhuận cho ${updateCount} sản phẩm thuộc loại "${type}".`,
    true
  );
  loadPriceList(document.getElementById("searchPrice").value);
}

// Lưu % lợi nhuận cho TỪNG sản phẩm
function saveIndividualProfit(productId) {
  const percent = Number(document.getElementById(`profit-${productId}`).value);
  if (percent < 0) {
    alert("Phần trăm lợi nhuận không thể âm.");
    return;
  }

  const products = getProducts();
  const productIndex = products.findIndex((p) => p.id === productId);

  if (productIndex > -1) {
    products[productIndex].profitPercent = percent;
    const importPrice = products[productIndex].importPrice || 0;
    products[productIndex].price = calculateSalePrice(importPrice, percent);

    saveProducts(products);
    showAlert(`Đã lưu ${percent}% lợi nhuận cho sản phẩm ${productId}.`, true);

    loadPriceList(document.getElementById("searchPrice").value);
  }
}

// Reset % lợi nhuận
function resetIndividualProfit(productId) {
  const products = getProducts();
  const productIndex = products.findIndex((p) => p.id === productId);

  if (productIndex > -1) {
    delete products[productIndex].profitPercent;
    const priceDB = getPriceDB();
    const typePercent = priceDB[products[productIndex].type] || 0;
    const importPrice = products[productIndex].importPrice || 0;
    products[productIndex].price = calculateSalePrice(importPrice, typePercent);

    saveProducts(products);
    showAlert(
      `Đã reset lợi nhuận cho ${productId}, trở về mặc định của loại.`,
      true
    );

    loadPriceList(document.getElementById("searchPrice").value);
  }
}
