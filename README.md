# GURU ERP - Navigation System Demo

A modern, responsive 2-tier navigation system designed for the GURU ERP platform. This demo showcases a context-aware sidebar with module switching capabilities, featuring premium aesthetics with glassmorphism effects and smooth animations.

![GURU ERP Logo](https://img.shields.io/badge/GURU-ERP-6366f1?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Modules](#modules)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Browser Support](#browser-support)
- [Integration](#integration)
- [License](#license)

## 🎯 Overview

This navigation system is a standalone demo of the GURU ERP's 2-tier navigation architecture. It provides an intuitive and visually stunning interface for navigating between different ERP modules including Finance, Procurement, Sales, Inventory, HRM, and Admin.

### Key Highlights

- **Modern Design** - Glassmorphism effects with smooth gradients
- **Context-Aware** - Sidebar adapts to selected module
- **Responsive** - Mobile-friendly with collapsible sidebar
- **Interactive** - Real-time search and filtering
- **Performance** - Optimized animations and transitions

## ✨ Features

### 🎨 Visual Design

- **Glassmorphism Effects** - Modern frosted glass aesthetic with backdrop blur
- **Gradient Accents** - Beautiful color transitions using indigo to purple gradients
- **Micro-animations** - Smooth hover effects and transitions
- **Premium Typography** - Google Fonts (Inter) for crisp, modern text

### 🧭 Navigation

- **App Switcher** - Top-level navigation bar for module selection
- **Context Sidebar** - Dynamic sidebar that updates based on active module
- **Search Functionality** - Real-time filtering of navigation items
- **Collapsible Sidebar** - Toggle button for expanded/collapsed states
- **Persistent State** - Remembers sidebar state using localStorage

### 📱 Responsive Design

- Adaptive layout for mobile, tablet, and desktop
- Touch-friendly interactions
- Optimized for screens 320px and above

## 📂 Project Structure

```
guru-erp-demo/
├── navigation.html          # Main HTML file
├── assets/
│   ├── css/
│   │   └── navigation.css   # Styling and design system
│   └── js/
│       └── navigation.js    # Navigation logic and data
└── README.md                # This file
```

## 🏢 Modules

The navigation system supports 6 main ERP modules:

### 1. **Finance & Accounting**
- Core Finance (Collection, Payment, Voucher Management)
- Cash & Bank Operations
- Finance Reports (Chart of Accounts, Trial Balance, etc.)

### 2. **Procurement & Purchasing**
- Purchase Management (Orders, Returns, Verifications)
- Supplier Master Data

### 3. **Sales & CRM**
- Sales Operations (Orders, Delivery, Invoicing)
- Customer/CRM Management
- Sales Reports and Analytics

### 4. **Inventory & Manufacturing**
- Product Master Data
- Stock & Warehousing
- Inventory Reports

### 5. **Human Resource Management (HRM)**
- Employee Master Data
- Attendance & Leave Management
- Payroll & Salary Processing

### 6. **Admin & Settings**
- System Configuration
- User & Role Management
- Company Settings

## 🚀 Installation

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- No server or build tools required for demo

### Steps

1. **Clone or download** this repository:
   ```bash
   git clone <repository-url>
   ```

2. **Navigate** to the project directory:
   ```bash
   cd guru-erp-demo
   ```

3. **Open** `navigation.html` in your browser:
   - Double-click the file, or
   - Right-click and select "Open with" → Your browser, or
   - Use a local server (optional):
     ```bash
     python -m http.server 8000
     # or
     npx serve
     ```

4. **View** the demo at `http://localhost:8000` (if using local server)

## 💻 Usage

### Basic Navigation

1. **Select a Module** - Click any module button in the top navigation bar
2. **Browse Features** - View the context-specific sidebar for available features
3. **Search** - Use the search box to filter navigation items
4. **Toggle Sidebar** - Click the hamburger menu (☰) to collapse/expand the sidebar

### Module Switching

- Click on any module button (Finance, Procurement, Sales, etc.)
- The sidebar automatically updates with relevant navigation items
- Active module is highlighted with a gradient background

### Search Functionality

- Type in the search box to filter navigation items
- Search is case-insensitive and searches across all item names
- Clear the search box to show all items

## 🎨 Customization

### Color Scheme

Edit the CSS variables in `assets/css/navigation.css`:

```css
:root {
    --accent-primary: #6366F1;      /* Indigo */
    --accent-secondary: #8B5CF6;    /* Purple */
    --text-primary: #0F172A;        /* Dark slate */
    --bg-primary: #FFFFFF;          /* White */
    /* ... more variables */
}
```

### Adding New Modules

In `assets/js/navigation.js`, add a new module to the `navigationData` object:

```javascript
const navigationData = {
    // ... existing modules
    yourModule: {
        title: 'Your Module Name',
        sections: [
            {
                title: 'Section Name',
                items: [
                    { name: 'Feature Name', path: 'path/to/feature.php' }
                ]
            }
        ]
    }
};
```

Then add the corresponding button in `navigation.html`:

```html
<button class="module-button" data-module="yourModule" id="moduleYourModule">
    <svg><!-- icon --></svg>
    <span>Your Module</span>
</button>
```

### Modifying Navigation Items

Edit the `navigationData` object in `assets/js/navigation.js` to add, remove, or modify navigation items for any module.

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | 90+     |
| Firefox | 88+     |
| Safari  | 14+     |
| Edge    | 90+     |

**Note:** Older browsers may not support glassmorphism effects (backdrop-filter).

## 🔌 Integration

This demo is designed to be integrated into the main GURU ERP PHP application. To integrate:

### Step 1: Copy Assets

Copy the `assets/` directory to your GURU ERP project root.

### Step 2: Include in PHP Template

In your main panel/template file (e.g., `panel.php`):

```php
<!DOCTYPE html>
<html>
<head>
    <!-- ... other head content ... -->
    <link rel="stylesheet" href="assets/css/navigation.css">
</head>
<body>
    <!-- App Switcher -->
    <?php include 'components/app-switcher.php'; ?>
    
    <!-- Main Layout -->
    <div class="main-layout">
        <?php include 'components/sidebar.php'; ?>
        <main class="main-content">
            <!-- Your page content -->
        </main>
    </div>
    
    <script src="assets/js/navigation.js"></script>
</body>
</html>
```

### Step 3: Dynamic Data Integration

Replace the hardcoded `navigationData` with PHP-generated JSON from your database:

```javascript
// In navigation.js, replace the navigationData object with:
const navigationData = <?php echo json_encode($menuData); ?>;
```

### Step 4: User Permissions

Filter navigation items based on user permissions in your PHP backend before outputting the JSON.

## 📝 Technical Details

### Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties, flexbox, grid
- **Vanilla JavaScript** - No frameworks or libraries
- **Google Fonts** - Inter font family

### Key Features Implementation

- **Glassmorphism**: `backdrop-filter: blur()` and semi-transparent backgrounds
- **Animations**: CSS transitions and keyframe animations
- **State Management**: localStorage for sidebar collapse state
- **Search**: Real-time filtering using JavaScript
- **Responsive**: CSS media queries and flexible layouts

## 🤝 Contributing

This is a demo project for GURU ERP. For the main project contributions, please refer to the main GURU ERP repository.

## 📄 License

This project is part of the GURU ERP system. All rights reserved.

---

<div align="center">
    <p>Built with ❤️ for GURU ERP</p>
    <p>© 2024 GURU ERP. All rights reserved.</p>
</div>
