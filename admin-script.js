// Admin Panel JavaScript
let vehicles = [];
let messages = [];

// Initialize admin panel
document.addEventListener('DOMContentLoaded', function() {
    loadVehicles();
    loadMessages();
    setupEventListeners();
    updateDashboard();
});

// Load vehicles from localStorage or use sample data
function loadVehicles() {
    const savedVehicles = localStorage.getItem('novatoautos_vehicles');
    if (savedVehicles) {
        vehicles = JSON.parse(savedVehicles);
    } else {
        // Use sample data if no saved vehicles
        vehicles = [
            {
                id: 1,
                make: 'Toyota',
                model: 'Camry',
                year: 2018,
                mileage: 45000,
                priceBefore: 12000,
                priceAfter: 8500,
                condition: 'Excellent',
                beforeImages: [
                    'https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
                ],
                afterImages: [
                    'https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
                ],
                features: ['Automatic Transmission', 'Air Conditioning', 'Power Windows', 'Bluetooth'],
                description: 'Beautifully restored 2018 Toyota Camry with comprehensive accident repair documentation.',
                customCleared: 'true',
                sold: false,
                dateAdded: new Date().toISOString()
            },
            {
                id: 2,
                make: 'Honda',
                model: 'Civic',
                year: 2019,
                mileage: 32000,
                priceBefore: 15000,
                priceAfter: 11000,
                condition: 'Very Good',
                beforeImages: [
                    'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
                ],
                afterImages: [
                    'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
                ],
                features: ['Manual Transmission', 'Air Conditioning', 'Power Steering', 'USB Port'],
                description: 'Well-maintained Honda Civic with detailed repair history and excellent fuel efficiency.',
                customCleared: 'coming',
                sold: false,
                dateAdded: new Date().toISOString()
            },
            {
                id: 3,
                make: 'Ford',
                model: 'F-150',
                year: 2017,
                mileage: 68000,
                priceBefore: 18000,
                priceAfter: 13500,
                condition: 'Good',
                beforeImages: [
                    'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
                ],
                afterImages: [
                    'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
                ],
                features: ['4WD', 'Automatic Transmission', 'Towing Package', 'Bed Liner'],
                description: 'Powerful Ford F-150 with comprehensive restoration and towing capabilities.',
                customCleared: true,
                sold: false,
                dateAdded: new Date().toISOString()
            },
            {
                id: 4,
                make: 'Chevrolet',
                model: 'Malibu',
                year: 2020,
                mileage: 28000,
                priceBefore: 16000,
                priceAfter: 12000,
                condition: 'Excellent',
                beforeImages: [
                    'https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
                ],
                afterImages: [
                    'https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
                ],
                features: ['Automatic Transmission', 'Leather Seats', 'Navigation', 'Backup Camera'],
                description: 'Luxurious Chevrolet Malibu with premium features and excellent condition.',
                customCleared: false,
                sold: false,
                dateAdded: new Date().toISOString()
            },
            {
                id: 5,
                make: 'Nissan',
                model: 'Altima',
                year: 2018,
                mileage: 52000,
                priceBefore: 14000,
                priceAfter: 9500,
                condition: 'Very Good',
                beforeImages: [
                    'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
                ],
                afterImages: [
                    'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
                ],
                features: ['CVT Transmission', 'Air Conditioning', 'Power Windows', 'Cruise Control'],
                description: 'Reliable Nissan Altima with smooth CVT transmission and great fuel economy.',
                customCleared: true,
                sold: false,
                dateAdded: new Date().toISOString()
            },
            {
                id: 6,
                make: 'BMW',
                model: '3 Series',
                year: 2019,
                mileage: 38000,
                priceBefore: 25000,
                priceAfter: 18500,
                condition: 'Excellent',
                beforeImages: [
                    'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
                ],
                afterImages: [
                    'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
                ],
                features: ['Automatic Transmission', 'Leather Seats', 'Navigation System', 'Premium Sound', 'Sunroof'],
                description: 'Luxury BMW 3 Series with premium features and excellent performance.',
                customCleared: true,
                sold: false,
                dateAdded: new Date().toISOString()
            },
            {
                id: 7,
                make: 'Mercedes',
                model: 'C-Class',
                year: 2020,
                mileage: 29000,
                priceBefore: 28000,
                priceAfter: 22000,
                condition: 'Excellent',
                beforeImages: [
                    'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
                ],
                afterImages: [
                    'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
                ],
                features: ['Automatic Transmission', 'Leather Interior', 'Premium Audio', 'LED Headlights', 'Backup Camera'],
                description: 'Elegant Mercedes C-Class with sophisticated design and advanced technology.',
                customCleared: false,
                sold: false,
                dateAdded: new Date().toISOString()
            },
            {
                id: 8,
                make: 'Audi',
                model: 'A4',
                year: 2018,
                mileage: 42000,
                priceBefore: 22000,
                priceAfter: 16500,
                condition: 'Very Good',
                beforeImages: [
                    'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
                ],
                afterImages: [
                    'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
                ],
                features: ['Quattro AWD', 'Automatic Transmission', 'Premium Interior', 'Infotainment System', 'Heated Seats'],
                description: 'Sporty Audi A4 with Quattro all-wheel drive and premium amenities.',
                customCleared: true,
                sold: false,
                dateAdded: new Date().toISOString()
            },
            {
                id: 9,
                make: 'Hyundai',
                model: 'Elantra',
                year: 2021,
                mileage: 18000,
                priceBefore: 18000,
                priceAfter: 13500,
                condition: 'Excellent',
                beforeImages: [
                    'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
                ],
                afterImages: [
                    'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
                ],
                features: ['Automatic Transmission', 'Apple CarPlay', 'Android Auto', 'Bluetooth', 'Backup Camera'],
                description: 'Modern Hyundai Elantra with latest technology and excellent fuel efficiency.',
                customCleared: false,
                sold: false,
                dateAdded: new Date().toISOString()
            },
            {
                id: 10,
                make: 'Kia',
                model: 'Sorento',
                year: 2019,
                mileage: 45000,
                priceBefore: 20000,
                priceAfter: 15500,
                condition: 'Very Good',
                beforeImages: [
                    'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
                ],
                afterImages: [
                    'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
                ],
                features: ['7-Seater', 'AWD', 'Automatic Transmission', 'Third Row Seating', 'Roof Rails'],
                description: 'Spacious Kia Sorento perfect for families with third-row seating and AWD capability.',
                customCleared: true,
                sold: false,
                dateAdded: new Date().toISOString()
            }
        ];
        saveVehicles();
    }
    displayAdminVehicles();
}

// Load messages from localStorage
function loadMessages() {
    const savedMessages = localStorage.getItem('novatoautos_messages');
    if (savedMessages) {
        messages = JSON.parse(savedMessages);
    } else {
        messages = [
            {
                id: 1,
                name: 'John Smith',
                email: 'john@example.com',
                phone: '(555) 123-4567',
                service: 'vehicle-inquiry',
                message: 'I\'m interested in the 2018 Toyota Camry. Can you provide more details about the accident and repairs?',
                timestamp: new Date().toISOString(),
                read: false
            }
        ];
        saveMessages();
    }
    displayMessages();
}

// Save vehicles to localStorage
function saveVehicles() {
    localStorage.setItem('novatoautos_vehicles', JSON.stringify(vehicles));
}

// Save messages to localStorage
function saveMessages() {
    localStorage.setItem('novatoautos_messages', JSON.stringify(messages));
}

// Setup event listeners
function setupEventListeners() {
    // Sidebar navigation
    document.querySelectorAll('.sidebar-menu a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href').substring(1);
            showSection(target);
            
            // Update active state
            document.querySelectorAll('.sidebar-menu li').forEach(li => li.classList.remove('active'));
            this.parentElement.classList.add('active');
        });
    });

    // Add vehicle form
    document.getElementById('addVehicleForm').addEventListener('submit', handleAddVehicle);

    // File upload handlers
    setupFileUpload('beforePhotos', 'beforePhotosList');
    setupFileUpload('afterPhotos', 'afterPhotosList');

    // Admin search
    document.getElementById('adminSearch').addEventListener('input', filterAdminVehicles);
}

// Show specific section
function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Update dashboard statistics
function updateDashboard() {
    const totalVehicles = vehicles.length;
    const totalValue = vehicles.reduce((sum, vehicle) => sum + (Number(vehicle.priceAfter) || 0), 0);
    const newMessages = messages.filter(msg => !msg.read).length;
    const avgPrice = vehicles.length > 0 ? 
        Math.round(vehicles.reduce((sum, vehicle) => sum + (Number(vehicle.priceAfter) || 0), 0) / vehicles.length) : 0;

    document.getElementById('totalVehicles').textContent = totalVehicles;
    document.getElementById('totalValue').textContent = `₦${totalValue.toLocaleString()}`;
    document.getElementById('newMessages').textContent = newMessages;
    document.getElementById('avgSavings').textContent = `₦${avgPrice.toLocaleString()}`;

    // Update recent vehicles
    displayRecentVehicles();
}

// Display recent vehicles on dashboard
function displayRecentVehicles() {
    const recentVehiclesList = document.getElementById('recentVehiclesList');
    const recentVehicles = vehicles.slice(-5).reverse();

    recentVehiclesList.innerHTML = recentVehicles.map(vehicle => `
        <div class="vehicle-item">
            <img src="${vehicle.afterImages[0]}" alt="${vehicle.make} ${vehicle.model}">
            <div class="vehicle-item-info">
                <h4>${vehicle.year} ${vehicle.make} ${vehicle.model}</h4>
                <p>${vehicle.mileage.toLocaleString()} miles • ${vehicle.condition}</p>
            </div>
            <div class="vehicle-item-price">₦${vehicle.priceAfter.toLocaleString()}</div>
        </div>
    `).join('');
}

// Display vehicles in admin grid
function displayAdminVehicles() {
    const adminVehiclesList = document.getElementById('adminVehiclesList');
    
    adminVehiclesList.innerHTML = vehicles.map(vehicle => {
        const priceBefore = Number(vehicle.priceBefore) || 0;
        const priceAfter = Number(vehicle.priceAfter) || 0;
        const savings = priceBefore - priceAfter;
        const savingsPercent = priceBefore > 0 ? Math.round((savings / priceBefore) * 100) : 0;
        
        return `
            <div class="admin-vehicle-card">
                <div class="admin-vehicle-image">
                    <img src="${vehicle.afterImages[0]}" alt="${vehicle.make} ${vehicle.model}">
                </div>
                <div class="admin-vehicle-info">
                    <h3>${vehicle.year} ${vehicle.make} ${vehicle.model}</h3>
                    <div class="admin-vehicle-details">
                        ${vehicle.mileage.toLocaleString()} miles • ${vehicle.condition}
                    </div>
                    <div class="admin-vehicle-pricing">
                        <span class="price-after">₦${vehicle.priceAfter.toLocaleString()}</span>
                    </div>
                    <div class="admin-vehicle-status">
                        <span class="custom-cleared-badge ${vehicle.customCleared === true || vehicle.customCleared === 'true' ? 'cleared' : vehicle.customCleared === 'coming' ? 'coming' : 'not-cleared'}">
                            ${vehicle.customCleared === true || vehicle.customCleared === 'true' ? 'Custom Cleared' : vehicle.customCleared === 'coming' ? 'Coming' : 'Not Cleared'}
                        </span>
                        <span class="sold-status-badge ${vehicle.sold ? 'sold' : 'available'}">
                            ${vehicle.sold ? 'SOLD' : 'Available'}
                        </span>
                    </div>
                    <div class="admin-vehicle-actions">
                        <button class="btn btn-primary btn-small" onclick="editVehicle(${vehicle.id})">
                            <i class="fas fa-edit"></i> Edit
                        </button>
                        <button class="btn btn-danger btn-small" onclick="deleteVehicle(${vehicle.id})">
                            <i class="fas fa-trash"></i> Delete
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Filter admin vehicles
function filterAdminVehicles() {
    const searchTerm = document.getElementById('adminSearch').value.toLowerCase();
    const filteredVehicles = vehicles.filter(vehicle => 
        (vehicle.make || '').toLowerCase().includes(searchTerm) ||
        (vehicle.model || '').toLowerCase().includes(searchTerm) ||
        String(vehicle.year || '').includes(searchTerm)
    );
    
    // Update display with filtered results
    const adminVehiclesList = document.getElementById('adminVehiclesList');
    adminVehiclesList.innerHTML = filteredVehicles.map(vehicle => {
        const priceBefore = Number(vehicle.priceBefore) || 0;
        const priceAfter = Number(vehicle.priceAfter) || 0;
        const savings = priceBefore - priceAfter;
        const savingsPercent = priceBefore > 0 ? Math.round((savings / priceBefore) * 100) : 0;
        
        return `
            <div class="admin-vehicle-card">
                <div class="admin-vehicle-image">
                    <img src="${vehicle.afterImages[0]}" alt="${vehicle.make} ${vehicle.model}">
                </div>
                <div class="admin-vehicle-info">
                    <h3>${vehicle.year} ${vehicle.make} ${vehicle.model}</h3>
                    <div class="admin-vehicle-details">
                        ${vehicle.mileage.toLocaleString()} miles • ${vehicle.condition}
                    </div>
                    <div class="admin-vehicle-pricing">
                        <span class="price-after">₦${vehicle.priceAfter.toLocaleString()}</span>
                    </div>
                    <div class="admin-vehicle-status">
                        <span class="custom-cleared-badge ${vehicle.customCleared === 'true' ? 'cleared' : vehicle.customCleared === 'coming' ? 'coming' : 'not-cleared'}">
                            ${vehicle.customCleared === 'true' ? 'Custom Cleared' : vehicle.customCleared === 'coming' ? 'Coming' : 'Not Cleared'}
                        </span>
                        <span class="sold-status-badge ${vehicle.sold ? 'sold' : 'available'}">
                            ${vehicle.sold ? 'SOLD' : 'Available'}
                        </span>
                    </div>
                    <div class="admin-vehicle-actions">
                        <button class="btn btn-primary btn-small" onclick="editVehicle(${vehicle.id})">
                            <i class="fas fa-edit"></i> Edit
                        </button>
                        <button class="btn btn-danger btn-small" onclick="deleteVehicle(${vehicle.id})">
                            <i class="fas fa-trash"></i> Delete
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Setup file upload functionality
function setupFileUpload(inputId, listId) {
    const input = document.getElementById(inputId);
    const list = document.getElementById(listId);
    
    input.addEventListener('change', function(e) {
        const files = Array.from(e.target.files);
        displayUploadedFiles(files, list);
    });
}

// Display uploaded files
function displayUploadedFiles(files, listElement) {
    listElement.innerHTML = '';
    
    // Limit to 15 images
    if (files.length > 15) {
        alert('You can only upload up to 15 images. Please select fewer images.');
        return;
    }
    
    files.forEach((file, index) => {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const fileElement = document.createElement('div');
                fileElement.className = 'uploaded-file';
                fileElement.innerHTML = `
                    <img src="${e.target.result}" alt="Uploaded image">
                    <div class="file-info">
                        <span class="file-name">${file.name}</span>
                        <span class="file-size">${(file.size / 1024 / 1024).toFixed(2)} MB</span>
                    </div>
                    <button class="remove-file" onclick="removeUploadedFile(this, ${index})">
                        <i class="fas fa-times"></i>
                    </button>
                `;
                listElement.appendChild(fileElement);
            };
            reader.readAsDataURL(file);
        }
    });
    
    // Show image count
    if (files.length > 0) {
        const countElement = document.createElement('div');
        countElement.className = 'image-count-display';
        countElement.innerHTML = `<span>${files.length}/15 images selected</span>`;
        listElement.appendChild(countElement);
    }
}

// Remove uploaded file
function removeUploadedFile(button, index) {
    button.parentElement.remove();
    // Note: In a real application, you'd need to update the file input as well
}

// Handle add/update vehicle form submission
function handleAddVehicle(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const beforePhotos = document.getElementById('beforePhotos').files;
    const afterPhotos = document.getElementById('afterPhotos').files;
    
    // Validate required fields
    if (beforePhotos.length === 0 || afterPhotos.length === 0) {
        alert('Please upload both before and after photos.');
        return;
    }
    
    const editingId = document.getElementById('addVehicleForm').dataset.editingId;

    if (editingId) {
        // Update existing vehicle
        const vehicleIndex = vehicles.findIndex(v => String(v.id) === String(editingId));
        if (vehicleIndex !== -1) {
            const updatedVehicle = {
                ...vehicles[vehicleIndex],
                make: formData.get('make'),
                model: formData.get('model'),
                year: parseInt(formData.get('year')),
                mileage: parseInt(formData.get('mileage')),
                priceBefore: parseInt(formData.get('priceBefore')) || 0,
                priceAfter: parseInt(formData.get('priceAfter')) || 0,
                condition: formData.get('condition'),
                description: formData.get('description'),
                features: formData.get('features') ? formData.get('features').split(',').map(f => f.trim()) : [],
                customCleared: (formData.get('customCleared') || 'false'),
                sold: (formData.get('soldStatus') || 'false') === 'true'
            };
            vehicles[vehicleIndex] = updatedVehicle;
            saveVehicles();
            displayAdminVehicles();
            updateDashboard();
            showAlert('Vehicle updated successfully!', 'success');
            // Clear editing state
            delete document.getElementById('addVehicleForm').dataset.editingId;
            document.querySelector('#add-vehicle h2').textContent = 'Add New Vehicle';
            document.querySelector('#addVehicleForm button[type="submit"]').innerHTML = '<i class="fas fa-save"></i> Add Vehicle';
        }
    } else {
        // Create new vehicle object
        const newVehicle = {
            id: Date.now(),
            make: formData.get('make'),
            model: formData.get('model'),
            year: parseInt(formData.get('year')),
            mileage: parseInt(formData.get('mileage')),
            priceBefore: parseInt(formData.get('priceBefore')) || 0,
            priceAfter: parseInt(formData.get('priceAfter')) || 0,
            condition: formData.get('condition'),
            description: formData.get('description'),
            features: formData.get('features') ? formData.get('features').split(',').map(f => f.trim()) : [],
            customCleared: (formData.get('customCleared') || 'false'),
            sold: (formData.get('soldStatus') || 'false') === 'true',
            beforeImages: [],
            afterImages: [],
            dateAdded: new Date().toISOString()
        };

        // For demo purposes, use placeholder images
        newVehicle.beforeImages = [
            'https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        ];
        newVehicle.afterImages = [
            'https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        ];

        vehicles.push(newVehicle);
        saveVehicles();
        displayAdminVehicles();
        updateDashboard();
        showAlert('Vehicle added successfully!', 'success');
    }

    // Reset form
    resetForm();

    // Switch to vehicles section
    showSection('vehicles');
    document.querySelectorAll('.sidebar-menu li').forEach(li => li.classList.remove('active'));
    document.querySelector('.sidebar-menu a[href="#vehicles"]').parentElement.classList.add('active');
}

// Reset form
function resetForm() {
    document.getElementById('addVehicleForm').reset();
    document.getElementById('beforePhotosList').innerHTML = '';
    document.getElementById('afterPhotosList').innerHTML = '';
}

// Cancel editing and return to vehicles list
function cancelEdit() {
    resetForm();
    // Clear editing state and restore labels/buttons
    delete document.getElementById('addVehicleForm').dataset.editingId;
    document.querySelector('#add-vehicle h2').textContent = 'Add New Vehicle';
    document.querySelector('#addVehicleForm button[type="submit"]').innerHTML = '<i class="fas fa-save"></i> Add Vehicle';
    // Navigate back to vehicles section
    showSection('vehicles');
    document.querySelectorAll('.sidebar-menu li').forEach(li => li.classList.remove('active'));
    document.querySelector('.sidebar-menu a[href="#vehicles"]').parentElement.classList.add('active');
}

// Show add vehicle form
function showAddVehicleForm() {
    showSection('add-vehicle');
    document.querySelectorAll('.sidebar-menu li').forEach(li => li.classList.remove('active'));
    document.querySelector('.sidebar-menu a[href="#add-vehicle"]').parentElement.classList.add('active');
}

// Edit vehicle
function editVehicle(vehicleId) {
    const vehicle = vehicles.find(v => v.id === vehicleId);
    if (vehicle) {
        // Populate form with vehicle data
        document.getElementById('vehicleMake').value = vehicle.make;
        document.getElementById('vehicleModel').value = vehicle.model;
        document.getElementById('vehicleYear').value = vehicle.year;
        document.getElementById('vehicleMileage').value = vehicle.mileage;
        document.getElementById('vehicleCondition').value = vehicle.condition;

        document.getElementById('priceAfter').value = vehicle.priceAfter;
        document.getElementById('vehicleDescription').value = vehicle.description;
        document.getElementById('vehicleFeatures').value = vehicle.features.join(', ');
        document.getElementById('customCleared').value = vehicle.customCleared;
        document.getElementById('soldStatus').value = vehicle.sold ? 'true' : 'false';
        
        // Show add vehicle form
        showAddVehicleForm();
        // Keep Manage Vehicles highlighted while editing
        document.querySelectorAll('.sidebar-menu li').forEach(li => li.classList.remove('active'));
        const manageLink = document.querySelector('.sidebar-menu a[href="#vehicles"]');
        if (manageLink && manageLink.parentElement) {
            manageLink.parentElement.classList.add('active');
        }
        
        // Change form title and button
        document.querySelector('#add-vehicle h2').textContent = 'Edit Vehicle';
        document.querySelector('#addVehicleForm button[type="submit"]').innerHTML = '<i class="fas fa-save"></i> Update Vehicle';
        
        // Store vehicle ID for update
        document.getElementById('addVehicleForm').dataset.editingId = vehicleId;
    }
}

// Delete vehicle
function deleteVehicle(vehicleId) {
    if (confirm('Are you sure you want to delete this vehicle?')) {
        vehicles = vehicles.filter(v => v.id !== vehicleId);
        saveVehicles();
        displayAdminVehicles();
        updateDashboard();
        showAlert('Vehicle deleted successfully!', 'success');
    }
}

// Display messages
function displayMessages() {
    const messagesList = document.getElementById('messagesList');
    
    messagesList.innerHTML = messages.map(message => `
        <div class="message-item ${message.read ? '' : 'unread'}">
            <div class="message-header">
                <div class="message-sender">${message.name}</div>
                <div class="message-time">${new Date(message.timestamp).toLocaleDateString()}</div>
            </div>
            <div class="message-subject">${getServiceLabel(message.service)}</div>
            <div class="message-content">${message.message}</div>
            <div style="margin-top: 1rem; font-size: 0.9rem; color: #7f8c8d;">
                <strong>Email:</strong> ${message.email} | 
                <strong>Phone:</strong> ${message.phone || 'Not provided'}
            </div>
            <div style="margin-top: 1rem;">
                <button class="btn btn-primary btn-small" onclick="markAsRead(${message.id})">
                    <i class="fas fa-check"></i> Mark as Read
                </button>
                <button class="btn btn-danger btn-small" onclick="deleteMessage(${message.id})">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        </div>
    `).join('');
}

// Get service label
function getServiceLabel(service) {
    const labels = {
        'vehicle-inquiry': 'Vehicle Inquiry',
        'repair-quote': 'Repair Quote',
        'general-question': 'General Question'
    };
    return labels[service] || service;
}

// Mark message as read
function markAsRead(messageId) {
    const message = messages.find(m => m.id === messageId);
    if (message) {
        message.read = true;
        saveMessages();
        displayMessages();
        updateDashboard();
        showAlert('Message marked as read!', 'success');
    }
}

// Delete message
function deleteMessage(messageId) {
    if (confirm('Are you sure you want to delete this message?')) {
        messages = messages.filter(m => m.id !== messageId);
        saveMessages();
        displayMessages();
        updateDashboard();
        showAlert('Message deleted successfully!', 'success');
    }
}

// Show alert message
function showAlert(message, type = 'info') {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    
    // Insert at the top of main content
    const mainContent = document.querySelector('.main-content');
    mainContent.insertBefore(alert, mainContent.firstChild);
    
    // Remove after 3 seconds
    setTimeout(() => {
        alert.remove();
    }, 3000);
}

// Export data (for backup purposes)
function exportData() {
    const data = {
        vehicles: vehicles,
        messages: messages,
        exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `novatoautos-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Import data (for restore purposes)
function importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const data = JSON.parse(e.target.result);
                    if (data.vehicles && data.messages) {
                        vehicles = data.vehicles;
                        messages = data.messages;
                        saveVehicles();
                        saveMessages();
                        displayAdminVehicles();
                        displayMessages();
                        updateDashboard();
                        showAlert('Data imported successfully!', 'success');
                    } else {
                        showAlert('Invalid data format!', 'error');
                    }
                } catch (error) {
                    showAlert('Error importing data!', 'error');
                }
            };
            reader.readAsText(file);
        }
    };
    input.click();
}
