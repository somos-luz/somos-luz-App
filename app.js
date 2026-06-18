(function () {
  "use strict";

  const products = {
    sage: { name: "Salvia blanca", price: 6900 },
    amethyst: { name: "Amatista natural", price: 8900 }
  };

  const cart = {};

  // Esperar a que el DOM esté completamente listo
  window.addEventListener("DOMContentLoaded", () => {
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const cartItems = document.getElementById('cart-items');
    const emptyCart = document.getElementById('empty-cart');
    const cartPanel = document.getElementById('cart-panel');
    const cartOverlay = document.getElementById('cart-overlay');
    const whatsappBtn = document.getElementById('whatsapp-order');
    const toast = document.getElementById('toast');

    // Forzar cierre inmediato al cargar para evitar congelamientos
    if (cartPanel) cartPanel.classList.remove('open');
    if (cartOverlay) cartOverlay.classList.remove('open');

    function renderIcons() {
      if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
      }
    }

    function money(value) {
      return '$' + value.toLocaleString('es-CL');
    }

    function openCart() {
      if (cartPanel && cartOverlay) {
        cartPanel.classList.add('open');
        cartOverlay.classList.add('open');
      }
    }

    function closeCart() {
      if (cartPanel && cartOverlay) {
        cartPanel.classList.remove('open');
        cartOverlay.classList.remove('open');
      }
    }

    function updateCart() {
      if (!cartCount || !cartTotal || !cartItems || !emptyCart || !whatsappBtn) return;

      const keys = Object.keys(cart);
      let totalQty = 0;
      let total = 0;

      keys.forEach(id => {
        totalQty += cart[id].qty;
        total += cart[id].qty * products[id].price;
      });

      cartCount.textContent = totalQty;
      cartTotal.textContent = money(total);
      whatsappBtn.disabled = keys.length === 0;

      // Limpieza y renderizado simple
      cartItems.innerHTML = "";

      keys.forEach(id => {
        const templateEl = document.getElementById('cart-item-template');
        if (!templateEl) return;

        const clone = templateEl.content.cloneNode(true);
        const row = clone.querySelector('.cart-item');
        
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

      if (keys.length > 0) {
        emptyCart.classList.add('hidden');
        cartItems.classList.remove('hidden');
      } else {
        emptyCart.classList.remove('hidden');
        cartItems.classList.add('hidden');
      }

      renderIcons();
    }

    // listeners de apertura y cierre
    const openBtn = document.getElementById('open-cart');
    const closeBtn = document.getElementById('close-cart');
    const continueBtn = document.getElementById('continue-shopping');

    if (openBtn) openBtn.addEventListener('click', openCart);
    if (closeBtn) closeBtn.addEventListener('click', closeCart);
    if (continueBtn) continueBtn.addEventListener('click', closeCart);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

    // listeners de agregar al carrito
    document.querySelectorAll('.add-to-cart').forEach(btn => {
      btn.addEventListener('click', () => {
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
      });
    });

    // Filtros de categoría
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

    // Acción de WhatsApp
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

    // Inicializar vistas
    updateCart();
    renderIcons();
  });
})();
