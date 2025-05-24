(() => {
      // Data simulasi awal
      const users = [
        { id: 1, name: "Admin Owner", email: "owner@example.com", role: "owner", password: "owner123" },
        { id: 2, name: "Kasir Satu", email: "kasir1@example.com", role: "kasir", password: "kasir123" },
        { id: 3, name: "Pembeli Satu", email: "pembeli1@example.com", role: "pembeli", password: "pembeli123" }
      ];

      let currentUser = null;

      let menuItems = [
        {
          id: 1,
          name: "Nasi Goreng Spesial",
          category: "makanan",
          description: "Nasi goreng dengan telur, ayam, dan sayuran segar.",
          price: 25000,
          imageUrl: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: 2,
          name: "Es Teh Manis",
          category: "minuman",
          description: "Teh manis dingin segar dengan es batu.",
          price: 8000,
          imageUrl: "https://th.bing.com/th/id/OIP.o6_HnoiY_O4HRFOZZAeP0AHaE8?w=284&h=189&c=7&r=0&o=5&pid=1.7"
        },
        {
          id: 3,
          name: "Ayam Bakar Bumbu Rujak",
          category: "makanan",
          description: "Ayam bakar dengan bumbu rujak khas Indonesia.",
          price: 35000,
          imageUrl: "https://th.bing.com/th/id/OIP.H0Fduqo5_QzsnqJmTPwF7QHaEt?w=293&h=186&c=7&r=0&o=5&pid=1.7"
        },
        {
          id: 4,
          name: "Jus Jeruk Segar",
          category: "minuman",
          description: "Jus jeruk segar tanpa tambahan gula.",
          price: 12000,
          imageUrl: "https://th.bing.com/th/id/OIP.aaALJ7LgRYDSc2vyXb_qOwHaHa?w=184&h=185&c=7&r=0&o=5&pid=1.7"
        },
        {
          id: 5,
          name: "Promo Paket Hemat",
          category: "promo",
          description: "Nasi goreng + es teh manis dengan harga spesial.",
          price: 30000,
          imageUrl: "https://th.bing.com/th/id/OIP.idnBpNYZ_Dd1lhFYfB7I1QHaFA?w=288&h=194&c=7&r=0&o=5&pid=1.7"
        },
        {
          id: 6,
          name: "Sate Ayam Madura",
          category: "makanan",
          description: "Sate ayam dengan bumbu kacang khas Madura.",
          price: 28000,
          imageUrl: "https://th.bing.com/th/id/OIP.uarGCgkV-qPMJQsfqsUhtwHaEK?w=307&h=180&c=7&r=0&o=5&pid=1.7"
        },
        {
          id: 7,
          name: "Kopi Tubruk",
          category: "minuman",
          description: "Kopi hitam tradisional Indonesia.",
          price: 10000,
          imageUrl: "https://coffeeland.co.id/wp-content/uploads/2020/02/aset.jpg"
        },
        {
          id: 8,
          name: "Mie Goreng Jawa",
          category: "makanan",
          description: "Mie goreng dengan bumbu khas Jawa dan sayuran.",
          price: 22000,
          imageUrl: "https://bing.com/th?id=OSK.c508b8e16af37476eeda63516c008f21"
        },
        {
          id: 9,
          name: "Es Campur",
          category: "minuman",
          description: "Minuman es dengan campuran buah dan jelly.",
          price: 15000,
          imageUrl: "https://cdn.idntimes.com/content-images/post/20190507/es-campur-bandung-cirebon-483a1ad02721c4a36f42b0cd7f1c21cd.jpg"
        },
        {
          id: 10,
          name: "Promo Minuman Segar",
          category: "promo",
          description: "Jus jeruk + es teh manis dengan harga spesial.",
          price: 18000,
          imageUrl: "https://1.bp.blogspot.com/-0VIHxEbwZgg/X_Vd-tlXWtI/AAAAAAAEOxU/W9YwlVWSDt8zkdplgJRCJohv44JqxGAUQCNcBGAsYHQ/s16000/PONYO%2BPromo%2BMinuman%2BSEGAR%2BHarga%2BMulai%2BDari%2BRp%2B8.000%252C-.jpg"
        },
        {
          id: 11,
          name: "Bakso Sapi",
          category: "makanan",
          description: "Bakso sapi dengan kuah kaldu gurih dan mie.",
          price: 27000,
          imageUrl: "https://th.bing.com/th/id/OIP.0i_oXJEFX6Kj-KE-16HgpAHaHa?rs=1&pid=ImgDetMain"
        },
        {
          id: 12,
          name: "Teh Tarik",
          category: "minuman",
          description: "Teh tarik khas Malaysia dengan susu kental manis.",
          price: 12000,
          imageUrl: "https://th.bing.com/th/id/OIP.n1VUBYPonE-QD7ZWkRNCBgHaE8?rs=1&pid=ImgDetMain"
        },
        {
          id: 13,
          name: "Nasi Uduk",
          category: "makanan",
          description: "Nasi uduk dengan lauk pauk lengkap dan sambal.",
          price: 30000,
          imageUrl: "https://bing.com/th?id=OSK.918378444920e7cdb01c151558305398"
        },
        {
          id: 14,
          name: "Jus Alpukat",
          category: "minuman",
          description: "Jus alpukat segar dengan susu dan gula merah.",
          price: 18000,
          imageUrl: "https://cdn.healthyrecipes101.com/recipes/images/smoothies/avocado-smoothie-recipe-clartludz0049ub1bf0pt3r4y.webp?w=1080&q=80"
        },
        {
          id: 15,
          name: "Promo Paket Makan Siang",
          category: "promo",
          description: "Nasi uduk + teh tarik dengan harga spesial.",
          price: 35000,
          imageUrl: "https://th.bing.com/th/id/OIP.JhksbCIg-tfcAmHwWpW4yAHaHa?rs=1&pid=ImgDetMain"
        }
      ];

      let orders = [];
      let cart = [];

      // DOM Elements
      const navLinks = document.querySelectorAll(".nav-link");
      const pages = document.querySelectorAll(".page");
      const navToggle = document.getElementById("nav-toggle");
      const navMenu = document.querySelector(".nav-list");
      const loadingOverlay = document.getElementById("loading-overlay");

      // Menu elements
      const menuListEl = document.getElementById("menu-list");
      const filterButtons = document.querySelectorAll(".filter-btn");

      // Cart elements
      const cartEmptyMessage = document.getElementById("cart-empty");
      const cartTable = document.getElementById("cart-table");
      const cartItemsTbody = document.getElementById("cart-items");
      const cartTotalEl = document.getElementById("cart-total");
      const cartActions = document.getElementById("cart-actions");
      const btnClearCart = document.getElementById("btn-clear-cart");
      const btnCheckout = document.getElementById("btn-checkout");

      // Kasir elements
      const kasirOrdersList = document.getElementById("kasir-orders-list");
      const kasirOrderDetail = document.getElementById("kasir-order-detail");
      const orderDetailContent = document.getElementById("order-detail-content");
      const btnMarkCompleted = document.getElementById("btn-mark-completed");
      const btnPrintReceipt = document.getElementById("btn-print-receipt");
      const btnBackToOrders = document.getElementById("btn-back-to-orders");

      // Owner elements
      const ownerTabButtons = document.querySelectorAll(".owner-tab-btn");
      const ownerTabs = document.querySelectorAll(".owner-tab");
      const userListTbody = document.getElementById("user-list");
      const menuManagementList = document.getElementById("menu-management-list");
      const btnAddUser = document.getElementById("btn-add-user");
      const btnAddMenu = document.getElementById("btn-add-menu");

      // Login elements
      const loginForm = document.getElementById("login-form");
      const loginMessage = document.getElementById("login-message");
      const btnGoogleSignin = document.getElementById("btn-google-signin");
      const btnFacebookSignin = document.getElementById("btn-facebook-signin");
      const showCreateAccountLink = document.getElementById("show-create-account");
      const hideCreateAccountLink = document.getElementById("hide-create-account");
      const createAccountForm = document.getElementById("create-account-form");

      // Modal elements
      const modalUser = document.getElementById("modal-user");
      const formUser = document.getElementById("form-user");
      const btnCancelUser = document.getElementById("btn-cancel-user");

      const modalMenu = document.getElementById("modal-menu");
      const formMenu = document.getElementById("form-menu");
      const btnCancelMenu = document.getElementById("btn-cancel-menu");

      const modalCheckout = document.getElementById("modal-checkout");
      const formCheckout = document.getElementById("form-checkout");
      const btnCancelCheckout = document.getElementById("btn-cancel-checkout");
      const checkoutItemsList = document.getElementById("checkout-items-list");

      const modalReceipt = document.getElementById("modal-receipt");
      const receiptText = document.getElementById("receipt-text");
      const btnDownloadPdf = document.getElementById("btn-download-pdf");
      const btnPrint = document.getElementById("btn-print");
      const btnCloseReceipt = document.getElementById("btn-close-receipt");

      // Report elements
      const reportPeriodSelect = document.getElementById("report-period");
      const btnGenerateReport = document.getElementById("btn-generate-report");
      const totalRevenueEl = document.getElementById("total-revenue");
      const topItemEl = document.getElementById("top-item");
      const salesChartCtx = document.getElementById("sales-chart").getContext("2d");
      const btnExportPdf = document.getElementById("btn-export-pdf");
      const btnExportExcel = document.getElementById("btn-export-excel");

      // State
      let editingUserId = null;
      let editingMenuId = null;
      let selectedOrderId = null;
      let salesChart = null;

      // Utility functions
      function rupiahFormat(number) {
        return "Rp " + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      }

      function generateUniqueId() {
        return Date.now() + Math.floor(Math.random() * 1000);
      }

      // Show loading overlay
      function showLoading() {
        loadingOverlay.setAttribute("aria-hidden", "false");
        loadingOverlay.classList.add("active");
      }
      // Hide loading overlay
      function hideLoading() {
        loadingOverlay.setAttribute("aria-hidden", "true");
        loadingOverlay.classList.remove("active");
      }

      // Navigation with loading and smooth transition
      function showPage(pageId) {
        showLoading();
        setTimeout(() => {
          pages.forEach((page) => {
            if (page.id === pageId) {
              page.classList.add("active");
            } else {
              page.classList.remove("active");
            }
          });
          navLinks.forEach((link) => {
            if (link.dataset.page === pageId.replace("page-", "")) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
          if (navMenu.classList.contains("open")) {
            navMenu.classList.remove("open");
          }
          clearMessages();
          if (pageId === "page-menu") {
            renderMenuItems("all");
          } else if (pageId === "page-cart") {
            renderCart();
          } else if (pageId === "page-kasir") {
            renderKasirOrders();
            kasirOrderDetail.hidden = true;
            kasirOrdersList.style.display = "flex";
          } else if (pageId === "page-owner") {
            renderUserList();
            renderMenuManagementList();
            renderReport();
          } else if (pageId === "page-login") {
            loginMessage.textContent = "";
            createAccountForm.classList.remove("active");
            showCreateAccountLink.style.display = "block";
            loginForm.style.display = "flex";
          }
          hideLoading();
        }, 400);
      }

      navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const page = link.dataset.page;
          showPage("page-" + page);
        });
      });

      navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
      });

      // Menu rendering and filtering with fade animation
      function renderMenuItems(filter) {
        menuListEl.style.opacity = "0";
        setTimeout(() => {
          menuListEl.innerHTML = "";
          let filteredItems = [];
          if (filter === "all") {
            filteredItems = menuItems;
          } else {
            filteredItems = menuItems.filter((item) => item.category === filter);
          }
          if (filteredItems.length === 0) {
            menuListEl.innerHTML = "<p>Tidak ada item pada kategori ini.</p>";
            menuListEl.style.opacity = "1";
            return;
          }
          filteredItems.forEach((item, index) => {
            const div = document.createElement("div");
            div.className = "menu-item";
            div.style.animationDelay = `${index * 0.1}s`;
            div.innerHTML = `
              <img src="${item.imageUrl}" alt="Gambar ${item.name} - ${item.description}" />
              <div class="menu-item-content">
                <div class="menu-item-name">${item.name}</div>
                <div class="menu-item-description">${item.description}</div>
                <div class="menu-item-price">${rupiahFormat(item.price)}</div>
                <button class="btn-add-cart" data-id="${item.id}">Tambah ke Keranjang</button>
              </div>
            `;
            menuListEl.appendChild(div);
          });
          // Add event listeners to add to cart buttons
          const addCartButtons = menuListEl.querySelectorAll(".btn-add-cart");
          addCartButtons.forEach((btn) => {
            btn.addEventListener("click", () => {
              const id = parseInt(btn.dataset.id);
              addToCart(id);
            });
          });
          menuListEl.style.opacity = "1";
        }, 200);
      }

      filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          filterButtons.forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          renderMenuItems(btn.dataset.filter);
        });
      });

      // Cart functions
      function addToCart(itemId) {
        if (!currentUser || currentUser.role !== "pembeli") {
          alert("Anda harus login sebagai Pembeli untuk menambahkan ke keranjang.");
          showPage("page-login");
          return;
        }
        const item = menuItems.find((m) => m.id === itemId);
        if (!item) return;
        const cartItem = cart.find((c) => c.id === itemId);
        if (cartItem) {
          cartItem.quantity++;
        } else {
          cart.push({ ...item, quantity: 1 });
        }
        alert(`"${item.name}" berhasil ditambahkan ke keranjang.`);
        renderCart();
      }

      function renderCart() {
        cartTable.style.opacity = "0";
        cartActions.style.opacity = "0";
        setTimeout(() => {
          if (cart.length === 0) {
            cartEmptyMessage.style.display = "block";
            cartTable.hidden = true;
            cartActions.hidden = true;
            cartTable.style.opacity = "1";
            cartActions.style.opacity = "1";
            return;
          }
          cartEmptyMessage.style.display = "none";
          cartTable.hidden = false;
          cartActions.hidden = false;
          cartItemsTbody.innerHTML = "";
          let total = 0;
          cart.forEach((item) => {
            const subtotal = item.price * item.quantity;
            total += subtotal;
            const tr = document.createElement("tr");
            tr.innerHTML = `
              <td>${item.name}</td>
              <td>${rupiahFormat(item.price)}</td>
              <td>
                <input type="number" min="1" value="${item.quantity}" data-id="${item.id}" class="cart-qty-input" style="width: 60px;"/>
              </td>
              <td>${rupiahFormat(subtotal)}</td>
              <td>
                <button class="btn btn-danger btn-remove-cart" data-id="${item.id}" title="Hapus item">&times;</button>
              </td>
            `;
            cartItemsTbody.appendChild(tr);
          });
          cartTotalEl.textContent = rupiahFormat(total);

          // Add event listeners for quantity changes
          const qtyInputs = cartItemsTbody.querySelectorAll(".cart-qty-input");
          qtyInputs.forEach((input) => {
            input.addEventListener("change", (e) => {
              const id = parseInt(e.target.dataset.id);
              let val = parseInt(e.target.value);
              if (isNaN(val) || val < 1) val = 1;
              e.target.value = val;
              const cartItem = cart.find((c) => c.id === id);
              if (cartItem) {
                cartItem.quantity = val;
                renderCart();
              }
            });
          });

          // Remove item buttons
          const removeButtons = cartItemsTbody.querySelectorAll(".btn-remove-cart");
          removeButtons.forEach((btn) => {
            btn.addEventListener("click", () => {
              const id = parseInt(btn.dataset.id);
              cart = cart.filter((c) => c.id !== id);
              renderCart();
            });
          });
          cartTable.style.opacity = "1";
          cartActions.style.opacity = "1";
        }, 200);
      }

      btnClearCart.addEventListener("click", () => {
        if (confirm("Apakah Anda yakin ingin mengosongkan keranjang?")) {
          cart = [];
          renderCart();
        }
      });

      btnCheckout.addEventListener("click", () => {
        if (cart.length === 0) {
          alert("Keranjang kosong, tidak ada yang bisa dipesan.");
          return;
        }
        openCheckoutModal();
      });

      // Checkout modal
      function openCheckoutModal() {
        checkoutItemsList.innerHTML = "";
        cart.forEach((item) => {
          const div = document.createElement("div");
          div.textContent = `${item.name} x ${item.quantity} = ${rupiahFormat(item.price * item.quantity)}`;
          checkoutItemsList.appendChild(div);
        });
        modalCheckout.setAttribute("aria-hidden", "false");
        modalCheckout.style.display = "flex";
      }
      function closeCheckoutModal() {
        modalCheckout.setAttribute("aria-hidden", "true");
        modalCheckout.style.display = "none";
      }
      btnCancelCheckout.addEventListener("click", () => {
        closeCheckoutModal();
      });

      formCheckout.addEventListener("submit", (e) => {
        e.preventDefault();
        const paymentMethod = formCheckout.paymentMethod.value;
        processOrder(paymentMethod);
        closeCheckoutModal();
      });

      // Process order (Pembeli)
      function processOrder(paymentMethod) {
        if (!currentUser || currentUser.role !== "pembeli") {
          alert("Anda harus login sebagai Pembeli untuk melakukan pemesanan.");
          showPage("page-login");
          return;
        }
        const orderId = generateUniqueId();
        const order = {
          id: orderId,
          userId: currentUser.id,
          items: cart.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity
          })),
          total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
          paymentMethod,
          status: "pending",
          timestamp: new Date()
        };
        orders.push(order);
        cart = [];
        alert("Pesanan berhasil dikirim ke Kasir.");
        renderCart();
        showPage("page-home");
        if (currentUser.role === "kasir") {
          renderKasirOrders();
        }
      }

      // Kasir dashboard
      function renderKasirOrders() {
        kasirOrdersList.style.opacity = "0";
        setTimeout(() => {
          kasirOrdersList.innerHTML = "";
          const pendingOrders = orders.filter((o) => o.status === "pending");
          if (pendingOrders.length === 0) {
            kasirOrdersList.innerHTML = "<p>Tidak ada pesanan masuk.</p>";
            kasirOrdersList.style.opacity = "1";
            return;
          }
          pendingOrders.forEach((order, index) => {
            const div = document.createElement("div");
            div.className = "order-card";
            div.style.animationDelay = `${index * 0.1}s`;
            div.dataset.id = order.id;
            div.innerHTML = `
              <strong>Order ID:</strong> ${order.id}<br/>
              <strong>Waktu:</strong> ${order.timestamp.toLocaleString()}<br/>
              <strong>Total:</strong> ${rupiahFormat(order.total)}<br/>
              <strong>Metode Pembayaran:</strong> ${order.paymentMethod}
            `;
            div.addEventListener("click", () => {
              showOrderDetail(order.id);
            });
            kasirOrdersList.appendChild(div);
          });
          kasirOrdersList.style.opacity = "1";
        }, 200);
      }

      function showOrderDetail(orderId) {
        selectedOrderId = orderId;
        const order = orders.find((o) => o.id === orderId);
        if (!order) return;
        let html = `<ul>`;
        order.items.forEach((item) => {
          html += `<li>${item.name} x ${item.quantity} = ${rupiahFormat(item.price * item.quantity)}</li>`;
        });
        html += `</ul>`;
        html += `<p><strong>Total:</strong> ${rupiahFormat(order.total)}</p>`;
        html += `<p><strong>Status:</strong> ${order.status}</p>`;
        orderDetailContent.innerHTML = html;
        kasirOrderDetail.hidden = false;
        kasirOrdersList.style.display = "none";
        kasirOrderDetail.style.opacity = "0";
        setTimeout(() => {
          kasirOrderDetail.style.opacity = "1";
        }, 50);
      }

      btnBackToOrders.addEventListener("click", () => {
        kasirOrderDetail.style.opacity = "0";
        setTimeout(() => {
          kasirOrderDetail.hidden = true;
          kasirOrdersList.style.display = "flex";
          kasirOrdersList.style.opacity = "1";
          selectedOrderId = null;
        }, 300);
      });

      btnMarkCompleted.addEventListener("click", () => {
        if (!selectedOrderId) return;
        const order = orders.find((o) => o.id === selectedOrderId);
        if (!order) return;
        order.status = "completed";
        alert("Pesanan telah ditandai selesai.");
        kasirOrderDetail.hidden = true;
        kasirOrdersList.style.display = "flex";
        renderKasirOrders();
        selectedOrderId = null;
      });

      btnPrintReceipt.addEventListener("click", () => {
        if (!selectedOrderId) return;
        const order = orders.find((o) => o.id === selectedOrderId);
        if (!order) return;
        openReceiptModal(order);
      });

      // Receipt modal
      function openReceiptModal(order) {
        let text = "";
        text += "===== STRUK TRANSAKSI =====\n";
        text += `Kode Unik: ${order.id}\n`;
        text += `Waktu: ${order.timestamp.toLocaleString()}\n`;
        text += "---------------------------\n";
        order.items.forEach((item) => {
          text += `${item.name} x${item.quantity} = ${rupiahFormat(item.price * item.quantity)}\n`;
        });
        text += "---------------------------\n";
        text += `Total: ${rupiahFormat(order.total)}\n`;
        text += `Metode Pembayaran: ${order.paymentMethod}\n`;
        text += "===========================\n";
        receiptText.textContent = text;
        modalReceipt.setAttribute("aria-hidden", "false");
        modalReceipt.style.display = "flex";
      }
      function closeReceiptModal() {
        modalReceipt.setAttribute("aria-hidden", "true");
        modalReceipt.style.display = "none";
      }
      btnCloseReceipt.addEventListener("click", () => {
        closeReceiptModal();
      });

      btnPrint.addEventListener("click", () => {
        const printWindow = window.open("", "Print Struk", "width=600,height=600");
        printWindow.document.write("<pre>" + receiptText.textContent + "</pre>");
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        printWindow.close();
      });

      btnDownloadPdf.addEventListener("click", () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const lines = receiptText.textContent.split("\n");
        let y = 10;
        doc.setFont("Courier", "normal");
        doc.setFontSize(12);
        lines.forEach((line) => {
          doc.text(line, 10, y);
          y += 7;
        });
        doc.save(`struk-${Date.now()}.pdf`);
      });

      // Owner dashboard tabs
      ownerTabButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          ownerTabButtons.forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          const tab = btn.dataset.tab;
          ownerTabs.forEach((t) => {
            if (t.id === "tab-" + tab) {
              t.classList.add("active");
            } else {
              t.classList.remove("active");
            }
          });
          if (tab === "manajemen-user") {
            renderUserList();
          } else if (tab === "manajemen-menu") {
            renderMenuManagementList();
          } else if (tab === "laporan") {
            renderReport();
          }
        });
      });

      // User management
      function renderUserList() {
        userListTbody.style.opacity = "0";
        setTimeout(() => {
          userListTbody.innerHTML = "";
          users.forEach((user) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
              <td>${user.name}</td>
              <td>${user.email}</td>
              <td>${user.role}</td>
              <td>
                <button class="btn btn-secondary btn-edit-user" data-id="${user.id}">Edit</button>
                <button class="btn btn-danger btn-delete-user" data-id="${user.id}">Hapus</button>
              </td>
            `;
            userListTbody.appendChild(tr);
          });
          // Edit buttons
          const editButtons = userListTbody.querySelectorAll(".btn-edit-user");
          editButtons.forEach((btn) => {
            btn.addEventListener("click", () => {
              const id = parseInt(btn.dataset.id);
              openUserModal(id);
            });
          });
          // Delete buttons
          const deleteButtons = userListTbody.querySelectorAll(".btn-delete-user");
          deleteButtons.forEach((btn) => {
            btn.addEventListener("click", () => {
              const id = parseInt(btn.dataset.id);
              if (confirm("Apakah Anda yakin ingin menghapus user ini?")) {
                const index = users.findIndex((u) => u.id === id);
                if (index !== -1) {
                  users.splice(index, 1);
                  renderUserList();
                }
              }
            });
          });
          userListTbody.style.opacity = "1";
        }, 200);
      }

      btnAddUser.addEventListener("click", () => {
        openUserModal(null);
      });

      function openUserModal(userId) {
        editingUserId = userId;
        if (userId === null) {
          formUser.reset();
          document.getElementById("modal-user-title").textContent = "Tambah User Baru";
          formUser.userPassword.required = true;
        } else {
          const user = users.find((u) => u.id === userId);
          if (!user) return;
          document.getElementById("modal-user-title").textContent = "Edit User";
          formUser.userName.value = user.name;
          formUser.userEmail.value = user.email;
          formUser.userRole.value = user.role;
          formUser.userPassword.value = "";
          formUser.userPassword.required = false;
        }
        modalUser.setAttribute("aria-hidden", "false");
        modalUser.style.display = "flex";
      }
      function closeUserModal() {
        modalUser.setAttribute("aria-hidden", "true");
        modalUser.style.display = "none";
        editingUserId = null;
      }
      btnCancelUser.addEventListener("click", () => {
        closeUserModal();
      });

      formUser.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = formUser.userName.value.trim();
        const email = formUser.userEmail.value.trim();
        const role = formUser.userRole.value;
        const password = formUser.userPassword.value;

        if (editingUserId === null) {
          // Tambah user baru
          if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
            alert("Email sudah terdaftar.");
            return;
          }
          const newUser = {
            id: generateUniqueId(),
            name,
            email,
            role,
            password: password || "default123"
          };
          users.push(newUser);
          alert("User berhasil ditambahkan.");
        } else {
          // Edit user
          const user = users.find((u) => u.id === editingUserId);
          if (!user) return;
          if (email.toLowerCase() !== user.email.toLowerCase() && users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
            alert("Email sudah terdaftar.");
            return;
          }
          user.name = name;
          user.email = email;
          user.role = role;
          if (password) {
            user.password = password;
          }
          alert("User berhasil diperbarui.");
        }
        closeUserModal();
        renderUserList();
      });

      // Menu management
      function renderMenuManagementList() {
        menuManagementList.style.opacity = "0";
        setTimeout(() => {
          menuManagementList.innerHTML = "";
          menuItems.forEach((item) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
              <td><img src="${item.imageUrl}" alt="Gambar ${item.name} - ${item.description}" /></td>
              <td>${item.name}</td>
              <td>${item.category}</td>
              <td>${item.description}</td>
              <td>${rupiahFormat(item.price)}</td>
              <td>
                <button class="btn btn-secondary btn-edit-menu" data-id="${item.id}">Edit</button>
                <button class="btn btn-danger btn-delete-menu" data-id="${item.id}">Hapus</button>
              </td>
            `;
            menuManagementList.appendChild(tr);
          });
          // Edit buttons
          const editButtons = menuManagementList.querySelectorAll(".btn-edit-menu");
          editButtons.forEach((btn) => {
            btn.addEventListener("click", () => {
              const id = parseInt(btn.dataset.id);
              openMenuModal(id);
            });
          });
          // Delete buttons
          const deleteButtons = menuManagementList.querySelectorAll(".btn-delete-menu");
          deleteButtons.forEach((btn) => {
            btn.addEventListener("click", () => {
              const id = parseInt(btn.dataset.id);
              if (confirm("Apakah Anda yakin ingin menghapus item menu ini?")) {
                const index = menuItems.findIndex((m) => m.id === id);
                if (index !== -1) {
                  menuItems.splice(index, 1);
                  renderMenuManagementList();
                  if (document.getElementById("page-menu").classList.contains("active")) {
                    renderMenuItems("all");
                  }
                }
              }
            });
          });
          menuManagementList.style.opacity = "1";
        }, 200);
      }

      btnAddMenu.addEventListener("click", () => {
        openMenuModal(null);
      });

      function openMenuModal(menuId) {
        editingMenuId = menuId;
        if (menuId === null) {
          formMenu.reset();
          document.getElementById("modal-menu-title").textContent = "Tambah Item Menu";
        } else {
          const item = menuItems.find((m) => m.id === menuId);
          if (!item) return;
          document.getElementById("modal-menu-title").textContent = "Edit Item Menu";
          formMenu.menuName.value = item.name;
          formMenu.menuCategory.value = item.category;
          formMenu.menuDescription.value = item.description;
          formMenu.menuPrice.value = item.price;
          formMenu.menuImageUrl.value = item.imageUrl;
        }
        modalMenu.setAttribute("aria-hidden", "false");
        modalMenu.style.display = "flex";
      }
      function closeMenuModal() {
        modalMenu.setAttribute("aria-hidden", "true");
        modalMenu.style.display = "none";
        editingMenuId = null;
      }
      btnCancelMenu.addEventListener("click", () => {
        closeMenuModal();
      });

      formMenu.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = formMenu.menuName.value.trim();
        const category = formMenu.menuCategory.value;
        const description = formMenu.menuDescription.value.trim();
        const price = parseInt(formMenu.menuPrice.value);
        const imageUrl = formMenu.menuImageUrl.value.trim();

        if (editingMenuId === null) {
          // Tambah menu baru
          const newItem = {
            id: generateUniqueId(),
            name,
            category,
            description,
            price,
            imageUrl
          };
          menuItems.push(newItem);
          alert("Item menu berhasil ditambahkan.");
        } else {
          // Edit menu
          const item = menuItems.find((m) => m.id === editingMenuId);
          if (!item) return;
          item.name = name;
          item.category = category;
          item.description = description;
          item.price = price;
          item.imageUrl = imageUrl;
          alert("Item menu berhasil diperbarui.");
        }
        closeMenuModal();
        renderMenuManagementList();
        if (document.getElementById("page-menu").classList.contains("active")) {
          renderMenuItems("all");
        }
      });

      // Login
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = loginForm.email.value.trim();
        const password = loginForm.password.value;
        const role = loginForm.role.value;

        const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.role === role);
        if (!user) {
          loginMessage.textContent = "User tidak ditemukan dengan email dan role tersebut.";
          loginMessage.style.color = "red";
          return;
        }
        if (user.password !== password) {
          loginMessage.textContent = "Password salah.";
          loginMessage.style.color = "red";
          return;
        }
        currentUser = user;
        loginMessage.textContent = `Login berhasil sebagai ${user.role}.`;
        loginMessage.style.color = "green";
        // Redirect sesuai role
        if (user.role === "pembeli") {
          showPage("page-menu");
        } else if (user.role === "kasir") {
          showPage("page-kasir");
        } else if (user.role === "owner") {
          showPage("page-owner");
        }
        loginForm.reset();
      });

      // Create account form toggle
      showCreateAccountLink.addEventListener("click", () => {
        createAccountForm.classList.add("active");
        showCreateAccountLink.style.display = "none";
        loginForm.style.display = "none";
        loginMessage.textContent = "";
      });
      hideCreateAccountLink.addEventListener("click", () => {
        createAccountForm.classList.remove("active");
        showCreateAccountLink.style.display = "block";
        loginForm.style.display = "flex";
        loginMessage.textContent = "";
      });

      // Create account form submit
      createAccountForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = createAccountForm.name.value.trim();
        const email = createAccountForm.email.value.trim();
        const password = createAccountForm.password.value;
        const role = createAccountForm.role.value;

        if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
          loginMessage.textContent = "Email sudah terdaftar.";
          loginMessage.style.color = "red";
          return;
        }
        if (password.length < 6) {
          loginMessage.textContent = "Password minimal 6 karakter.";
          loginMessage.style.color = "red";
          return;
        }
        const newUser = {
          id: generateUniqueId(),
          name,
          email,
          role,
          password
        };
        users.push(newUser);
        loginMessage.textContent = "Akun berhasil dibuat. Silakan login.";
        loginMessage.style.color = "green";
        createAccountForm.reset();
        createAccountForm.classList.remove("active");
        showCreateAccountLink.style.display = "block";
        loginForm.style.display = "flex";
      });

      // Google Sign-In
      function handleGoogleCredentialResponse(response) {
        // Decode JWT token to get user info
        const base64Url = response.credential.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        const profile = JSON.parse(jsonPayload);
        // profile contains email, name, picture, etc.
        const email = profile.email;
        const name = profile.name || profile.email.split('@')[0];
        // Check if user exists
        let user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
        if (!user) {
          // Create new user with role pembeli by default
          user = {
            id: generateUniqueId(),
            name,
            email,
            role: "pembeli",
            password: "" // no password for social login
          };
          users.push(user);
        }
        currentUser = user;
        loginMessage.textContent = `Login berhasil sebagai ${user.role} (Google).`;
        loginMessage.style.color = "green";
        if (user.role === "pembeli") {
          showPage("page-menu");
        } else if (user.role === "kasir") {
          showPage("page-kasir");
        } else if (user.role === "owner") {
          showPage("page-owner");
        }
      }

      window.handleGoogleCredentialResponse = handleGoogleCredentialResponse;

      btnGoogleSignin.addEventListener("click", () => {
        google.accounts.id.initialize({
          client_id: "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com",
          callback: handleGoogleCredentialResponse
        });
        google.accounts.id.prompt();
      });

      // Facebook SDK init and login
      window.fbAsyncInit = function() {
        FB.init({
          appId      : 'YOUR_FACEBOOK_APP_ID',
          cookie     : true,
          xfbml      : true,
          version    : 'v16.0'
        });
      };

      btnFacebookSignin.addEventListener("click", () => {
        FB.login(function(response) {
          if (response.authResponse) {
            FB.api('/me', {fields: 'name,email'}, function(profile) {
              const email = profile.email;
              const name = profile.name || (email ? email.split('@')[0] : "Facebook User");
              if (!email) {
                alert("Email Facebook tidak tersedia. Tidak dapat login.");
                return;
              }
              let user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
              if (!user) {
                user = {
                  id: generateUniqueId(),
                  name,
                  email,
                  role: "pembeli",
                  password: ""
                };
                users.push(user);
              }
              currentUser = user;
              loginMessage.textContent = `Login berhasil sebagai ${user.role} (Facebook).`;
              loginMessage.style.color = "green";
              if (user.role === "pembeli") {
                showPage("page-menu");
              } else if (user.role === "kasir") {
                showPage("page-kasir");
              } else if (user.role === "owner") {
                showPage("page-owner");
              }
            });
          } else {
            alert("Login Facebook dibatalkan atau gagal.");
          }
        }, {scope: 'email'});
      });

      // Report penjualan
      function renderReport() {
        // Hitung total pendapatan dan item terlaris berdasarkan periode
        const period = reportPeriodSelect.value;
        let filteredOrders = [];
        const now = new Date();

        if (period === "harian") {
          filteredOrders = orders.filter((o) => {
            const diff = now - o.timestamp;
            return diff <= 24 * 60 * 60 * 1000;
          });
        } else if (period === "mingguan") {
          filteredOrders = orders.filter((o) => {
            const diff = now - o.timestamp;
            return diff <= 7 * 24 * 60 * 60 * 1000;
          });
        } else {
          // bulanan
          filteredOrders = orders.filter((o) => {
            const diff = now - o.timestamp;
            return diff <= 30 * 24 * 60 * 60 * 1000;
          });
        }
        const totalRevenue = filteredOrders.reduce((acc, o) => acc + o.total, 0);
        totalRevenueEl.textContent = rupiahFormat(totalRevenue);

        // Hitung item terlaris
        const itemCountMap = {};
        filteredOrders.forEach((order) => {
          order.items.forEach((item) => {
            if (!itemCountMap[item.name]) {
              itemCountMap[item.name] = 0;
            }
            itemCountMap[item.name] += item.quantity;
          });
        });
        let topItem = "-";
        let maxCount = 0;
        for (const [name, count] of Object.entries(itemCountMap)) {
          if (count > maxCount) {
            maxCount = count;
            topItem = name;
          }
        }
        topItemEl.textContent = topItem;

        // Grafik tren penjualan (total per hari)
        const salesData = {};
        filteredOrders.forEach((order) => {
          const dateKey = order.timestamp.toISOString().slice(0, 10);
          if (!salesData[dateKey]) salesData[dateKey] = 0;
          salesData[dateKey] += order.total;
        });
        const labels = Object.keys(salesData).sort();
        const data = labels.map((label) => salesData[label]);

        if (salesChart) {
          salesChart.destroy();
        }
        salesChart = new Chart(salesChartCtx, {
          type: "line",
          data: {
            labels,
            datasets: [
              {
                label: "Pendapatan",
                data,
                borderColor: "#3b82f6",
                backgroundColor: "rgba(59,130,246,0.3)",
                fill: true,
                tension: 0.3,
                pointRadius: 4,
                pointHoverRadius: 6
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: true,
                position: "top"
              },
              tooltip: {
                mode: "index",
                intersect: false
              }
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Tanggal"
                }
              },
              y: {
                title: {
                  display: true,
                  text: "Pendapatan (Rp)"
                },
                beginAtZero: true
              }
            }
          }
        });
      }

      btnGenerateReport.addEventListener("click", () => {
        renderReport();
      });

      btnExportPdf.addEventListener("click", () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.setFontSize(16);
        doc.text("Laporan Penjualan", 10, 20);
        doc.setFontSize(12);
        doc.text(`Periode: ${reportPeriodSelect.options[reportPeriodSelect.selectedIndex].text}`, 10, 30);
        doc.text(`Total Pendapatan: ${totalRevenueEl.textContent}`, 10, 40);
        doc.text(`Item Terlaris: ${topItemEl.textContent}`, 10, 50);
        doc.save(`laporan-penjualan-${Date.now()}.pdf`);
      });

      btnExportExcel.addEventListener("click", () => {
        // Buat CSV sederhana
        const rows = [
          ["Periode", reportPeriodSelect.options[reportPeriodSelect.selectedIndex].text],
          ["Total Pendapatan", totalRevenueEl.textContent],
          ["Item Terlaris", topItemEl.textContent]
        ];
        let csvContent = "data:text/csv;charset=utf-8,";
        rows.forEach((rowArray) => {
          let row = rowArray.join(",");
          csvContent += row + "\r\n";
        });
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `laporan-penjualan-${Date.now()}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });

      // Clear messages
      function clearMessages() {
        loginMessage.textContent = "";
      }

      // Initialize
      showPage("page-home");
    })();