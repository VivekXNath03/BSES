/**
 * Infinite Scroll Gallery using Intersection Observer API
 * 
 * Key Concepts Demonstrated:
 * 1. Intersection Observer API - Modern way to detect element visibility
 * 2. Lazy Loading - Load content only when needed
 * 3. Performance Optimization - No scroll event listeners
 * 4. Async/Await - Modern JavaScript for handling async operations
 * 5. DOM Manipulation - Creating and appending elements dynamically
 */

// ============================================
// Configuration
// ============================================
const CONFIG = {
    imagesPerBatch: 12,      // Number of images to load per batch
    maxImages: 100,          // Maximum total images (for demo purposes)
    rootMargin: '200px',     // Start loading 200px before sentinel is visible
    threshold: 0.1           // Trigger when 10% of sentinel is visible
};

// ============================================
// State Management
// ============================================
const state = {
    currentPage: 1,
    isLoading: false,
    totalLoaded: 0,
    triggerCount: 0,
    hasMore: true
};

// ============================================
// DOM Elements
// ============================================
const gallery = document.getElementById('gallery');
const sentinel = document.getElementById('sentinel');
const imageCountEl = document.getElementById('imageCount');
const triggerCountEl = document.getElementById('triggerCount');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');

// ============================================
// Intersection Observer Setup
// ============================================

/**
 * The Intersection Observer watches the sentinel element.
 * When the sentinel becomes visible (user scrolled near the bottom),
 * it triggers loading more images.
 * 
 * Benefits over scroll event:
 * - Doesn't fire on every scroll pixel
 * - Browser optimizes the callback execution
 * - No need for throttling/debouncing
 * - Works with CSS transforms and iframes
 */
const observerOptions = {
    root: null,              // Use viewport as root
    rootMargin: CONFIG.rootMargin,  // Extend the intersection area
    threshold: CONFIG.threshold     // Trigger at this visibility percentage
};

const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // isIntersecting is true when the sentinel enters the viewport
        if (entry.isIntersecting && !state.isLoading && state.hasMore) {
            console.log('🎯 Observer triggered! Loading more images...');
            state.triggerCount++;
            updateStats();
            loadMoreImages();
        }
    });
}, observerOptions);

// Start observing the sentinel element
intersectionObserver.observe(sentinel);

// ============================================
// Image Loading Functions
// ============================================

/**
 * Simulates fetching images from an API
 * In a real app, this would be an actual API call
 */
async function fetchImages(page, count) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const images = [];
    const startId = (page - 1) * count + 1;
    
    // Using Picsum for random beautiful images
    for (let i = 0; i < count; i++) {
        const id = startId + i;
        if (state.totalLoaded + i >= CONFIG.maxImages) break;
        
        // Picsum provides random images with specific dimensions
        const width = 400;
        const height = 300 + Math.floor(Math.random() * 100); // Varying heights
        
        images.push({
            id: id,
            src: `https://picsum.photos/seed/${id}/${width}/${height}`,
            fullSrc: `https://picsum.photos/seed/${id}/1200/800`,
            title: `Photo #${id}`,
            author: `Photographer ${Math.floor(Math.random() * 50) + 1}`
        });
    }
    
    return images;
}

/**
 * Creates an image card element
 */
function createImageCard(imageData) {
    const card = document.createElement('div');
    card.className = 'image-card';
    card.style.animationDelay = `${Math.random() * 0.3}s`;
    
    card.innerHTML = `
        <img src="${imageData.src}" alt="${imageData.title}" loading="lazy">
        <div class="image-info">
            <h3>${imageData.title}</h3>
            <p>by ${imageData.author}</p>
        </div>
    `;
    
    // Add click handler for lightbox
    card.addEventListener('click', () => openLightbox(imageData));
    
    return card;
}

/**
 * Loads more images and appends them to the gallery
 */
async function loadMoreImages() {
    if (state.isLoading || !state.hasMore) return;
    
    state.isLoading = true;
    console.log(`📥 Loading page ${state.currentPage}...`);
    
    try {
        const images = await fetchImages(state.currentPage, CONFIG.imagesPerBatch);
        
        if (images.length === 0) {
            state.hasMore = false;
            sentinel.classList.add('end-message');
            intersectionObserver.unobserve(sentinel);
            console.log('✅ All images loaded!');
            return;
        }
        
        // Create a document fragment for better performance
        const fragment = document.createDocumentFragment();
        
        images.forEach(imageData => {
            const card = createImageCard(imageData);
            fragment.appendChild(card);
        });
        
        gallery.appendChild(fragment);
        
        state.totalLoaded += images.length;
        state.currentPage++;
        updateStats();
        
        // Check if we've reached the limit
        if (state.totalLoaded >= CONFIG.maxImages) {
            state.hasMore = false;
            sentinel.classList.add('end-message');
            intersectionObserver.unobserve(sentinel);
            console.log('✅ Maximum images reached!');
        }
        
        console.log(`✅ Loaded ${images.length} images. Total: ${state.totalLoaded}`);
        
    } catch (error) {
        console.error('❌ Error loading images:', error);
    } finally {
        state.isLoading = false;
    }
}

// ============================================
// Lightbox Functions
// ============================================

function openLightbox(imageData) {
    lightboxImg.src = imageData.fullSrc;
    lightboxCaption.textContent = `${imageData.title} by ${imageData.author}`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// Lightbox event listeners
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});

// ============================================
// UI Updates
// ============================================

function updateStats() {
    imageCountEl.textContent = state.totalLoaded;
    triggerCountEl.textContent = state.triggerCount;
}

// ============================================
// Initialize
// ============================================

// Load initial batch of images
loadMoreImages();

console.log(`
🚀 Infinite Scroll Gallery Initialized!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 Using Intersection Observer API
📌 Root Margin: ${CONFIG.rootMargin}
📌 Threshold: ${CONFIG.threshold}
📌 Images per batch: ${CONFIG.imagesPerBatch}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 Why Intersection Observer is better than scroll events:
   1. Browser-optimized - runs on compositor thread
   2. No need for throttle/debounce
   3. Automatically handles resize, zoom, iframe scenarios
   4. Clean callback-based API
   5. Better battery life on mobile devices
`);
