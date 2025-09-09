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
        // No sample data - start with empty array
        console.log("⚠️ No vehicles found in localStorage - starting fresh");
        vehicles = [];
    }
    displayAdminVehicles();
}// Load messages from localStorage

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
    
    // Sort vehicles by dateAdded (newest first)
    const sortedVehicles = vehicles.sort((a, b) => {
        const dateA = new Date(a.dateAdded || 0);
        const dateB = new Date(b.dateAdded || 0);
        return dateB - dateA; // Newest first
    });
    
    adminVehiclesList.innerHTML = sortedVehicles.map(vehicle => {
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

        vehicles.unshift(newVehicle); // Add to beginning for newest first
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

// Clear all data function
function clearAllData() {
    if (confirm('⚠️ WARNING: This will permanently delete ALL vehicles and messages data.\n\nThis action cannot be undone. Are you sure?')) {
        if (confirm('🚨 FINAL CONFIRMATION: All data will be lost forever!\n\nClick OK to proceed with deletion.')) {
            // Clear localStorage
            localStorage.removeItem('novatoautos_vehicles');
            localStorage.removeItem('novatoautos_messages');
            
            // Clear arrays
            vehicles = [];
            messages = [];
            
            // Update displays
            displayAdminVehicles();
            displayMessages();
            updateDashboard();
            
            // Show success message
            showAlert('✅ All data has been cleared successfully!', 'success');
            
            // Refresh the page after a short delay
            setTimeout(() => {
                location.reload();
            }, 2000);
        }
    }
}
