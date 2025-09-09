// Load vehicles from localStorage (same as admin panel)
let vehicles = [];

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
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        ],
        afterImages: [
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        ],
        features: ['Manual Transmission', 'Air Conditioning', 'Power Steering', 'USB Port'],
        description: 'Well-maintained Honda Civic with detailed repair history and excellent fuel efficiency.',
        customCleared: 'coming',
        sold: false
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
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        ],
        afterImages: [
            'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        ],
        features: ['4WD', 'Automatic Transmission', 'Towing Package', 'Bed Liner'],
        description: 'Powerful Ford F-150 with comprehensive restoration and towing capabilities.',
        customCleared: 'true',
        sold: false
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
        customCleared: 'false',
        sold: false
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
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        ],
        afterImages: [
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        ],
        features: ['CVT Transmission', 'Air Conditioning', 'Power Windows', 'Cruise Control'],
        description: 'Reliable Nissan Altima with smooth CVT transmission and great fuel economy.',
        customCleared: true,
        sold: false
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
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        ],
        afterImages: [
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        ],
        features: ['Automatic Transmission', 'Leather Seats', 'Navigation System', 'Premium Sound', 'Sunroof'],
        description: 'Luxury BMW 3 Series with premium features and excellent performance.',
        customCleared: 'true',
        sold: false
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
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        ],
        afterImages: [
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        ],
        features: ['Automatic Transmission', 'Leather Interior', 'Premium Audio', 'LED Headlights', 'Backup Camera'],
        description: 'Elegant Mercedes C-Class with sophisticated design and advanced technology.',
        customCleared: 'coming',
        sold: false
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
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        ],
        afterImages: [
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        ],
        features: ['Quattro AWD', 'Automatic Transmission', 'Premium Interior', 'Infotainment System', 'Heated Seats'],
        description: 'Sporty Audi A4 with Quattro all-wheel drive and premium amenities.',
        customCleared: true,
        sold: false
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
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        ],
        afterImages: [
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        ],
        features: ['Automatic Transmission', 'Apple CarPlay', 'Android Auto', 'Bluetooth', 'Backup Camera'],
        description: 'Modern Hyundai Elantra with latest technology and excellent fuel efficiency.',
        customCleared: false,
        sold: false
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
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        ],
        afterImages: [
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        ],
        features: ['7-Seater', 'AWD', 'Automatic Transmission', 'Third Row Seating', 'Roof Rails'],
        description: 'Spacious Kia Sorento perfect for families with third-row seating and AWD capability.',
        customCleared: true,
        sold: false
    },
    {
        id: 11,
        make: 'Mazda',
        model: 'CX-5',
        year: 2020,
        mileage: 32000,
        priceBefore: 19000,
        priceAfter: 14500,
        condition: 'Excellent',
        beforeImages: [
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        ],
        afterImages: [
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        ],
        features: ['AWD', 'Automatic Transmission', 'Leather Seats', 'Bose Audio', 'Sunroof'],
        description: 'Stylish Mazda CX-5 with premium interior and excellent handling.',
        customCleared: false,
        sold: false
    },
    {
        id: 12,
        make: 'Subaru',
        model: 'Outback',
        year: 2018,
        mileage: 55000,
        priceBefore: 21000,
        priceAfter: 16500,
        condition: 'Good',
        beforeImages: [
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        ],
        afterImages: [
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        ],
        features: ['Symmetrical AWD', 'CVT Transmission', 'Roof Rails', 'All-Weather Package', 'EyeSight Safety'],
        description: 'Adventure-ready Subaru Outback with legendary AWD and safety features.',
        customCleared: true,
        sold: false
    },
    {
        id: 13,
        make: 'Volkswagen',
        model: 'Jetta',
        year: 2019,
        mileage: 35000,
        priceBefore: 17000,
        priceAfter: 12500,
        condition: 'Very Good',
        beforeImages: [
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        ],
        afterImages: [
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        ],
        features: ['Automatic Transmission', 'Apple CarPlay', 'Android Auto', 'Bluetooth', 'Cruise Control'],
        description: 'Efficient Volkswagen Jetta with German engineering and modern technology.',
        customCleared: false,
        sold: false
    },
    {
        id: 14,
        make: 'Lexus',
        model: 'ES',
        year: 2017,
        mileage: 48000,
        priceBefore: 26000,
        priceAfter: 19500,
        condition: 'Excellent',
        beforeImages: [
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        ],
        afterImages: [
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
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
            }
        ];
        // Save sample data to localStorage if none exists
        localStorage.setItem('novatoautos_vehicles', JSON.stringify(vehicles));
    }
}

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
    // Initialize image modal elements
    imageModal = document.getElementById('imageModal');
    modalImage = document.getElementById('modalImage');
    imageClose = document.querySelector('.image-close');
    prevImageBtn = document.getElementById('prevImage');
    nextImageBtn = document.getElementById('nextImage');
    currentImageNum = document.getElementById('currentImageNum');
    totalImages = document.getElementById('totalImages');
    
    loadVehicles();
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

// Load vehicles from localStorage or use sample data
function loadVehicles() {
    const savedVehicles = localStorage.getItem('novatoautos_vehicles');
    if (savedVehicles) {
        vehicles = JSON.parse(savedVehicles);
    }
    // Filter out sold vehicles for the main website
    const availableVehicles = vehicles.filter(vehicle => !vehicle.sold);
    displayVehicles(availableVehicles);
}

// Reload page to refresh data
function clearAndReload() {
    location.reload();
}

// Display vehicles in the grid
function displayVehicles(vehiclesToShow) {
    vehiclesGrid.innerHTML = '';
    
    vehiclesToShow.forEach(vehicle => {
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
                    <img src="${vehicle.beforeImages[0]}" alt="Before repair" style="cursor: zoom-in;" onclick="event.stopPropagation(); openImageModal('${vehicle.beforeImages[0]}', ${JSON.stringify([...vehicle.beforeImages, ...vehicle.afterImages])});">
                </div>
                <div class="image-section after-section">
                    <div class="image-label">AFTER</div>
                    <img src="${vehicle.afterImages[0]}" alt="After repair" style="cursor: zoom-in;" onclick="event.stopPropagation(); openImageModal('${vehicle.afterImages[0]}', ${JSON.stringify([...vehicle.beforeImages, ...vehicle.afterImages])});">
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
                <div class="price-after">₦${vehicle.priceAfter.toLocaleString()}</div>
            </div>
            <div class="vehicle-actions">
                <button class="btn btn-primary btn-small" onclick="event.stopPropagation(); openVehicleModal(${vehicle.id})">
                    View Details
                </button>
                <button class="btn btn-secondary btn-small" onclick="event.stopPropagation(); contactAboutVehicle(${vehicle.id})">
                    Contact
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Open vehicle modal with details
function openVehicleModal(vehicleOrId) {
    const vehicle = typeof vehicleOrId === 'object' ? vehicleOrId : vehicles.find(v => v.id === vehicleOrId);
    if (!vehicle) return;
    
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
                        ${vehicle.beforeImages.map((img, index) => `<img src="${img}" alt="Before repair" onclick="event.stopPropagation(); console.log('Before image clicked:', '${img}'); try { openImageModal('${img}', ${JSON.stringify([...vehicle.beforeImages, ...vehicle.afterImages])}); } catch(e) { console.error('Error opening image modal:', e); alert('Error: ' + e.message); }">`).join('')}
                    </div>
                </div>
                <div class="gallery-section after-section">
                    <div class="section-header">
                        <h4><i class="fas fa-check-circle"></i> After Repair</h4>
                        <span class="image-count">${vehicle.afterImages.length} images</span>
                    </div>
                    <div class="gallery-images">
                        ${vehicle.afterImages.map((img, index) => `<img src="${img}" alt="After repair" onclick="event.stopPropagation(); console.log('After image clicked:', '${img}'); try { openImageModal('${img}', ${JSON.stringify([...vehicle.beforeImages, ...vehicle.afterImages])}); } catch(e) { console.error('Error opening image modal:', e); alert('Error: ' + e.message); }">`).join('')}
                    </div>
                </div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0;">
                <div>
                    <h4>Price</h4>
                    <div style="background: #f8f9fa; padding: 1rem; border-radius: 5px; text-align: center;">
                        <p style="font-size: 1.5rem; font-weight: bold; color: #27ae60;">₦${vehicle.priceAfter.toLocaleString()}</p>
                    </div>
                </div>
                <div>
                    <h4>Vehicle Information</h4>
                    <div style="background: #f8f9fa; padding: 1rem; border-radius: 5px;">
                        <p><strong>Year:</strong> ${vehicle.year}</p>
                        <p><strong>Mileage:</strong> ${vehicle.mileage.toLocaleString()} miles</p>
                        <p><strong>Condition:</strong> ${vehicle.condition}</p>
                        <p><strong>Make:</strong> ${vehicle.make}</p>
                        <p><strong>Model:</strong> ${vehicle.model}</p>
                        <p><strong>Custom Cleared:</strong> 
                            <span class="custom-cleared-status ${customClearedClass(vehicle.customCleared)}">${customClearedLabel(vehicle.customCleared) === 'Custom Cleared' ? 'Yes' : customClearedLabel(vehicle.customCleared)}</span>
                        </p>
                    </div>
                </div>
            </div>
            
            <div>
                <h4>Features</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
                    ${vehicle.features.map(feature => `<span style="background: #3498db; color: white; padding: 0.3rem 0.8rem; border-radius: 15px; font-size: 0.9rem;">${feature}</span>`).join('')}
                </div>
            </div>
            
            <div>
                <h4>Description</h4>
                <p>${vehicle.description}</p>
            </div>
            
            <div style="margin-top: 2rem; text-align: center;">
                <button class="btn btn-primary" onclick="contactAboutVehicle(${vehicle.id})" style="margin-right: 1rem;">
                    Contact About This Vehicle
                </button>
                <button class="btn btn-secondary" onclick="closeVehicleModal()">
                    Close
                </button>
            </div>
        </div>
    `;
    
    // Attach click handlers to thumbnails to ensure they open the full-screen image modal
    const allImages = [...vehicle.beforeImages, ...vehicle.afterImages];
    const beforeThumbs = modalContent.querySelectorAll('.before-section .gallery-images img');
    const afterThumbs = modalContent.querySelectorAll('.after-section .gallery-images img');
    beforeThumbs.forEach(imgEl => {
        imgEl.style.cursor = 'zoom-in';
        imgEl.addEventListener('click', function(e) {
            e.stopPropagation();
            openImageModal(this.getAttribute('src'), allImages);
        });
    });
    afterThumbs.forEach(imgEl => {
        imgEl.style.cursor = 'zoom-in';
        imgEl.addEventListener('click', function(e) {
            e.stopPropagation();
            openImageModal(this.getAttribute('src'), allImages);
        });
    });

    modal.style.display = 'block';
}

// Close vehicle modal
function closeVehicleModal() {
    modal.style.display = 'none';
}

// Test function for image modal
function testImageModal() {
    console.log('Testing image modal...');
    const testImages = [
        'https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    ];
    
    // First, let's try to show the modal with a simple approach
    const imageModalEl = document.getElementById('imageModal');
    if (imageModalEl) {
        imageModalEl.style.display = 'block';
        imageModalEl.style.backgroundColor = 'red'; // Make it very obvious
        imageModalEl.style.zIndex = '99999';
        console.log('Modal should now be visible with red background');
    } else {
        console.error('Image modal element not found!');
    }
    
    // Then try the full function
    setTimeout(() => {
        openImageModal(testImages[0], testImages);
    }, 1000);
}

// Image modal functions
function openImageModal(imageSrc, allImages) {
    try {
        console.log('Opening image modal:', imageSrc, allImages);
        
        // Get elements fresh each time to ensure they exist
        const imageModalEl = document.getElementById('imageModal');
        const modalImageEl = document.getElementById('modalImage');
        const totalImagesEl = document.getElementById('totalImages');
        const currentImageNumEl = document.getElementById('currentImageNum');
        
        console.log('Elements found:', {
            imageModalEl: !!imageModalEl,
            modalImageEl: !!modalImageEl,
            totalImagesEl: !!totalImagesEl,
            currentImageNumEl: !!currentImageNumEl
        });
        
        if (!imageModalEl) {
            throw new Error('Image modal element not found');
        }
        
        if (!modalImageEl) {
            throw new Error('Modal image element not found');
        }
        
        // Set up the image data
        currentImageArray = allImages || [];
        currentImageIndex = currentImageArray.indexOf(imageSrc);
        
        if (currentImageIndex === -1) {
            currentImageIndex = 0;
        }
        
        // Set the image source
        modalImageEl.src = imageSrc;
        
        // Update counters
        if (totalImagesEl) {
            totalImagesEl.textContent = currentImageArray.length;
        }
        if (currentImageNumEl) {
            currentImageNumEl.textContent = currentImageIndex + 1;
        }
        
        // Show the modal
        imageModalEl.style.display = 'block';
        imageModalEl.style.zIndex = '99999';
        document.body.style.overflow = 'hidden';
        
        console.log('Image modal should now be visible');
        console.log('Modal display style:', imageModalEl.style.display);
        console.log('Modal computed style:', window.getComputedStyle(imageModalEl).display);
        
        // Update navigation buttons
        updateNavigationButtons();
        
    } catch (error) {
        console.error('Error in openImageModal:', error);
        alert('Error opening image modal: ' + error.message);
    }
}

function closeImageModal() {
    const imageModalEl = document.getElementById('imageModal');
    if (imageModalEl) {
        imageModalEl.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function showNextImage() {
    if (currentImageIndex < currentImageArray.length - 1) {
        currentImageIndex++;
    } else {
        currentImageIndex = 0; // Loop to first image
    }
    updateImageDisplay();
}

function showPreviousImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
    } else {
        currentImageIndex = currentImageArray.length - 1; // Loop to last image
    }
    updateImageDisplay();
}

function updateImageDisplay() {
    const modalImageEl = document.getElementById('modalImage');
    const currentImageNumEl = document.getElementById('currentImageNum');
    
    if (modalImageEl) {
        modalImageEl.src = currentImageArray[currentImageIndex];
    }
    if (currentImageNumEl) {
        currentImageNumEl.textContent = currentImageIndex + 1;
    }
    updateNavigationButtons();
}

function updateNavigationButtons() {
    // Enable/disable navigation buttons based on current position
    const prevImageBtnEl = document.getElementById('prevImage');
    const nextImageBtnEl = document.getElementById('nextImage');
    
    if (prevImageBtnEl) {
        prevImageBtnEl.style.opacity = currentImageArray.length > 1 ? '1' : '0.5';
    }
    if (nextImageBtnEl) {
        nextImageBtnEl.style.opacity = currentImageArray.length > 1 ? '1' : '0.5';
    }
}

// Contact about specific vehicle
function contactAboutVehicle(vehicleId) {
    const vehicle = vehicles.find(v => v.id === vehicleId);
    if (vehicle) {
        const message = `I'm interested in the ${vehicle.year} ${vehicle.make} ${vehicle.model}. Please contact me with more information.`;
        document.getElementById('message').value = message;
        document.getElementById('service').value = 'vehicle-inquiry';
        
        // Scroll to contact form
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        
        // Close modal if open
        closeVehicleModal();
    }
}

// Filter and search functionality
function filterVehicles() {
    const searchTerm = searchInput.value.toLowerCase();
    const priceRange = priceFilter.value;
    const makeFilterValue = makeFilter.value;
    
    let filteredVehicles = vehicles.filter(vehicle => {
        const matchesSearch = vehicle.make.toLowerCase().includes(searchTerm) ||
                            vehicle.model.toLowerCase().includes(searchTerm) ||
                            vehicle.year.toString().includes(searchTerm);
        
        const matchesMake = !makeFilterValue || vehicle.make === makeFilterValue;
        
        let matchesPrice = true;
        if (priceRange) {
            let min = 0;
            let max = Infinity;
            if (priceRange.endsWith('+')) {
                min = parseInt(priceRange, 10) || 0;
            } else {
                const parts = priceRange.split('-');
                min = parseInt(parts[0], 10) || 0;
                max = parseInt(parts[1], 10) || Infinity;
            }
            matchesPrice = vehicle.priceAfter >= min && vehicle.priceAfter <= max;
        }
        
        return matchesSearch && matchesMake && matchesPrice;
    });
    
    displayVehicles(filteredVehicles);
}

// Setup event listeners
function setupEventListeners() {
    // Search and filter
    searchInput.addEventListener('input', filterVehicles);
    priceFilter.addEventListener('change', filterVehicles);
    makeFilter.addEventListener('change', filterVehicles);
    
    // Modal
    closeModal.addEventListener('click', closeVehicleModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeVehicleModal();
        }
    });
    
    // Image modal functionality
    const imageCloseEl = document.querySelector('.image-close');
    const prevImageBtnEl = document.getElementById('prevImage');
    const nextImageBtnEl = document.getElementById('nextImage');
    const modalImageEl = document.getElementById('modalImage');
    
    if (imageCloseEl) imageCloseEl.addEventListener('click', closeImageModal);
    if (prevImageBtnEl) prevImageBtnEl.addEventListener('click', showPreviousImage);
    if (nextImageBtnEl) nextImageBtnEl.addEventListener('click', showNextImage);
    if (modalImageEl) modalImageEl.addEventListener('click', showNextImage);
    
    // Close image modal when clicking outside
    window.addEventListener('click', (e) => {
        const imageModalEl = document.getElementById('imageModal');
        if (imageModalEl && e.target === imageModalEl) {
            closeImageModal();
        }
    });
    
    // Keyboard navigation for images
    document.addEventListener('keydown', (e) => {
        const imageModalEl = document.getElementById('imageModal');
        if (imageModalEl && imageModalEl.style.display === 'block') {
            if (e.key === 'ArrowLeft') {
                showPreviousImage();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            } else if (e.key === 'Escape') {
                closeImageModal();
            }
        }
    });
    
    // Mobile navigation
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Contact form
    contactForm.addEventListener('submit', handleContactForm);
}

// Handle contact form submission
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        service: formData.get('service'),
        message: formData.get('message')
    };
    
    // Simulate form submission
    alert('Thank you for your message! We will contact you soon.');
    contactForm.reset();
}



// Open image modal (for larger image viewing)


// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add scroll effect to navbar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = '#fff';
            navbar.style.backdropFilter = 'none';
        }
    });
    
    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});
