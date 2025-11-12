// Khởi tạo khi tải trang
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
  if (!localStorage.getItem("importDatabase")) {
    localStorage.setItem("importDatabase", JSON.stringify([]));
  }
  loadImports();
  document
    .getElementById("searchImport")
    .addEventListener("keyup", function (e) {
      if (e.key === "Enter") {
        searchImport();
      }
    });
};

// Hàm tiện ích
function getProductsFromStorage() {
  return JSON.parse(localStorage.getItem("productDatabase"));
}
function getImportsFromStorage() {
  return JSON.parse(localStorage.getItem("importDatabase"));
}
function saveImportsToStorage(imports) {
  localStorage.setItem("importDatabase", JSON.stringify(imports));
}
function saveProductsToStorage(products) {
  localStorage.setItem("productDatabase", JSON.stringify(products));
}
function formatCurrency(number) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(number);
}

// Hiển thị alert
function showAlert(message, isSuccess = true) {
  const alertClass = isSuccess ? ".alert-success" : ".alert-danger";
  const alertEl = document.querySelector(alertClass);
  alertEl.textContent = message;
  alertEl.style.display = "block";
  setTimeout(() => {
    alertEl.style.display = "none";
  }, 3000);
}

// Tạo ID phiếu nhập (SP001)
function generateImportId() {
  const imports = getImportsFromStorage();
  let maxId = 0;
  imports.forEach((imp) => {
    if (imp.id.startsWith("SP")) {
      const num = parseInt(imp.id.substring(2));
      if (num > maxId) maxId = num;
    }
  });
  return "SP" + String(maxId + 1).padStart(3, "0");
}

// Tải và hiển thị danh sách phiếu nhập
function loadImports(search = "") {
  const imports = getImportsFromStorage();
  const tbody = document.getElementById("import-list");
  tbody.innerHTML = "";
  const filteredImports = imports
    .filter((imp) => {
      const searchTerm = search.toLowerCase();
      return (
        imp.id.toLowerCase().includes(searchTerm) ||
        imp.date.includes(searchTerm)
      );
    })
    .reverse();
  if (filteredImports.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6">Không có phiếu nhập nào.</td></tr>';
    return;
  }

  filteredImports.forEach((imp) => {
    let totalAmount = 0;
    let detailsHtml = '<ul class="list-unstyled mb-0">';

    imp.details.forEach((d) => {
      const product = getProductsFromStorage().find(
        (p) => p.id === d.productId
      ) || { name: "Sản phẩm không tồn tại" };

      const quantity = Number(d.quantity) || 0;
      const importPrice = Number(d.importPrice) || 0;

      const lineTotal = quantity * importPrice;
      totalAmount += lineTotal;

      detailsHtml += `<li>- ${product.name} (SL: ${quantity} x ${formatCurrency(
        importPrice
      )})</li>`;
    });
    detailsHtml += "</ul>";

    tbody.innerHTML += `
            <tr>
                <td>${imp.id}</td>
                <td>${new Date(imp.date).toLocaleDateString("vi-VN")}</td>
                <td class="text-start">${detailsHtml}</td>
                <td>${formatCurrency(totalAmount)}</td>
                <td>
                    <span class="badge ${
                      imp.status === "Đã hoàn thành"
                        ? "bg-success"
                        : "bg-warning"
                    }">
                        ${imp.status}
                    </span>
                </td>
                <td>
                    ${
                      imp.status === "Chưa hoàn thành"
                        ? `
                        <button class="btn btn-success btn-sm mb-1" onclick="handleCompleteImport('${imp.id}')">Hoàn thành</button>
                        <button class="btn btn-warning btn-sm mb-1" onclick="openImportForm('Sửa', '${imp.id}')">Sửa</button>
                    `
                        : ""
                    }
                    <button class="btn btn-danger btn-sm mb-1" onclick="handleDeleteImport('${
                      imp.id
                    }')">Xóa</button>
                </td>
            </tr>
        `;
  });
}

// Hàm tìm kiếm
function searchImport() {
  const searchVal = document.getElementById("searchImport").value;
  loadImports(searchVal);
}

// HÀM HELPER ĐỂ RENDER LẠI TẤT CẢ CÁC DÒNG CHI TIẾT PHIẾU NHẬP

function renderAllImportRows(details) {
  const products = getProductsFromStorage();
  let productOptions = "";
  products.forEach((p) => {
    productOptions += `<option value="${p.id}">${p.name}</option>`;
  });

  let rowsHtml = "";
  details.forEach((d, index) => {
    rowsHtml += `
              <div class="row g-3 mb-2 align-items-end" data-index="${index}">
                  <div class="col-md-5">
                      <label class="form-label small">Sản phẩm</label>
                      <select class="form-select detail-product" onchange="updateDetail(${index}, 'productId', this.value)">
                          ${productOptions}
                      </select>
                  </div>
                  <div class="col-md-2">
                      <label class="form-label small">Số lượng</label>
                      <input type="number" class="form-control detail-quantity" min="1" value="${d.quantity}" onchange="updateDetail(${index}, 'quantity', this.value)">
                  </div>
                  <div class="col-md-3">
                      <label class="form-label small">Giá nhập</label>
                      <input type="number" class="form-control detail-price" min="0" value="${d.importPrice}" onchange="updateDetail(${index}, 'importPrice', this.value)">
                  </div>
                  <div class="col-md-2">
                      <label class="form-label small">&nbsp;</label> 
                      <button type="button" class="btn btn-danger w-100" onclick="removeDetailRow(${index})">Xóa</button>
                  </div>
              </div>
          `;
  });

  const container = document.getElementById("import-details-container");
  if (container) {
    container.innerHTML = rowsHtml;

    details.forEach((d, index) => {
      const row = container.querySelector(`div[data-index="${index}"]`);
      if (row) {
        row.querySelector(".detail-product").value = d.productId;
      }
    });
  }
}

// Mở Modal Thêm/Sửa phiếu nhập
function openImportForm(mode, importId = null) {
  const modalElement = document.getElementById("importModal");
  const products = getProductsFromStorage();
  let importData = {
    id: generateImportId(),
    date: new Date().toISOString().split("T")[0],
    details: [
      { productId: products[0]?.id || "", quantity: 1, importPrice: 0 },
    ],
    status: "Chưa hoàn thành",
  };
  let isEditing = false;

  if (mode === "Sửa" && importId) {
    importData = getImportsFromStorage().find((imp) => imp.id === importId);
    isEditing = true;
    if (importData.status === "Đã hoàn thành") {
      alert("Phiếu đã hoàn thành, không thể sửa.");
      return;
    }
  }

  // HTML của Modal
  modalElement.innerHTML = `
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="importModalLabel">${mode} Phiếu nhập</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row mb-3">
                            <div class="col-md-6">
                                <label class="form-label">Mã Phiếu</label>
                                <input type="text" class="form-control" id="importId" value="${
                                  importData.id
                                }" ${isEditing ? "readonly" : ""}>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Ngày nhập</label>
                                <input type="date" class="form-control" id="importDate" value="${
                                  importData.date
                                }">
                            </div>
                        </div>
                        <hr>
                        <h6>Chi tiết phiếu nhập</h6>
                        
                        <div id="import-details-container">
                            </div>
                        
                        <button type="button" class="btn btn-info btn-sm mt-2" onclick="addDetailRow()">Thêm sản phẩm</button>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-primary" onclick="handleSaveImport('${mode}', '${importId}')">Lưu phiếu nhập</button>
                </div>
            </div>
        </div>
    `;

  renderAllImportRows(importData.details);

  modalElement.dataset.importData = JSON.stringify(importData);

  new bootstrap.Modal(modalElement).show();
}

function getModalData() {
  return JSON.parse(document.getElementById("importModal").dataset.importData);
}

function updateDetail(index, field, value) {
  let data = getModalData();
  data.details[index][field] = field === "productId" ? value : Number(value);
  document.getElementById("importModal").dataset.importData =
    JSON.stringify(data);
}

function addDetailRow() {
  let data = getModalData();
  const products = getProductsFromStorage();
  data.details.push({
    productId: products[0]?.id || "",
    quantity: 1,
    importPrice: 0,
  });
  document.getElementById("importModal").dataset.importData =
    JSON.stringify(data);

  renderAllImportRows(data.details);
}

// Xóa dòng sản phẩm
function removeDetailRow(index) {
  let data = getModalData();
  if (data.details.length <= 1) {
    alert("Phiếu nhập phải có ít nhất 1 sản phẩm.");
    return;
  }
  data.details.splice(index, 1);
  document.getElementById("importModal").dataset.importData =
    JSON.stringify(data);

  renderAllImportRows(data.details);
}

// Lưu phiếu nhập
function handleSaveImport(mode, importId) {
  const modalElement = document.getElementById("importModal");
  const imports = getImportsFromStorage();
  const finalData = getModalData();
  finalData.id = document.getElementById("importId").value;
  finalData.date = document.getElementById("importDate").value;

  if (finalData.details.length === 0) {
    alert("Phiếu nhập phải có ít nhất 1 sản phẩm.");
    return;
  }
  for (const d of finalData.details) {
    if (!d.productId || d.quantity <= 0 || d.importPrice < 0) {
      alert(
        "Vui lòng điền đầy đủ và chính xác thông tin sản phẩm (Số lượng > 0, Giá nhập >= 0)."
      );
      return;
    }
  }

  if (mode === "Thêm") {
    if (imports.some((imp) => imp.id === finalData.id)) {
      alert("Mã phiếu nhập đã tồn tại. Vui lòng thử lại.");
      document.getElementById("importId").value = generateImportId();
      return;
    }
    imports.push(finalData);
  } else {
    // Chế độ Sửa
    const index = imports.findIndex((imp) => imp.id === importId);
    if (index > -1) {
      imports[index] = finalData;
    }
  }

  saveImportsToStorage(imports);
  bootstrap.Modal.getInstance(modalElement).hide();
  showAlert(
    `Đã ${mode.toLowerCase()} phiếu nhập ${finalData.id} thành công!`,
    true
  );
  loadImports();
}

// Xử lý Hoàn thành phiếu nhập
function handleCompleteImport(importId) {
  if (
    !confirm(
      `Bạn có chắc muốn hoàn thành phiếu nhập ${importId}? Thao tác này sẽ cập nhật tồn kho và không thể sửa phiếu này nữa.`
    )
  ) {
    return;
  }

  const imports = getImportsFromStorage();
  const products = getProductsFromStorage();
  const importData = imports.find((imp) => imp.id === importId);

  if (!importData || importData.status === "Đã hoàn thành") {
    alert("Phiếu không hợp lệ hoặc đã hoàn thành.");
    return;
  }

  // Cập nhật tồn kho và giá nhập (giá vốn)
  importData.details.forEach((d) => {
    const productIndex = products.findIndex((p) => p.id === d.productId);
    if (productIndex > -1) {
      products[productIndex].remain =
        (products[productIndex].remain || 0) + d.quantity;
      products[productIndex].importPrice = d.importPrice;
    }
  });
  importData.status = "Đã hoàn thành";
  saveProductsToStorage(products);
  saveImportsToStorage(imports);
  showAlert(
    `Đã hoàn thành phiếu ${importId}. Tồn kho và giá vốn đã được cập nhật.`,
    true
  );
  loadImports();
}

// Xử lý Xóa phiếu nhập
function handleDeleteImport(importId) {
  const importData = getImportsFromStorage().find((imp) => imp.id === importId);

  if (importData && importData.status === "Đã hoàn thành") {
    if (
      !confirm(
        `Phiếu ${importId} đã hoàn thành và đã cập nhật tồn kho. Xóa phiếu này sẽ KHÔNG khôi phục lại tồn kho. Bạn có chắc muốn xóa?`
      )
    ) {
      return;
    }
  } else {
    if (!confirm(`Bạn có chắc muốn xóa phiếu nhập ${importId}?`)) {
      return;
    }
  }

  let imports = getImportsFromStorage();
  imports = imports.filter((imp) => imp.id !== importId);
  saveImportsToStorage(imports);

  showAlert(`Đã xóa phiếu ${importId}.`, true);
  loadImports();
}
