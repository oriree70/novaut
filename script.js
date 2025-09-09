// Load vehicles from localStorage (same as admin panel)
let vehicles = [];

// DOM Elements
const vehiclesGrid = document.getElementById('vehiclesGrid');
const searchInput = document.getElementById('searchInput');
const priceFilter = document.getElementById('priceFilter');
const makeFilter = document.getElementById('makeFilter');
const modal = document.getElementById('vehicleModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.querySelector('.close');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const contactForm = document.getElementById('contactForm');

// Image modal elements (will be initialized in DOMContentLoaded)
let imageModal, modalImage, imageClose, prevImageBtn, nextImageBtn, currentImageNum, totalImages;

// Image navigation variables
let currentImageIndex = 0;
let currentImageArray = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Load vehicles from localStorage first
    loadVehicles();
    
    // Initialize image modal elements
    imageModal = document.getElementById('imageModal');
    modalImage = document.getElementById('modalImage');
    imageClose = document.querySelector('.image-close');
    prevImageBtn = document.getElementById('prevImage');
    nextImageBtn = document.getElementById('nextImage');
    currentImageNum = document.getElementById('currentImageNum');
    totalImages = document.getElementById('totalImages');
    
    setupEventListeners();
});

// Helpers for custom cleared status
function customClearedClass(value) {
    if (value === true || value === 'true') return 'cleared';
    if (value === 'coming') return 'coming';
    return 'not-cleared';
}

function customClearedLabel(value) {
    if (value === true || value === 'true') return 'Custom Cleared';
    if (value === 'coming') return 'Coming';
    return 'Not Cleared';
}

// Load vehicles from localStorage
function loadVehicles() {
    const savedVehicles = localStorage.getItem('novatoautos_vehicles');
    if (savedVehicles) {
        vehicles = JSON.parse(savedVehicles);
        console.log('✅ Loaded vehicles from localStorage:', vehicles.length);
    } else {
        vehicles = [];
        console.log('⚠️ No vehicles found in localStorage');
    }
    // Filter out sold vehicles for the main website
    const availableVehicles = vehicles.filter(vehicle => !vehicle.sold);
    console.log('Available vehicles for display:', availableVehicles.length);
    displayVehicles(availableVehicles);
}

// Display vehicles in the grid
function displayVehicles(vehiclesToShow) {
    if (!vehiclesGrid) return;
    
    vehiclesGrid.innerHTML = '';
    
    // Sort vehicles by dateAdded (newest first)
    const sortedVehicles = vehiclesToShow.sort((a, b) => {
        const dateA = new Date(a.dateAdded || 0);
        const dateB = new Date(b.dateAdded || 0);
        return dateB - dateA; // Newest first
    });
    
    sortedVehicles.forEach(vehicle => {
        const vehicleCard = createVehicleCard(vehicle);
        vehiclesGrid.appendChild(vehicleCard);
    });
}

// Create a vehicle card element
function createVehicleCard(vehicle) {
    const card = document.createElement('div');
    card.className = 'vehicle-card';
    card.onclick = () => openVehicleModal(vehicle.id);
    
    const savings = (vehicle.priceBefore || 0) - vehicle.priceAfter;
    const savingsPercent = vehicle.priceBefore > 0 ? Math.round((savings / vehicle.priceBefore) * 100) : 0;
    
    card.innerHTML = `
        <div class="vehicle-images">
            <div class="before-after-container">
                <div class="image-section before-section">
                    <div class="image-label">BEFORE</div>
                    <img src="${vehicle.beforeImages[0]}" alt="Before repair" style="cursor: zoom-in;" class="main-vehicle-image" data-image-src="${vehicle.beforeImages[0]}" data-vehicle-id="${vehicle.id}" data-gallery-type="before">
                </div>
                <div class="image-section after-section">
                    <div class="image-label">AFTER</div>
                    <img src="${vehicle.afterImages[0]}" alt="After repair" style="cursor: zoom-in;" class="main-vehicle-image" data-image-src="${vehicle.afterImages[0]}" data-vehicle-id="${vehicle.id}" data-gallery-type="after">
                </div>
            </div>
        </div>
        <div class="vehicle-info">
            <h3 class="vehicle-title">${vehicle.year} ${vehicle.make} ${vehicle.model}</h3>
            <div class="vehicle-details">
                <span><i class="fas fa-tachometer-alt"></i> ${vehicle.mileage.toLocaleString()} miles</span>
                <span><i class="fas fa-star"></i> ${vehicle.condition}</span>
            </div>
            <div class="vehicle-status">
                <span class="custom-cleared-badge ${customClearedClass(vehicle.customCleared)}">
                    ${customClearedLabel(vehicle.customCleared)}
                </span>
            </div>
            <div class="vehicle-pricing">
                <div class="price-comparison">
                    <span class="price-before">Before: ₦${vehicle.priceBefore.toLocaleString()}</span>
                    <span class="price-after">Now: ₦${vehicle.priceAfter.toLocaleString()}</span>
                </div>
                <div class="savings-info">
                    <span class="savings-amount">Save ₦${savings.toLocaleString()}</span>
                    <span class="savings-percent">${savingsPercent}% off</span>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// Open vehicle modal with details
function openVehicleModal(vehicleOrId) {
    const vehicle = typeof vehicleOrId === 'object' ? vehicleOrId : vehicles.find(v => v.id === vehicleOrId);
    if (!vehicle || !modal || !modalContent) return;
    
    const savings = (vehicle.priceBefore || 0) - vehicle.priceAfter;
    const savingsPercent = vehicle.priceBefore > 0 ? Math.round((savings / vehicle.priceBefore) * 100) : 0;
    
    modalContent.innerHTML = `
        <div class="vehicle-detail">
            <h2>${vehicle.year} ${vehicle.make} ${vehicle.model}</h2>
            <div class="vehicle-gallery">
                <div class="gallery-section before-section">
                    <div class="section-header">
                        <h4><i class="fas fa-exclamation-triangle"></i> Before Repair</h4>
                        <span class="image-count">${vehicle.beforeImages.length} images</span>
                    </div>
                    <div class="gallery-images">
                        ${vehicle.beforeImages.map((img, index) => `<img src="${img}" alt="Before repair" class="gallery-thumbnail" data-image-src="${img}" data-vehicle-id="${vehicle.id}" data-gallery-type="before">`).join('')}
                    </div>
                </div>
                <div class="gallery-section after-section">
                    <div class="section-header">
                        <h4><i class="fas fa-check-circle"></i> After Repair</h4>
                        <span class="image-count">${vehicle.afterImages.length} images</span>
                    </div>
                    <div class="gallery-images">
                        ${vehicle.afterImages.map((img, index) => `<img src="${img}" alt="After repair" class="gallery-thumbnail" data-image-src="${img}" data-vehicle-id="${vehicle.id}" data-gallery-type="after">`).join('')}
                    </div>
                </div>
            </div>
            <div class="vehicle-specs">
                <div class="spec-group">
                    <h4>Vehicle Information</h4>
                    <div class="specs-grid">
                        <div class="spec-item">
                            <i class="fas fa-calendar"></i>
                            <span>Year: ${vehicle.year}</span>
                        </div>
                        <div class="spec-item">
                            <i class="fas fa-tachometer-alt"></i>
                            <span>Mileage: ${vehicle.mileage.toLocaleString()} miles</span>
                        </div>
                        <div class="spec-item">
                            <i class="fas fa-star"></i>
                            <span>Condition: ${vehicle.condition}</span>
                        </div>
                        <div class="spec-item">
                            <i class="fas fa-certificate"></i>
                            <span>Status: ${customClearedLabel(vehicle.customCleared)}</span>
                        </div>
                    </div>
                </div>
                <div class="spec-group">
                    <h4>Features</h4>
                    <div class="features-list">
                        ${vehicle.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                    </div>
                </div>
                <div class="spec-group">
                    <h4>Description</h4>
                    <p>${vehicle.description}</p>
                </div>
                <div class="spec-group">
                    <h4>Pricing</h4>
                    <div class="pricing-detail">
                        <div class="price-row">
                            <span>Original Price:</span>
                            <span class="price-original">₦${vehicle.priceBefore.toLocaleString()}</span>
                        </div>
                        <div class="price-row">
                            <span>Current Price:</span>
                            <span class="price-current">₦${vehicle.priceAfter.toLocaleString()}</span>
                        </div>
                        <div class="price-row savings-row">
                            <span>You Save:</span>
                            <span class="price-savings">₦${savings.toLocaleString()} (${savingsPercent}%)</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="vehicle-actions">
                <button class="btn btn-primary" onclick="contactAboutVehicle(${vehicle.id})">
                    <i class="fas fa-envelope"></i> Contact About This Vehicle
                </button>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Close vehicle modal
function closeVehicleModal() {
    if (modal) {
        modal.style.display = 'none';
    }
}

// Open image modal
function openImageModal(imageSrc, allImages) {
    try {
        console.log('Opening image modal:', imageSrc, allImages);
        
        const imageModalEl = document.getElementById('imageModal');
        const modalImageEl = document.getElementById('modalImage');
        
        if (!imageModalEl || !modalImageEl) {
            console.error('Image modal elements not found');
            return;
        }
        
        // Set current image array and index
        currentImageArray = Array.isArray(allImages) ? allImages : [imageSrc];
        currentImageIndex = currentImageArray.indexOf(imageSrc);
        if (currentImageIndex === -1) currentImageIndex = 0;
        
        // Update display
        updateImageDisplay();
        updateNavigationButtons();
        
        // Show modal
        imageModalEl.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
    } catch (error) {
        console.error('Error in openImageModal:', error);
    }
}

// Close image modal
function closeImageModal() {
    const imageModalEl = document.getElementById('imageModal');
    if (imageModalEl) {
        imageModalEl.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Navigate images
function showNextImage() {
    if (currentImageIndex < currentImageArray.length - 1) {
        currentImageIndex++;
    } else {
        currentImageIndex = 0; // Loop to first image
    }
    updateImageDisplay();
    updateNavigationButtons();
}

function showPreviousImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
    } else {
        currentImageIndex = currentImageArray.length - 1; // Loop to last image
    }
    updateImageDisplay();
    updateNavigationButtons();
}

function updateImageDisplay() {
    const modalImageEl = document.getElementById('modalImage');
    const currentImageNumEl = document.getElementById('currentImageNum');
    const totalImagesEl = document.getElementById('totalImages');
    
    if (modalImageEl && currentImageArray[currentImageIndex]) {
        modalImageEl.src = currentImageArray[currentImageIndex];
    }
    
    if (currentImageNumEl) {
        currentImageNumEl.textContent = currentImageIndex + 1;
    }
    
    if (totalImagesEl) {
        totalImagesEl.textContent = currentImageArray.length;
    }
}

function updateNavigationButtons() {
    const prevImageBtnEl = document.getElementById('prevImage');
    const nextImageBtnEl = document.getElementById('nextImage');
    
    // Always enable buttons for looping
    if (prevImageBtnEl) prevImageBtnEl.disabled = false;
    if (nextImageBtnEl) nextImageBtnEl.disabled = false;
}

// Contact about vehicle
function contactAboutVehicle(vehicleId) {
    const vehicle = vehicles.find(v => v.id === vehicleId);
    if (vehicle) {
        const message = `I'm interested in the ${vehicle.year} ${vehicle.make} ${vehicle.model}. Please contact me with more information.`;
        const messageField = document.getElementById('message');
        const serviceField = document.getElementById('service');
        
        if (messageField) messageField.value = message;
        if (serviceField) serviceField.value = 'vehicle-inquiry';
        
        // Close modal and scroll to contact form
        closeVehicleModal();
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }
}

// Filter vehicles
function filterVehicles() {
    if (!searchInput || !priceFilter || !makeFilter) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    const priceRange = priceFilter.value;
    const makeFilterValue = makeFilter.value;
    
    let filteredVehicles = vehicles.filter(vehicle => !vehicle.sold); // Only show available vehicles
    
    // Search filter
    if (searchTerm) {
        filteredVehicles = filteredVehicles.filter(vehicle =>
            vehicle.make.toLowerCase().includes(searchTerm) ||
            vehicle.model.toLowerCase().includes(searchTerm) ||
            vehicle.year.toString().includes(searchTerm)
        );
    }
    
    // Price filter
    if (priceRange) {
        filteredVehicles = filteredVehicles.filter(vehicle => {
            const price = vehicle.priceAfter;
            switch (priceRange) {
                case 'under-10000': return price < 10000;
                case '10000-15000': return price >= 10000 && price <= 15000;
                case '15000-20000': return price >= 15000 && price <= 20000;
                case '20000+': return price > 20000;
                default: return true;
            }
        });
    }
    
    // Make filter
    if (makeFilterValue) {
        filteredVehicles = filteredVehicles.filter(vehicle => vehicle.make === makeFilterValue);
    }
    
    displayVehicles(filteredVehicles);
}

// Setup event listeners
function setupEventListeners() {
    // Search and filter
    if (searchInput) searchInput.addEventListener('input', filterVehicles);
    if (priceFilter) priceFilter.addEventListener('change', filterVehicles);
    if (makeFilter) makeFilter.addEventListener('change', filterVehicles);
    
    // Modal close events
    if (closeModal) closeModal.addEventListener('click', closeVehicleModal);
    
    // Image modal events
    if (imageClose) imageClose.addEventListener('click', closeImageModal);
    if (prevImageBtn) prevImageBtn.addEventListener('click', showPreviousImage);
    if (nextImageBtn) nextImageBtn.addEventListener('click', showNextImage);
    
    // Close modals when clicking outside
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) closeVehicleModal();
        });
    }
    
    if (imageModal) {
        imageModal.addEventListener('click', function(e) {
            if (e.target === imageModal) closeImageModal();
        });
    }
    
    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Contact form
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Image click event delegation for gallery thumbnails and main images
    document.addEventListener("click", function(e) {
        if (e.target.classList.contains("gallery-thumbnail") || e.target.classList.contains("main-vehicle-image")) {
            e.stopPropagation();
            const imageSrc = e.target.getAttribute("data-image-src");
            const vehicleId = e.target.getAttribute("data-vehicle-id");
            
            // Find the vehicle to get all images
            const vehicle = vehicles.find(v => v.id == vehicleId);
            if (vehicle && vehicle.beforeImages && vehicle.afterImages) {
                const allImages = [...vehicle.beforeImages, ...vehicle.afterImages];
                openImageModal(imageSrc, allImages);
            }
        }
    });
    
    // Populate make filter
    populateMakeFilter();
}

// Populate make filter with available makes
function populateMakeFilter() {
    if (!makeFilter || !vehicles.length) return;
    
    const makes = [...new Set(vehicles.filter(v => !v.sold).map(v => v.make))].sort();
    
    makeFilter.innerHTML = '<option value="">All Makes</option>';
    makes.forEach(make => {
        const option = document.createElement('option');
        option.value = make;
        option.textContent = make;
        makeFilter.appendChild(option);
    });
}

// Handle contact form submission
function handleContactForm(e) {
    e.preventDefault();
    
    if (!contactForm) return;
    
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        service: formData.get('service'),
        message: formData.get('message'),
        timestamp: new Date().toISOString()
    };
    
    // Save to localStorage
    const messages = JSON.parse(localStorage.getItem('novatoautos_messages') || '[]');
    messages.push(data);
    localStorage.setItem('novatoautos_messages', JSON.stringify(messages));
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
}

// Add scroll effect to navbar
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            }
        }
    });
});