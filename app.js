// Este es el catálogo de productos y servicios de "Somos Luz"
// Los datos se guardan en el localStorage del navegador para que no se pierdan al recargar
let catalog = JSON.parse(localStorage.getItem('catalog')) || [
    {
        id: 'incienso-salvia',
        name: 'Incienso de Salvia Blanca',
        type: 'producto',
        description: 'Ideal para limpiezas energéticas profundas del hogar y el aura.',
        price: 3500,
        imageUrl: 'https://via.placeholder.com/300x200.png?text=Incienso+de+Salvia'
    },
    {
        id: 'piedra-amatista',
        name: 'Piedra Amatista',
        type: 'producto',
        description: 'Calma la mente, alivia el estrés y ayuda en la meditación.',
        price: 8000,
        imageUrl: 'https://via.placeholder.com/300x200.png?text=Piedra+Amatista'
    },
    {
        id: 'reiki-sesion',
        name: 'Sesión de Reiki',
        type: 'servicio',
        description: 'Terapia energética para equilibrar los chakras y promover la sanación.',
        price: 15000,
        imageUrl: 'https://via.placeholder.com/300x200.png?text=Sesión+de+Reiki'
    },
    {
        id: 'lectura-cartas',
        name: 'Lectura de Cartas de Tarot',
        type: 'servicio',
        description: 'Guía y claridad sobre preguntas de vida, amor y carrera.',
        price: 18000,
        imageUrl: 'https://via.placeholder.com/300x200.png?text=Lectura+de+Cartas'
    }
];

// --- VARIABLES Y ELEMENTOS DEL DOM ---

// Catálogo
const productsServicesContainer = document.getElementById('products-services');

// Carrito
let cart = [];
const cartButton = document.getElementById('cart-button');
const cartCount = document.querySelector('.cart-count');
const cartContainer = document.getElementById('cart-container');
const closeCartButton = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout-button');

// Formulario de contacto
const contactForm = document.getElementById('contact-form');
const contactFormContent = document.getElementById('contact-form-content');

// Administración
const adminLink = document.getElementById('admin-link');
const adminPanel = document.getElementById('admin-panel');
const loginForm = document.getElementById('login-form');
const catalogManager = document.getElementById('catalog-manager');
const adminUsernameInput = document.getElementById('admin-username');
const adminPasswordInput = document.getElementById('admin-password');
const adminLoginBtn = document.getElementById('admin-login-btn');
const productForm = document.getElementById('product-form');
const productIdInput = document.getElementById('product-id-input');
const productNameInput = document.getElementById('product-name-input');
const productDescriptionInput = document.getElementById('product-description-input');
const productPriceInput = document.getElementById('product-price-input');
const productImageInput = document.getElementById('product-image-url-input');
const productTypeInput = document.getElementById('product-type-input');
const addEditBtn = document.getElementById('add-edit-btn');
const currentCatalogContainer = document.getElementById('current-catalog');

// --- FUNCIONES ---

// Función para guardar el catálogo en el almacenamiento local del navegador
function saveCatalog() {
    localStorage.setItem('catalog', JSON.stringify(catalog));
}

// Renderizar el catálogo para los clientes
function renderCatalog() {
    productsServicesContainer.innerHTML = '';
    catalog.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('catalog-item');
        itemElement.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p class="price">$${item.price.toLocaleString('es-CL')}</p>
            <button class="add-to-cart-btn" data-id="${item.id}">
                ${item.type === 'producto' ? 'Añadir al carrito' : 'Agendar Servicio'}
            </button>
        `;
        productsServicesContainer.appendChild(itemElement);
    });
}

// Renderizar el catálogo en el panel de administración
function renderAdminCatalog() {
    currentCatalogContainer.innerHTML = '';
    catalog.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('catalog-item');
        itemElement.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.name}">
            <div class="item-info">
                <strong>${item.name}</strong> - $${item.price.toLocaleString('es-CL')}
                <br>
                <small>${item.type}</small>
            </div>
            <div class="item-actions">
                <button class="edit-btn" data-id="${item.id}">Editar</button>
                <button class="delete-btn" data-id="${item.id}">Eliminar</button>
            </div>
        `;
        currentCatalogContainer.appendChild(itemElement);
    });
}

// Función para mostrar/ocultar el carrito
function toggleCart() {
    cartContainer.classList.toggle('hidden');
    productsServicesContainer.classList.toggle('hidden');
}

// Función para añadir un producto al carrito
function addToCart(itemId) {
    const itemToAdd = catalog.find(item => item.id === itemId);
    if (itemToAdd) {
        const existingItem = cart.find(item => item.id === itemId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...itemToAdd, quantity: 1 });
        }
        updateCartDisplay();
    }
}

// Función para actualizar la interfaz del carrito
function updateCartDisplay() {
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    cartItemsContainer.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `
            <span>${item.name} (${item.quantity})</span>
            <p>$${(item.price * item.quantity).toLocaleString('es-CL')}</p>
        `;
        cartItemsContainer.appendChild(cartItemElement);
        total += item.price * item.quantity;
    });
    cartTotalElement.textContent = `$${total.toLocaleString('es-CL')}`;
}

// Función para manejar el envío a WhatsApp
function sendToWhatsApp() {
    const phoneNumber = '56975291753';
    let message = '¡Hola Somos Luz! Me gustaría realizar un pedido con los siguientes productos y servicios:\n\n';
    let total = 0;
    cart.forEach(item => {
        message += `- ${item.name} x${item.quantity} - $${(item.price * item.quantity).toLocaleString('es-CL')}\n`;
        total += item.price * item.quantity;
    });
    message += `\nTotal: $${total.toLocaleString('es-CL')}\n\n`;
    message += '¡Espero su confirmación!';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// Función para manejar el formulario de contacto
function handleContactForm(event) {
    event.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    const whatsappMessage = `¡Hola Somos Luz! Un cliente ha enviado un mensaje de contacto:\n\nNombre: ${name}\nEmail: ${email}\nMensaje: ${message}`;
    const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/56975291753?text=${encodedWhatsappMessage}`;
    window.open(whatsappUrl, '_blank');
}

// --- EVENT LISTENERS (ESCUCHAS DE CLICS) ---

// Escuchar clics en el catálogo para añadir al carrito
productsServicesContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-to-cart-btn')) {
        const itemId = event.target.getAttribute('data-id');
        addToCart(itemId);
    }
});

// Escuchar clics en el botón del carrito para mostrarlo
cartButton.addEventListener('click', toggleCart);

// Escuchar clics en el botón para cerrar el carrito
closeCartButton.addEventListener('click', toggleCart);

// Escuchar clic en el botón de "Enviar Pedido por WhatsApp"
checkoutButton.addEventListener('click', sendToWhatsApp);

// Escuchar el envío del formulario de contacto
contactFormContent.addEventListener('submit', handleContactForm);

// Escuchar clic en el enlace de administración
adminLink.addEventListener('click', (event) => {
    event.preventDefault();
    productsServicesContainer.classList.add('hidden');
    cartContainer.classList.add('hidden');
    contactForm.classList.add('hidden');
    adminPanel.style.display = 'block';
});

// Escuchar clic en el botón de inicio de sesión
adminLoginBtn.addEventListener('click', () => {
    const username = adminUsernameInput.value;
    const password = adminPasswordInput.value;
    if (username === 'somosluz' && password === 'somos$888') {
        loginForm.classList.add('hidden');
        catalogManager.classList.remove('hidden');
        renderAdminCatalog();
    } else {
        alert('Usuario o contraseña incorrecta.');
    }
});

// Escuchar el envío del formulario del panel de administración
productForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const id = productIdInput.value || Math.random().toString(36).substring(2, 9);
    const name = productNameInput.value;
    const description = productDescriptionInput.value;
    const price = parseFloat(productPriceInput.value);
    const imageUrl = productImageInput.value;
    const type = productTypeInput.value;
    
    const newProduct = { id, name, description, price, imageUrl, type };

    const existingIndex = catalog.findIndex(item => item.id === id);
    if (existingIndex !== -1) {
        catalog[existingIndex] = newProduct;
    } else {
        catalog.push(newProduct);
    }

    saveCatalog();
    renderCatalog();
    renderAdminCatalog();
    productForm.reset();
    productIdInput.value = '';
});

// Escuchar clics en los botones de editar y eliminar en el panel de administración
currentCatalogContainer.addEventListener('click', (event) => {
    const itemId = event.target.getAttribute('data-id');
    if (event.target.classList.contains('delete-btn')) {
        catalog = catalog.filter(item => item.id !== itemId);
        saveCatalog();
        renderCatalog();
        renderAdminCatalog();
    } else if (event.target.classList.contains('edit-btn')) {
        const itemToEdit = catalog.find(item => item.id === itemId);
        if (itemToEdit) {
            productIdInput.value = itemToEdit.id;
            productNameInput.value = itemToEdit.name;
            productDescriptionInput.value = itemToEdit.description;
            productPriceInput.value = itemToEdit.price;
            productImageInput.value = itemToEdit.imageUrl;
            productTypeInput.value = itemToEdit.type;
        }
    }
});

// Inicializar la aplicación
renderCatalog();