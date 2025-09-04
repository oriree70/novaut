# Novato Autos - Auto Sales Website

A modern, responsive website for Novato Autos featuring vehicle listings with before/after repair documentation and transparent pricing.

## Features

### Customer-Facing Website (`index.html`)
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Vehicle Listings**: Display vehicles with before/after photos and pricing
- **Search & Filter**: Find vehicles by make, model, year, and price range
- **Detailed Vehicle Pages**: Modal popups with comprehensive vehicle information
- **Contact Form**: Easy way for customers to inquire about vehicles
- **Professional Design**: Modern UI with smooth animations and transitions

### Admin Panel (`admin.html`)
- **Dashboard**: Overview of inventory, total value, and new messages
- **Vehicle Management**: Add, edit, and delete vehicle listings
- **Photo Upload**: Upload before/after repair photos for each vehicle
- **Message Management**: View and respond to customer inquiries
- **Data Persistence**: All data is saved locally using localStorage

## Key Features for Auto Sales

### Before/After Documentation
- **Transparent Pricing**: Shows original price, repair costs, and final price
- **Visual Documentation**: Before and after photos for each vehicle
- **Savings Calculator**: Automatically calculates and displays savings percentage
- **Repair History**: Detailed information about vehicle condition and repairs

### Professional Presentation
- **High-Quality Images**: Photo galleries for each vehicle
- **Detailed Specifications**: Mileage, condition, features, and more
- **Contact Integration**: Direct contact forms for vehicle inquiries
- **Mobile-Friendly**: Optimized for all device types

## Getting Started

### 1. Open the Website
Simply open `index.html` in your web browser to view the customer-facing website.

### 2. Access Admin Panel
Open `admin.html` to access the admin panel for managing vehicles and messages.

### 3. Add Your First Vehicle
1. Go to the admin panel
2. Click "Add New Vehicle" or navigate to the "Add Vehicle" section
3. Fill in all vehicle details
4. Upload before and after photos
5. Save the vehicle

### 4. Customize Content
- Update business information in the contact section
- Modify the hero section text
- Add your own vehicle photos
- Customize colors and branding in the CSS files

## File Structure

```
novatoautos/
├── index.html          # Main customer website
├── admin.html          # Admin panel for managing vehicles
├── styles.css          # Main website styles
├── admin-styles.css    # Admin panel styles
├── script.js           # Main website functionality
├── admin-script.js     # Admin panel functionality
└── README.md           # This file
```

## Customization

### Adding Your Business Information
Edit the contact section in `index.html`:
- Update address, phone, email
- Modify business hours
- Add your social media links

### Changing Colors and Branding
Edit `styles.css` to customize:
- Color scheme (search for color values like `#3498db`)
- Fonts and typography
- Logo and branding elements

### Adding More Vehicle Makes
In `admin.html`, add more options to the make dropdown:
```html
<option value="YourMake">Your Make</option>
```

## Technical Details

### Data Storage
- Uses browser localStorage for data persistence
- No server required - works entirely in the browser
- Data persists between sessions

### Image Handling
- Currently uses placeholder images from Unsplash
- In production, you would upload images to a server
- Supports multiple images per vehicle

### Browser Compatibility
- Works in all modern browsers
- Responsive design for all screen sizes
- No external dependencies except Font Awesome icons

## Production Deployment

### For a Live Website
1. **Web Hosting**: Upload files to any web hosting service
2. **Image Storage**: Set up proper image upload and storage
3. **Database**: Consider using a real database instead of localStorage
4. **Backend**: Add server-side functionality for form handling
5. **SSL Certificate**: Ensure secure HTTPS connection

### Recommended Hosting Services
- **Netlify**: Easy deployment with form handling
- **Vercel**: Great for static sites
- **GitHub Pages**: Free hosting for public repositories
- **Traditional Web Hosting**: Any standard web hosting service

## Support and Maintenance

### Regular Updates
- Add new vehicles through the admin panel
- Respond to customer messages
- Update pricing and vehicle information
- Backup data regularly (export function available in admin)

### Adding Features
The codebase is well-structured and easy to extend:
- Add new vehicle fields in the forms
- Implement additional filtering options
- Add more detailed vehicle specifications
- Integrate with external services (maps, financing, etc.)

## Contact

For questions about this website or customization needs, please refer to the contact information in the website or reach out to the developer.

---

**Novato Autos** - Quality Used Cars & Expert Auto Repairs

