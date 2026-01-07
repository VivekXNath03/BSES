const CONFIG = {
    rootMargin: '50px',
    threshold: 0.1,
    animationThreshold: 0.2,
    staggerDelay: 100
};

const stats = {
    imagesLoaded: 0,
    totalImages: 0
};

function updateStatsDisplay() {
    document.getElementById('imagesLoaded').textContent = stats.imagesLoaded;
    document.getElementById('totalImages').textContent = stats.totalImages;
}

function initImageLazyLoad() {
    const lazyImages = document.querySelectorAll('.lazy-image');
    stats.totalImages = lazyImages.length;
    updateStatsDisplay();

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.dataset.src;

                    if (src) {
                        img.src = src;

                        img.onload = () => {
                            img.classList.add('loaded');
                            stats.imagesLoaded++;
                            updateStatsDisplay();
                        };

                        img.onerror = () => {
                            img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200"%3E%3Crect fill="%23ccc" width="300" height="200"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23666"%3EError%3C/text%3E%3C/svg%3E';
                            img.classList.add('loaded');
                        };

                        delete img.dataset.src;
                    }

                    observer.unobserve(img);
                }
            });
        }, {
            root: null,
            rootMargin: CONFIG.rootMargin,
            threshold: CONFIG.threshold
        });

        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.classList.add('loaded');
        });
        stats.imagesLoaded = stats.totalImages;
        updateStatsDisplay();
    }
}

function initVideoLazyLoad() {
    const lazyVideos = document.querySelectorAll('.lazy-video');

    if ('IntersectionObserver' in window) {
        const videoObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const video = entry.target;
                    const src = video.dataset.src;

                    if (src) {
                        video.src = src;
                        video.classList.add('loaded');

                        const placeholder = video.parentElement.querySelector('.video-placeholder');
                        if (placeholder) {
                            placeholder.classList.add('hidden');
                        }

                        delete video.dataset.src;
                    }

                    observer.unobserve(video);
                }
            });
        }, {
            rootMargin: '100px',
            threshold: 0.25
        });

        lazyVideos.forEach(video => {
            videoObserver.observe(video);
        });
    }
}

function initBackgroundLazyLoad() {
    const lazyBackgrounds = document.querySelectorAll('.lazy-bg');

    if ('IntersectionObserver' in window) {
        const bgObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const bgUrl = element.dataset.bg;

                    if (bgUrl) {
                        const img = new Image();
                        img.onload = () => {
                            element.style.backgroundImage = `url(${bgUrl})`;
                            element.classList.add('loaded');
                        };
                        img.src = bgUrl;

                        delete element.dataset.bg;
                    }

                    observer.unobserve(element);
                }
            });
        }, {
            rootMargin: '200px',
            threshold: 0
        });

        lazyBackgrounds.forEach(bg => {
            bgObserver.observe(bg);
        });
    }
}

function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.fade-in-section, .slide-in-left, .slide-in-right, .slide-in-up'
    );

    if ('IntersectionObserver' in window) {
        const animationObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '0px',
            threshold: CONFIG.animationThreshold
        });

        animatedElements.forEach(el => {
            animationObserver.observe(el);
        });
    } else {
        animatedElements.forEach(el => el.classList.add('visible'));
    }
}

function initStaggerAnimations() {
    const staggerContainers = document.querySelectorAll('.cards-grid');

    if ('IntersectionObserver' in window) {
        const staggerObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const container = entry.target;
                    const items = container.querySelectorAll('.stagger-item');

                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, index * CONFIG.staggerDelay);
                    });

                    observer.unobserve(container);
                }
            });
        }, {
            rootMargin: '0px',
            threshold: 0.1
        });

        staggerContainers.forEach(container => {
            staggerObserver.observe(container);
        });
    }
}

function animateNumber(element, target, duration = 2000) {
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (target - start) * easeOutQuart);

        element.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

function initNumberCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target]');

    if ('IntersectionObserver' in window) {
        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.dataset.target, 10);

                    animateNumber(counter, target);
                    observer.unobserve(counter);
                }
            });
        }, {
            threshold: 0.5
        });

        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }
}

function demoMultipleThresholds() {
    const element = document.querySelector('.parallax-section');

    if (element && 'IntersectionObserver' in window) {
        const thresholdObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const ratio = entry.intersectionRatio;
                entry.target.style.setProperty('--visibility', ratio);
            });
        }, {
            threshold: [0, 0.25, 0.5, 0.75, 1]
        });

        thresholdObserver.observe(element);
    }
}

function isInViewport(element) {
    return new Promise(resolve => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                resolve(entry.isIntersecting);
                observer.disconnect();
            });
        });
        observer.observe(element);
    });
}

function init() {
    initImageLazyLoad();
    initVideoLazyLoad();
    initBackgroundLazyLoad();
    initScrollAnimations();
    initStaggerAnimations();
    initNumberCounters();
    demoMultipleThresholds();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initImageLazyLoad,
        initVideoLazyLoad,
        initBackgroundLazyLoad,
        initScrollAnimations,
        isInViewport
    };
}
