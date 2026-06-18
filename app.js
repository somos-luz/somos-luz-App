(function () {
  "use strict";

  // 1. Base de datos de productos integrada
  const products = {
    sage: { name: "Salvia blanca", price: 6900 },
    amethyst: { name: "Amatista natural", price: 8900 },
    candle: { name: "Vela ritual Calma", price: 11900 },
    palo: { name: "Palo santo", price: 5900 }
  };

  const cart = {};

  // Ejecutar inmediatamente o cuando el DOM esté listo
  function inicializarTienda() {
    // Captura de elementos con verificación selectiva
    const cartPanel = document.getElementById('cart-panel');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const cartItems = document.getElementById('cart-items');
    const emptyCart = document.getElementById('empty-cart');
    const whatsappBtn = document.getElementById('whatsapp-order');
    const toast = document.getElementById('toast');

    // APAGAR EL CARRITO DE INMEDIATO (Fuerza el cierre por código)
    if (cartPanel) cartPanel.classList.remove('open');
    if (cartOverlay) cartOverlay.classList.remove('open');

    // Render seguro de iconos Lucide
    function renderIcons() {
      try {
        if (typeof lucide !== 'undefined' && lucide.createIcons) {
          lucide.createIcons();
        }
      } catch (e) {
        console.log("Espera de iconos...");
      }
    }

    function money(value) {
      return '$' + value.toLocaleString('es-CL');
    }

    // Funciones de apertura y cierre con escudos de protección
    function openCart() {
      if (cartPanel) cartPanel.classList.add('open');
      if (cartOverlay) cartOverlay.classList.add('open');
    }

    function closeCart() {
      if (cartPanel) cartPanel.classList.remove('open');
      if (cartOverlay) cartOverlay.classList.remove('open');
    }

    // Actualización del carrito sin peligro de colgarse
    function updateCart() {
      try {
        const keys = Object.keys(cart);
        let totalQty = 0;
        let total = 0;

        keys.forEach(id => {
          if (products[id]) {
            totalQty += cart[id].qty;
            total += cart[id].qty * products[id].price;
          }
        });

        if (cartCount) cartCount.textContent = totalQty;
        if (cartTotal) cartTotal.textContent = money(total);
        if (whatsappBtn) whatsappBtn.disabled = keys.length === 0;

        if (cartItems) {
          cartItems.innerHTML = "";
          keys.forEach(id => {
            const templateEl = document.getElementById('cart-item-template');
            if (!templateEl) return;

            const clone = templateEl.content.cloneNode(true);
            const row = clone.querySelector('.cart-item');
            if (!row) return;

            row.querySelector('.cart-item-name').textContent = products[id].name;
            row.querySelector('.cart-item-price').textContent = money(products[id].price);
            row.querySelector('.qty-value').textContent = cart[id].qty;

            row.querySelector('.qty-plus').addEventListener('click', () => {
              cart[id].qty += 1;
              updateCart();
            });

            row.querySelector('.qty-minus').addEventListener('click', () => {
              if (cart[id].qty > 1) {
                cart[id].qty -= 1;
              } else {
                delete cart[id];
              }
              updateCart();
            });

            row.querySelector('.remove-item').addEventListener('click', () => {
              delete cart[id];
              updateCart();
            });

            cartItems.appendChild(row);
          });
        }

        if (emptyCart && cartItems) {
          if (keys.length > 0) {
            emptyCart.classList.add('hidden');
            cartItems.classList.remove('hidden');
          } else {
            emptyCart.classList.remove('hidden');
            cartItems.classList.add('hidden');
          }
        }

        renderIcons();
      } catch (err) {
        console.error("Error controlado en updateCart:", err);
      }
    }

    // Asignación segura de eventos de Click para abrir/cerrar
    const openBtn = document.getElementById('open-cart');
    const closeBtn = document.getElementById('close-cart');
    const continueBtn = document.getElementById('continue-shopping');
    const heroCtaBtn = document.getElementById('hero-cta');

    if (openBtn) openBtn.addEventListener('click', openCart);
    if (closeBtn) closeBtn.addEventListener('click', closeCart);
    if (continueBtn) continueBtn.addEventListener('click', closeCart);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

    if (heroCtaBtn) {
      heroCtaBtn.addEventListener('click', () => {
        const tiendaSection = document.getElementById('tienda');
        if (tiendaSection) tiendaSection.scrollIntoView({ behavior: 'smooth' });
      });
    }

    // Agregar productos de forma segura
    document.querySelectorAll('.add-to-cart').forEach(btn => {
      btn.addEventListener('click', () => {
        try {
          const card = btn.closest('[data-product-id]');
          if (!card) return;
          const id = card.dataset.productId;
          
          if (!cart[id]) cart[id] = { qty: 0 };
          cart[id].qty += 1;
          
          updateCart();
          
          if (toast) {
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 1500);
          }
        } catch (e) {
          console.error("Error al añadir producto:", e);
        }
      });
    });

    // Filtros sin bloqueos
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        document.querySelectorAll('.product-card').forEach(card => {
          const cat = card.dataset.category;
          card.style.display = (filter === 'all' || cat === filter) ? '' : 'none';
        });
      });
    });

    // Enlace de WhatsApp seguro
    if (whatsappBtn) {
      whatsappBtn.addEventListener('click', () => {
        const keys = Object.keys(cart);
        if (!keys.length) return;
        let lines = ['Hola, quiero hacer este pedido en Somos Luz:', ''];
        let total = 0;
        keys.forEach(id => {
          const subtotal = cart[id].qty * products[id].price;
          total += subtotal;
          lines.push(`• ${products[id].name} x${cart[id].qty} - ${money(subtotal)}`);
        });
        lines.push('', `Total: ${money(total)}`);
        const url = 'https://wa.me/56900000000?text=' + encodeURIComponent(lines.join('\n'));
        window.open(url, '_blank', 'noopener,noreferrer');
      });
    }

    // Ejecución inicial de arranque
    updateCart();
    renderIcons();
  }

  // Ejecución en doble capa para asegurar que corra pase lo que pase
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inicializarTienda);
  } else {
    inicializarTienda();
  }
})();
