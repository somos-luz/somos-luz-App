const products = {
  sage: { name: "Salvia blanca", price: 6900 },
  amethyst: { name: "Amatista natural", price: 8900 },
  candle: { name: "Vela ritual Calma", price: 11900 },
  palo: { name: "Palo santo", price: 5900 }
};

const cart = {};
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const cartItems = document.getElementById('cart-items');
const emptyCart = document.getElementById('empty-cart');
const cartPanel = document.getElementById('cart-panel');
const cartOverlay = document.getElementById('cart-overlay');
const whatsappBtn = document.getElementById('whatsapp-order');
const toast = document.getElementById('toast');

function playTone(freq = 520, duration = 0.06) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.025, ctx.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
    oscillator.connect(gain);
    gain.connect(ctx.destination);
    oscillator.start();
    oscillator.stop(ctx.currentTime + duration + 0.02);
  } catch(e) {}
}

function money(value){
  return '$' + value.toLocaleString('es-CL');
}

function openCart(){
  cartPanel.classList.add('open');
  cartOverlay.classList.add('open');
  cartPanel.setAttribute('aria-hidden','false');
  playTone(420);
}

function closeCart(){
  cartPanel.classList.remove('open');
  cartOverlay.classList.remove('open');
  cartPanel.setAttribute('aria-hidden','true');
  playTone(320);
}

function showToast(){
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'), 1800);
}

function updateCart(){
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

  const existing = new Map([...cartItems.children].map(el => [el.dataset.id, el]));

  keys.forEach(id => {
    const item = cart[id];
    let row = existing.get(id);
    if(!row){
      const tpl = document.getElementById('cart-item-template').content.cloneNode(true);
      row = tpl.querySelector('.cart-item');
      row.dataset.id = id;

      row.querySelector('.cart-item-name').textContent = products[id].name;
      row.querySelector('.cart-item-price').textContent = money(products[id].price);

      row.querySelector('.qty-plus').addEventListener('click', ()=> {
        cart[id].qty += 1;
        playTone(560);
        updateCart();
      });
      row.querySelector('.qty-minus').addEventListener('click', ()=> {
        if(cart[id].qty > 1){
          cart[id].qty -= 1;
        }else{
          delete cart[id];
        }
        playTone(380);
        updateCart();
      });
      row.querySelector('.remove-item').addEventListener('click', ()=> {
        delete cart[id];
        playTone(300);
        updateCart();
      });

      cartItems.appendChild(row);
      lucide.createIcons();
    } else {
      existing.delete(id);
    }
    row.querySelector('.qty-value').textContent = item.qty;
  });

  existing.forEach(el => el.remove());

  if(keys.length){
    emptyCart.classList.add('hidden');
    cartItems.classList.remove('hidden');
  }else{
    emptyCart.classList.remove('hidden');
    cartItems.classList.add('hidden');
  }
}

document.querySelectorAll('.add-to-cart').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const card = btn.closest('[data-product-id]');
    const id = card.dataset.productId;
    if(!cart[id]) cart[id] = { qty: 0 };
    cart[id].qty += 1;
    btn.classList.add('scale-110');
    setTimeout(()=>btn.classList.remove('scale-110'), 180);
    playTone(620);
    updateCart();
    showToast();
  });
});

document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const filter = btn.dataset.filter;
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    playTone(480);
    document.querySelectorAll('.product-card').forEach(card=>{
      const show = filter === 'all' || card.dataset.category === filter;
      card.style.display = show ? '' : 'none';
    });
  });
});

document.getElementById('open-cart').addEventListener('click', openCart);
document.getElementById('close-cart').addEventListener('click', closeCart);
document.getElementById('continue-shopping').addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);
document.getElementById('hero-cta').addEventListener('click', ()=>{
  document.getElementById('tienda').scrollIntoView({behavior:'smooth'});
  playTone(520);
});

whatsappBtn.addEventListener('click', ()=>{
  const keys = Object.keys(cart);
  if(!keys.length) return;
  let lines = ['Hola, quiero hacer este pedido en Somos Luz:', ''];
  let total = 0;
  keys.forEach(id=>{
    const subtotal = cart[id].qty * products[id].price;
    total += subtotal;
    lines.push(`• ${products[id].name} x${cart[id].qty} - ${money(subtotal)}`);
  });
  lines.push('');
  lines.push(`Total: ${money(total)}`);
  const url = 'https://wa.me/56900000000?text=' + encodeURIComponent(lines.join('\n'));
  window.open(url, '_blank', 'noopener,noreferrer');
  playTone(700);
});

// Inicialización Inicial
updateCart();
lucide.createIcons();
