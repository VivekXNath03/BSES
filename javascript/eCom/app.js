
const products = [
    {
        id: 1,
        name: "Premium Cotton T-Shirt",
        category: "men",
        price: 49.99,
        originalPrice: 79.99,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
        rating: 4.5,
        reviews: 128,
        badge: "sale",
        isNew: false
    },
    {
        id: 2,
        name: "Elegant Summer Dress",
        category: "women",
        price: 89.99,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
        rating: 5,
        reviews: 256,
        badge: "new",
        isNew: true
    },
    {
        id: 3,
        name: "Classic Leather Watch",
        category: "accessories",
        price: 199.99,
        originalPrice: 299.99,
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400",
        rating: 4.8,
        reviews: 89,
        badge: "sale",
        isNew: false
    },
    {
        id: 4,
        name: "Running Sneakers Pro",
        category: "footwear",
        price: 129.99,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
        rating: 4.7,
        reviews: 342,
        badge: "new",
        isNew: true
    },
    {
        id: 5,
        name: "Slim Fit Denim Jeans",
        category: "men",
        price: 79.99,
        originalPrice: 99.99,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
        rating: 4.3,
        reviews: 167,
        badge: "sale",
        isNew: false
    },
    {
        id: 6,
        name: "Designer Handbag",
        category: "accessories",
        price: 249.99,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400",
        rating: 4.9,
        reviews: 78,
        badge: "new",
        isNew: true
    },
    {
        id: 7,
        name: "Casual Linen Blazer",
        category: "men",
        price: 159.99,
        originalPrice: 199.99,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
        rating: 4.6,
        reviews: 93,
        badge: "sale",
        isNew: false
    },
    {
        id: 8,
        name: "Floral Print Skirt",
        category: "women",
        price: 59.99,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400",
        rating: 4.4,
        reviews: 112,
        badge: null,
        isNew: false
    },
    {
        id: 9,
        name: "Sports Training Shoes",
        category: "footwear",
        price: 99.99,
        originalPrice: 149.99,
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400",
        rating: 4.7,
        reviews: 234,
        badge: "sale",
        isNew: false
    },
    {
        id: 10,
        name: "Gold Plated Necklace",
        category: "accessories",
        price: 79.99,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400",
        rating: 4.8,
        reviews: 67,
        badge: "new",
        isNew: true
    },
    {
        id: 11,
        name: "Bohemian Maxi Dress",
        category: "women",
        price: 119.99,
        originalPrice: 159.99,
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400",
        rating: 4.6,
        reviews: 145,
        badge: "sale",
        isNew: false
    },
    {
        id: 12,
        name: "Canvas High-Top Sneakers",
        category: "footwear",
        price: 69.99,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400",
        rating: 4.5,
        reviews: 198,
        badge: null,
        isNew: false
    }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let displayedProducts = 8;

const preloader = document.getElementById('preloader');
const header = document.getElementById('header');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const navSearch = document.getElementById('nav-search');
const searchBar = document.getElementById('search-bar');
const searchClose = document.getElementById('search-close');
const searchInput = document.getElementById('search-input');
const navCart = document.getElementById('nav-cart');
const cartSidebar = document.getElementById('cart-sidebar');
const cartClose = document.getElementById('cart-close');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const wishlistCount = document.getElementById('wishlist-count');
const cartTotal = document.getElementById('cart-total');
const navUser = document.getElementById('nav-user');
const authModal = document.getElementById('auth-modal');
const modalClose = document.getElementById('modal-close');
const authTabs = document.querySelectorAll('.auth-tab');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const overlay = document.getElementById('overlay');
const productsGrid = document.getElementById('products-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const loadMoreBtn = document.getElementById('load-more');
const arrivalsSlider = document.getElementById('arrivals-slider');
const arrivalsPrev = document.getElementById('arrivals-prev');
const arrivalsNext = document.getElementById('arrivals-next');
const backToTop = document.getElementById('back-to-top');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');

document.addEventListener('DOMContentLoaded', () => {
    
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 1000);

    
    renderProducts('all');
    renderArrivals();
    updateCartUI();
    updateWishlistUI();
    initCountdown();
});

navToggle.addEventListener('click', () => {
    navMenu.classList.add('active');
    overlay.classList.add('active');
});

navClose.addEventListener('click', () => {
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        
        
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});


window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
        backToTop.classList.add('active');
    } else {
        header.classList.remove('scrolled');
        backToTop.classList.remove('active');
    }
});

const searchResults = document.getElementById('search-results');

navSearch.addEventListener('click', () => {
    searchBar.classList.add('active');
    searchInput.focus();
});

searchClose.addEventListener('click', () => {
    searchBar.classList.remove('active');
    searchResults.classList.remove('active');
    searchInput.value = '';
});

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    
    if (query.length > 0) {
        const filtered = products.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.category.toLowerCase().includes(query)
        );
        
        if (filtered.length > 0) {
            searchResults.innerHTML = filtered.map(product => `
                <div class="search-result-item" onclick="viewProductFromSearch(${product.id})">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="search-result-info">
                        <h4>${product.name}</h4>
                        <span>$${product.price.toFixed(2)}</span>
                    </div>
                </div>
            `).join('');
        } else {
            searchResults.innerHTML = `
                <div class="search-no-results">
                    <i class="fas fa-search" style="font-size: 24px; margin-bottom: 10px; display: block;"></i>
                    No products found for "${query}"
                </div>
            `;
        }
        searchResults.classList.add('active');
    } else {
        searchResults.classList.remove('active');
    }
});

function viewProductFromSearch(productId) {
    searchBar.classList.remove('active');
    searchResults.classList.remove('active');
    searchInput.value = '';
    quickView(productId);
}

navCart.addEventListener('click', () => {
    cartSidebar.classList.add('active');
    overlay.classList.add('active');
});

cartClose.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
});

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartUI();
    showToast('Item added to cart!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    showToast('Item removed from cart');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <span class="cart-item-price">$${item.price.toFixed(2)}</span>
                    <div class="cart-item-quantity">
                        <button onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <div class="cart-item-remove" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </div>
            </div>
        `).join('');
    }

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    if (index === -1) {
        wishlist.push(productId);
        showToast('Added to wishlist!');
    } else {
        wishlist.splice(index, 1);
        showToast('Removed from wishlist');
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistUI();
    renderProducts(getCurrentFilter());
}

function updateWishlistUI() {
    wishlistCount.textContent = wishlist.length;
}

function getCurrentFilter() {
    const activeBtn = document.querySelector('.filter-btn.active');
    return activeBtn ? activeBtn.dataset.filter : 'all';
}

navUser.addEventListener('click', () => {
    authModal.classList.add('active');
    overlay.classList.add('active');
});

modalClose.addEventListener('click', () => {
    authModal.classList.remove('active');
    overlay.classList.remove('active');
});

authTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        authTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        if (tab.dataset.tab === 'login') {
            loginForm.classList.remove('hidden');
            signupForm.classList.add('hidden');
        } else {
            loginForm.classList.add('hidden');
            signupForm.classList.remove('hidden');
        }
    });
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Login successful!');
    authModal.classList.remove('active');
    overlay.classList.remove('active');
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Account created successfully!');
    authModal.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    navMenu.classList.remove('active');
    cartSidebar.classList.remove('active');
    authModal.classList.remove('active');
    quickviewModal.classList.remove('active');
    searchBar.classList.remove('active');
    searchResults.classList.remove('active');
    overlay.classList.remove('active');
});

function createProductCard(product) {
    const isInWishlist = wishlist.includes(product.id);
    return `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${product.badge ? `<span class="product-badge ${product.badge}">${product.badge}</span>` : ''}
                <div class="product-actions">
                    <button onclick="toggleWishlist(${product.id})" class="${isInWishlist ? 'active' : ''}">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button onclick="quickView(${product.id})">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">
                    ${generateStars(product.rating)}
                    <span>(${product.reviews})</span>
                </div>
                <div class="product-price">
                    <span class="current">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice ? `<span class="original">$${product.originalPrice.toFixed(2)}</span>` : ''}
                </div>
            </div>
        </div>
    `;
}

function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i - rating < 1 && i - rating > 0) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

function renderProducts(filter) {
    let filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
    filtered = filtered.slice(0, displayedProducts);
    
    productsGrid.innerHTML = filtered.map(product => createProductCard(product)).join('');
    
    // Show/hide load more button
    const totalFiltered = filter === 'all' ? products.length : products.filter(p => p.category === filter).length;
    loadMoreBtn.style.display = displayedProducts >= totalFiltered ? 'none' : 'inline-flex';
}

function renderFilteredProducts(filtered) {
    productsGrid.innerHTML = filtered.map(product => createProductCard(product)).join('');
    loadMoreBtn.style.display = 'none';
}

// Filter buttons
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        displayedProducts = 8;
        renderProducts(btn.dataset.filter);
    });
});

// Load more
loadMoreBtn.addEventListener('click', () => {
    displayedProducts += 4;
    renderProducts(getCurrentFilter());
});

const quickviewModal = document.getElementById('quickview-modal');
const quickviewClose = document.getElementById('quickview-close');
const quickviewBody = document.getElementById('quickview-body');
let quickViewQuantity = 1;

function quickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const isInWishlist = wishlist.includes(product.id);
    const discount = product.originalPrice 
        ? Math.round((1 - product.price / product.originalPrice) * 100) 
        : 0;
    
    quickViewQuantity = 1;
    
    quickviewBody.innerHTML = `
        <div class="quickview-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="quickview-info">
            <span class="quickview-category">${product.category}</span>
            <h2 class="quickview-title">${product.name}</h2>
            <div class="quickview-rating">
                ${generateStars(product.rating)}
                <span>(${product.reviews} reviews)</span>
            </div>
            <div class="quickview-price">
                <span class="current">$${product.price.toFixed(2)}</span>
                ${product.originalPrice ? `<span class="original">$${product.originalPrice.toFixed(2)}</span>` : ''}
                ${discount > 0 ? `<span class="discount">${discount}% OFF</span>` : ''}
            </div>
            <p class="quickview-description">
                Experience premium quality with this ${product.name.toLowerCase()}. 
                Crafted with attention to detail, this piece combines style and comfort 
                for the modern fashion enthusiast. Perfect for any occasion.
            </p>
            <div class="quickview-quantity">
                <label>Quantity:</label>
                <div class="quantity-selector">
                    <button onclick="updateQuickViewQty(-1)">-</button>
                    <input type="number" id="qv-quantity" value="1" min="1" max="10" readonly>
                    <button onclick="updateQuickViewQty(1)">+</button>
                </div>
            </div>
            <div class="quickview-actions">
                <button class="btn btn-primary" onclick="addToCartFromQuickView(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
                <button class="btn btn-wishlist ${isInWishlist ? 'active' : ''}" onclick="toggleWishlistFromQuickView(${product.id})">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
        </div>
    `;
    
    quickviewModal.classList.add('active');
    overlay.classList.add('active');
}

function updateQuickViewQty(change) {
    quickViewQuantity = Math.max(1, Math.min(10, quickViewQuantity + change));
    document.getElementById('qv-quantity').value = quickViewQuantity;
}

function addToCartFromQuickView(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += quickViewQuantity;
    } else {
        cart.push({ ...product, quantity: quickViewQuantity });
    }

    saveCart();
    updateCartUI();
    quickviewModal.classList.remove('active');
    overlay.classList.remove('active');
    showToast(`${quickViewQuantity} item(s) added to cart!`);
}

function toggleWishlistFromQuickView(productId) {
    toggleWishlist(productId);
    // Update button state
    const btn = document.querySelector('.quickview-actions .btn-wishlist');
    if (wishlist.includes(productId)) {
        btn.classList.add('active');
    } else {
        btn.classList.remove('active');
    }
}

quickviewClose.addEventListener('click', () => {
    quickviewModal.classList.remove('active');
    overlay.classList.remove('active');
});

function renderArrivals() {
    const newProducts = products.filter(p => p.isNew || p.badge === 'new');
    arrivalsSlider.innerHTML = newProducts.map(product => createProductCard(product)).join('');
}

arrivalsPrev.addEventListener('click', () => {
    arrivalsSlider.scrollBy({ left: -300, behavior: 'smooth' });
});

arrivalsNext.addEventListener('click', () => {
    arrivalsSlider.scrollBy({ left: 300, behavior: 'smooth' });
});

function initCountdown() {
    // Set end date to 7 days from now
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);

    function updateCountdown() {
        const now = new Date();
        const diff = endDate - now;

        if (diff <= 0) {
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('active');
    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Thank you for subscribing!');
    newsletterForm.reset();
});

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Message sent successfully!');
    contactForm.reset();
});

const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        
        // Scroll to products section
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        
        // Activate filter
        setTimeout(() => {
            filterBtns.forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.filter === category) {
                    btn.classList.add('active');
                }
            });
            displayedProducts = 8;
            renderProducts(category);
        }, 500);
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const checkoutBtn = document.getElementById('checkout-btn');
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }
    showToast('Proceeding to checkout...');
    // Here you would normally redirect to checkout page
});
