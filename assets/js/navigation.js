/**
 * GURU ERP - Navigation System JavaScript
 * Handles module switching, navigation rendering, and user interactions
 */

// ============================================
// Navigation Data Structure
// ============================================

const navigationData = {
    finance: {
        title: 'Finance & Accounting',
        sections: [
            {
                title: 'Core Finance',
                items: [
                    { name: 'All Collection', path: 'Account/Collection/allCollection.php' },
                    { name: 'All Payment', path: 'Account/payment/allPayment.php' },
                    { name: 'All Collection - Azizia', path: 'Account/Collection/allCollection_for_Aziziya.php' },
                    { name: 'Loan Collection', path: 'Account/Collection/LoanCollection.php' }
                ]
            },
            {
                title: 'Journals & Vouchers',
                items: [
                    { name: 'Journal Entry', path: 'Account/Voucher/voucherEntry.php' },
                    { name: 'All Vouchers', path: 'Account/Voucher/voucher_list.php' }
                ]
            },
            {
                title: 'Verification',
                items: [
                    { name: 'Voucher Verification', path: 'Account/Voucher/voucher_approve.php' },
                    { name: 'Cheque Encashment Verification', path: 'Account/verification/chequeEncashment.php' },
                    { name: 'Cash & Bank Transaction Verification', path: 'Account/bankToCash/bankToCashVerification.php' },
                    { name: 'Digital Cash Verification (bKash)', path: 'Account/verification/bkashVerification.php' }
                ]
            },
            {
                title: 'Cash & Bank',
                items: [
                    { name: 'Balance Transfer', path: 'Account/bankToCash/bankToCash.php' },
                    { name: 'Bank Charge Entry', path: 'Account/bankCharge/bankChargeEntry.php' },
                    { name: 'Bank Charge Entry Verification', path: 'Account/bankCharge/bankChargeEntryVerification.php' },
                    { name: 'Drawer Expense', path: 'Account/pettyCash/expense_drawer.php' },
                    { name: 'Petty Cash Book', path: 'Account/pettyCash/PettyCashBook.php' }
                ]
            },
            {
                title: 'Tax & Compliance',
                items: [
                    { name: 'ZATCA Info', path: 'zatca/zatca-main.php' },
                    { name: 'VAT Report', path: 'report/inventory/unit/vat.php' },
                    { name: 'VAT Summary', path: 'report/inventory/unit/vat_summary.php' }
                ]
            },
            {
                title: 'Finance Reports',
                items: [
                    { name: 'Chart Of Account (Report)', path: 'report/Account/rptChartOfAccount.php' },
                    { name: 'Account Ledger', path: 'report/Account/accountLedger.php' },
                    { name: 'Trial Balance', path: 'report/Account/tb.php' },
                    { name: 'Balance Sheet', path: 'report/Account/balanceSheet.php' },
                    { name: 'Income Statement', path: 'report/Account/income_statement.php' },
                    { name: 'PAYMENTS & RECEIPTS LEDGER', path: 'report/Account/consolidatedRPStatement.php' },
                    { name: 'Bank Book', path: 'report/Account/bank_book.php' },
                    { name: 'Cash Book', path: 'report/Account/cash_book.php' },
                    { name: 'Bank Book For Aziziya', path: 'report/Account/bank_book_for_Aziziya.php' },
                    { name: 'Cash Book For Aziziya', path: 'report/Account/cash_book_for_Aziziya.php' },
                    { name: 'COGS Report', path: 'report/inventory/unit/cogs_report.php' },
                    { name: 'COGS INTERNAL', path: 'report/inventory/unit/cogs.php' }
                ]
            }
        ]
    },
    
    procurement: {
        title: 'Procurement & Purchasing',
        sections: [
            {
                title: 'Purchase Management',
                items: [
                    { name: 'Purchase Order', path: 'Inventory/purchase/purchaseInfo.php' },
                    { name: 'Purchase Return', path: 'Inventory/purchase/purchaseReturnInfo.php' },
                    { name: 'Purchase Payment', path: 'Inventory/purchase/payment.php' },
                    { name: 'Purchase Costing', path: 'Inventory/purchase/purchaseCosting.php' },
                    { name: 'PO for Fixed Assets', path: 'Inventory/purchase/purchase_asset_Info.php' }
                ]
            },
            {
                title: 'Purchase Verification',
                items: [
                    { name: 'Purchase Return Verification', path: 'Inventory/purchase/verifications/PurchaseReturnVerification.php' },
                    { name: 'Receive Purchased Goods', path: 'Inventory/purchase/verifications/PurchaseVerification.php' },
                    { name: 'Bill Slips Verification', path: 'Inventory/purchase/verifications/BillSlips.php' }
                ]
            },
            {
                title: 'Supplier Master',
                items: [
                    { name: 'Supplier Info', path: 'Inventory/purchase/supplierInfo.php' },
                    { name: 'Supplier Explorer', path: 'Inventory/purchase/supplier_explorer.php' },
                    { name: 'Supplier Ledger (Report)', path: 'report/inventory/supplier/supplierLedger.php' },
                    { name: 'All Supplier Summary (Report)', path: 'report/inventory/supplier/all_supplier_summary.php' }
                ]
            },
            {
                title: 'Procurement Master Utilities',
                items: [
                    { name: 'Payment Terms', path: 'Inventory/purchase/payment_term.php' },
                    { name: 'Shipping Terms', path: 'Inventory/purchase/shiping_term.php' },
                    { name: 'Delivery Mode', path: 'Inventory/purchase/delivery_mode.php' }
                ]
            }
        ]
    },
    
    sales: {
        title: 'Sales & CRM',
        sections: [
            {
                title: 'Sales Operations',
                items: [
                    { name: 'Sales Order', path: 'Inventory/sales/salesInfoForUser.php' },
                    { name: 'Sales Order (Showroom)', path: 'Inventory/sales/salesInfoForShowroom.php' },
                    { name: 'Sales Return', path: 'Inventory/sales/salesReturnInfo.php' },
                    { name: 'Sales Return - Azizia', path: 'Inventory/sales/salesReturnInfoForShowroom.php' },
                    { name: 'Sales Collection', path: 'Inventory/sales/collection.php' },
                    { name: 'Showroom Collection', path: 'Inventory/sales/collectionShowRoom.php' },
                    { name: 'Item Usage', path: 'Inventory/sales/Item_usage.php' }
                ]
            },
            {
                title: 'Sales Verification',
                items: [
                    { name: 'Proposal Verification', path: 'Inventory/sales/verifications/proposal_verification.php' },
                    { name: 'Delivery Verification', path: 'Inventory/sales/verifications/sales_deliver_verification.php' },
                    { name: 'Proposal verification for Aziziya', path: 'Inventory/sales/verifications/proposal_verification_for_aziziya.php' },
                    { name: 'Sales deliver verification for Aziziya', path: 'Inventory/sales/verifications/sales_deliver_verification_for_aziziya.php' }
                ]
            },
            {
                title: 'Customer / CRM',
                items: [
                    { name: 'Customer Info', path: 'Inventory/sales/customerInfo.php' },
                    { name: 'Customer Settings', path: 'settings/Customer/customerSetting.php' },
                    { name: 'Customer Shipment Info', path: 'settings/Customer/shippingInfo.php' },
                    { name: 'Customer Type', path: 'settings/Customer/customer_type.php' },
                    { name: 'Additional Limit Request', path: 'settings/Customer/additional_limit_requesrt.php' },
                    { name: 'Additional Limit Verification', path: 'settings/Customer/ad_limit_verification.php' },
                    { name: 'Customer Explorer', path: 'Inventory/sales/customer_explorer.php' },
                    { name: 'Customer Ledger (Report)', path: 'report/inventory/customer/customerLedger.php' },
                    { name: 'All Customer Summary (Report)', path: 'report/inventory/customer/all_customer_summary.php' },
                    { name: 'Customer Info Report', path: 'report/inventory/customer/customerReport.php' },
                    { name: 'Agent Info', path: 'settings/agent/agentInfo.php' },
                    { name: 'Agent Commission Report', path: 'report/agent/agentWiseCommissionReport.php' }
                ]
            },
            {
                title: 'Sales Reports',
                items: [
                    { name: 'Sales Report', path: 'Inventory/product/sales_report.php' },
                    { name: 'Sales Profit Report', path: 'report/inventory/unit/sales_profit_report.php' },
                    { name: 'Sales Order Report', path: 'report/inventory/unit/sales_order_report.php' },
                    { name: 'Sales Explorer', path: 'Inventory/sales/salesExplorer.php' },
                    { name: 'Collection Explorer', path: 'report/inventory/sales/collectionExplorer.php' }
                ]
            }
        ]
    },
    
    inventory: {
        title: 'Inventory & Manufacturing',
        sections: [
            {
                title: 'Product Master',
                items: [
                    { name: 'Product Info', path: 'Inventory/product/productInfo.php' },
                    { name: 'Product Unit Settings', path: 'settings/Inventory/product_unit_entry.php' },
                    { name: 'Product Category', path: 'Inventory/product/product_category.php' },
                    { name: 'Mold & Spare Parts Info', path: 'Inventory/product/mold_spare_parts_info.php' },
                    { name: 'Product Explorer', path: 'Inventory/product/product_explorer.php' },
                    { name: 'Item Master', path: 'Inventory/product/Item_Master.php' },
                    { name: 'Product Ledger (invoice wise)', path: 'Inventory/product/productLedger_invoiceWise.php' },
                    { name: 'Fixed Assets', path: 'Inventory/product/fixed_asset.php' },
                    { name: 'Fixed Assets NBV Report', path: 'Inventory/product/FA_NBV_Report.php' },
                    { name: 'Mold & Spare Parts Report', path: 'report/inventory/stock/mold_spare_parts_report.php' }
                ]
            },
            {
                title: 'Stock & Warehousing',
                items: [
                    { name: 'Stock Transfer (In-Out)', path: 'Inventory/stock/stockTransferForAdmin.php' },
                    { name: 'Opening Stock', path: 'Inventory/stock/openingStock.php' },
                    { name: 'Product Stock Report', path: 'Inventory/stock/productStockReport.php' },
                    { name: 'Sales Center Stock', path: 'Inventory/stock/salesCenterStock.php' },
                    { name: 'Transfer Report', path: 'report/inventory/stock/tranfer_report.php' },
                    { name: 'Stock Tree', path: 'report/inventory/stock/stockTree.php' },
                    { name: 'All Product Summary', path: 'report/inventory/stock/all_Product_summary.php' }
                ]
            },
            {
                title: 'Production / Manufacturing',
                items: [
                    { name: 'Production Info', path: 'Inventory/production/productionInfo.php' },
                    { name: 'Factory Verification', path: 'Inventory/production/verifications/factory_verification.php' },
                    { name: 'Production Explorer', path: 'Inventory/production/production_explorer.php' },
                    { name: 'Machine Info (Master)', path: 'settings/production/productionMachineInfo.php' }
                ]
            },
            {
                title: 'Purchase-Inventory Crosslinks',
                items: [
                    { name: 'Purchase Explorer', path: 'Inventory/purchase/purchaseExplorer.php' },
                    { name: 'Purchase Costing', path: 'Inventory/purchase/purchaseCosting.php' }
                ]
            }
        ]
    },
    
    hrm: {
        title: 'Human Resources (HRM)',
        sections: [
            {
                title: 'Employee Master',
                items: [
                    { name: 'Employee Information', path: 'settings/employeeinfo/employee_info.php' },
                    { name: 'Employee Settings / Policies', path: 'settings/payroll/employee_policy.php' },
                    { name: 'Department', path: 'settings/departmentinfo/departmentInfo.php' },
                    { name: 'Designation', path: 'settings/designationinfo/designation.php' },
                    { name: 'Employee Ledger', path: 'settings/employeeinfo/employeeLedgerDetails.php' },
                    { name: 'Employee Loan', path: 'settings/employeeinfo/employeeLoanDetails.php' },
                    { name: 'Employee Info Report', path: 'settings/attendenceinfo/employee_report.php' },
                    { name: 'Employee Official Info Report', path: 'settings/attendenceinfo/employee_official_info_report.php' }
                ]
            },
            {
                title: 'Attendance',
                items: [
                    { name: 'Attendance Page', path: 'settings/attendenceinfo/attandence_edit.php' },
                    { name: 'Manual Attendance', path: 'settings/attendenceinfo/manual_attandence.php' },
                    { name: 'Machine Attendance', path: 'settings/attendenceinfo/attendanceUtility8.php' },
                    { name: 'Attendance Policy', path: 'settings/attendenceinfo/attand_policy.php' },
                    { name: 'Shift', path: 'settings/attendenceinfo/employee_shift.php' },
                    { name: 'Shift Schedule', path: 'settings/attendenceinfo/employee_attendance_schedule.php' },
                    { name: 'Auto Attendance', path: 'settings/attendenceinfo/auto_attendances.php' },
                    { name: 'Daily Attendance Report', path: 'settings/attendenceinfo/attandence_report_daywise.php' },
                    { name: 'Attendance Report', path: 'settings/attendenceinfo/attandence_report.php' }
                ]
            },
            {
                title: 'Payroll',
                items: [
                    { name: 'Payroll Type', path: 'settings/payroll/payroll_type.php' },
                    { name: 'Salary & Bonus Generate', path: 'hrm/payroll/generate_salary_bonus.php' },
                    { name: 'Salary Payment', path: 'hrm/payroll/salary_payment_all.php' },
                    { name: 'Bonus Generate', path: 'hrm/payroll/generate_bonus.php' },
                    { name: 'Bonus Payment', path: 'hrm/payroll/bonus_payment_all.php' },
                    { name: 'Salary Statement', path: 'hrm/payroll/salary_statement.php' },
                    { name: 'Salary & Bonus Statement (Report)', path: 'hrm/payroll/salary_bonus_statement.php' },
                    { name: 'Salary Payment Report', path: 'hrm/payroll/salary_payment_report.php' },
                    { name: 'Bonus Payment Report', path: 'hrm/payroll/bonus_payment_report.php' },
                    { name: 'Bank Salary Report', path: 'report/employee/Bank_Salary.php' },
                    { name: 'Cash Salary Report', path: 'report/employee/cash_salary.php' },
                    { name: 'Salary Summary', path: 'report/employee/Salary_Summary.php' },
                    { name: 'Employee Salary List', path: 'report/employee/employee_Salary.php' },
                    { name: 'Pay Slip Report', path: 'hrm/payroll/pay_slip_report.php' },
                    { name: 'Employee Deduction', path: 'settings/payroll/deduction.php' },
                    { name: 'Bonus Policy Config', path: 'hrm/payroll/employee_payment_bonus_config.php' }
                ]
            },
            {
                title: 'Advance Salary / Loans',
                items: [
                    { name: 'Advance Salary Requisition', path: 'hrm/advance_salary/advance_salary.php' },
                    { name: 'Advance Salary Verification', path: 'hrm/advance_salary/advanceSalaryVerification.php' },
                    { name: 'Advance Salary Payment List', path: 'hrm/advance_salary/advanceSalaryForPaymentList.php' },
                    { name: 'Loan Report', path: 'hrm/advance_salary/advanceSalaryReport.php' }
                ]
            },
            {
                title: 'Leave Management',
                items: [
                    { name: 'Leave Request', path: 'hrm/leave/leave_request.php' },
                    { name: 'Leave Request (admin)', path: 'hrm/leave/leave_request_byadmin.php' },
                    { name: 'Leave Approve Request', path: 'hrm/leave/all_request.php' },
                    { name: 'Leave Status', path: 'hrm/leave/my_leave.php' },
                    { name: 'Leave Statement', path: 'hrm/leave/my_leave_all.php' },
                    { name: 'Leave Type', path: 'settings/leave/leavetypeInfo.php' },
                    { name: 'Leave Policy', path: 'settings/leave/leave_policy.php' },
                    { name: 'Leave Approval Panel', path: 'settings/leave/panel_member.php' },
                    { name: 'Leave Report', path: 'hrm/leave/leave_report.php' }
                ]
            },
            {
                title: 'HR Utilities',
                items: [
                    { name: 'Holiday', path: 'settings/holyday/nonTradeDate.php' },
                    { name: 'Schedule Report', path: 'hrm/advance_salary/reschedule_repot.php' }
                ]
            }
        ]
    },
    
    admin: {
        title: 'System Administration',
        sections: [
            {
                title: 'System Settings',
                items: [
                    { name: 'Global Option', path: 'settings/usrAdmin/globalInfo.php' },
                    { name: 'Unit / Company Info', path: 'settings/company_info/company_info.php' },
                    { name: 'Currency Settings', path: 'settings/currency/convertor.php' },
                    { name: 'Language Resources', path: 'settings/language/language_report.php' }
                ]
            },
            {
                title: 'User & Security',
                items: [
                    { name: 'Create User', path: 'settings/usrAdmin/createUser.php' },
                    { name: 'Site Administration (Menu Builder)', path: 'settings/usrAdmin/linkManagement.php' },
                    { name: 'Site Permission', path: 'settings/usrAdmin/userPermission.php' },
                    { name: 'Audit Trail', path: 't.php' }
                ]
            },
            {
                title: 'Location / Region Master',
                items: [
                    { name: 'Country', path: 'settings/location/country.php' },
                    { name: 'State / Division', path: 'settings/location/division.php' },
                    { name: 'City / District', path: 'settings/location/district.php' },
                    { name: 'Area', path: 'settings/location/area.php' }
                ]
            },
            {
                title: 'Payment & Bank Master',
                items: [
                    { name: 'Bank Info', path: 'settings/bank_branch/bankInfo.php' },
                    { name: 'Pay Mode Info', path: 'settings/payment/payment_type.php' },
                    { name: 'Pay Mode Details', path: 'settings/payment/payment_method.php' }
                ]
            },
            {
                title: 'Chart of Accounts',
                items: [
                    { name: 'Voucher Type', path: 'settings/Account/voucherType.php' },
                    { name: 'Chart Of Account', path: 'settings/Account/chartOfAccount.php' },
                    { name: 'Chart Of Account Tree', path: 'settings/Account/chartOfAccountTree.php' }
                ]
            }
        ]
    }
};

// ============================================
// State Management
// ============================================

let currentModule = 'finance';
let currentActiveLink = null;

// ============================================
// DOM Elements
// ============================================

const sidebarTitle = document.getElementById('sidebarTitle');
const sidebarNav = document.getElementById('sidebarNav');
const moduleButtons = document.querySelectorAll('.module-button');
const sidebarToggle = document.getElementById('sidebarToggle');
const contextSidebar = document.getElementById('contextSidebar');
const searchInput = document.getElementById('searchInput');
const mainContent = document.getElementById('mainContent');

// ============================================
// Core Functions
// ============================================

/**
 * Switch to a different module and update the sidebar
 */
function switchModule(moduleName) {
    currentModule = moduleName;
    
    // Update active module button
    moduleButtons.forEach(btn => {
        if (btn.dataset.module === moduleName) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Update sidebar
    renderNavigation(moduleName);
    
    // Save to localStorage
    localStorage.setItem('guru-erp-module', moduleName);
    
    // Clear search
    searchInput.value = '';
}

/**
 * Render navigation items for the selected module
 */
function renderNavigation(moduleName) {
    const moduleData = navigationData[moduleName];
    
    if (!moduleData) {
        console.error('Module not found:', moduleName);
        return;
    }
    
    // Update sidebar title
    sidebarTitle.textContent = moduleData.title;
    
    // Clear existing navigation
    sidebarNav.innerHTML = '';
    
    // Render each section
    moduleData.sections.forEach(section => {
        const sectionElement = createNavSection(section);
        sidebarNav.appendChild(sectionElement);
    });
}

/**
 * Create a navigation section element
 */
function createNavSection(section) {
    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'nav-section';
    
    const titleDiv = document.createElement('div');
    titleDiv.className = 'nav-section-title';
    titleDiv.textContent = section.title;
    
    const itemsDiv = document.createElement('div');
    itemsDiv.className = 'nav-items';
    
    section.items.forEach(item => {
        const link = createNavItem(item);
        itemsDiv.appendChild(link);
    });
    
    sectionDiv.appendChild(titleDiv);
    sectionDiv.appendChild(itemsDiv);
    
    return sectionDiv;
}

/**
 * Create a navigation item link
 */
function createNavItem(item) {
    const link = document.createElement('a');
    link.href = item.path;
    link.className = 'nav-item';
    link.textContent = item.name;
    link.dataset.path = item.path;
    
    // Add click handler
    link.addEventListener('click', (e) => {
        e.preventDefault();
        handleNavItemClick(link, item);
    });
    
    return link;
}

/**
 * Handle navigation item click
 */
function handleNavItemClick(linkElement, item) {
    // Update active state
    document.querySelectorAll('.nav-item').forEach(link => {
        link.classList.remove('active');
    });
    linkElement.classList.add('active');
    
    currentActiveLink = item.path;
    
    // In a real implementation, this would load the page content
    // For this demo, we'll show a message
    showPagePreview(item);
    
    // Save to localStorage
    localStorage.setItem('guru-erp-active-link', item.path);
}

/**
 * Show the welcome screen
 */
function showWelcomeScreen() {
    mainContent.innerHTML = `
        <div class="welcome-screen">
            <div class="welcome-icon">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="38" stroke="url(#welcomeGradient)" stroke-width="4"/>
                    <path d="M40 20L52 28V52L40 60L28 52V28L40 20Z" stroke="url(#welcomeGradient)" stroke-width="3" stroke-linejoin="round"/>
                    <defs>
                        <linearGradient id="welcomeGradient" x1="0" y1="0" x2="80" y2="80">
                            <stop offset="0%" style="stop-color:#6366F1"/>
                            <stop offset="100%" style="stop-color:#8B5CF6"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <h1>Welcome to GURU ERP</h1>
            <p>Select a module from the top bar to view available options</p>
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-value">6</div>
                    <div class="stat-label">Modules</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">211</div>
                    <div class="stat-label">Features</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">100%</div>
                    <div class="stat-label">Coverage</div>
                </div>
            </div>
        </div>
    `;
    
    // Clear active link
    document.querySelectorAll('.nav-item').forEach(link => {
        link.classList.remove('active');
    });
}

/**
 * Show a preview of the selected page
 */
function showPagePreview(item) {
    mainContent.innerHTML = `
        <div class="page-preview" style="animation: fadeInUp 0.4s ease;">
            <button onclick="window.GuruERP.showWelcomeScreen()" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.3); border-radius: 0.5rem; margin-bottom: 1.5rem; cursor: pointer; transition: all 0.2s ease;">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M12 16L6 10L12 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span style="color: var(--accent-primary); font-weight: 600;">Back</span>
            </button>
            <h1 style="font-size: 2rem; margin-bottom: 1rem; background: linear-gradient(135deg, var(--text-primary), var(--text-secondary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${item.name}</h1>
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 2rem; color: var(--text-tertiary);">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 5L8 2L14 5V11L8 14L2 11V5Z" stroke="currentColor" stroke-width="1.5"/>
                </svg>
                <code style="color: var(--accent-primary);">${item.path}</code>
            </div>
            <div style="background: var(--bg-glass); border: 1px solid var(--border-color); border-radius: 1rem; padding: 2rem; max-width: 800px;">
                <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 1.5rem;">
                    In a production environment, this area would load the content from <strong style="color: var(--text-primary);">${item.path}</strong>.
                </p>
                <p style="color: var(--text-tertiary); line-height: 1.8;">
                    You can integrate this navigation system with your existing PHP application by:
                </p>
                <ul style="margin-top: 1rem; margin-left: 1.5rem; color: var(--text-secondary); line-height: 2;">
                    <li>Using an iframe to load PHP pages</li>
                    <li>Implementing AJAX to fetch content dynamically</li>
                    <li>Adapting the navigation HTML into your PHP templates</li>
                </ul>
            </div>
        </div>
    `;
}

/**
 * Search/filter navigation items
 */
function filterNavigation(query) {
    const sections = document.querySelectorAll('.nav-section');
    const lowerQuery = query.toLowerCase();
    
    if (!query) {
        // Show all sections
        sections.forEach(section => {
            section.style.display = '';
            const items = section.querySelectorAll('.nav-item');
            items.forEach(item => item.style.display = '');
        });
        return;
    }
    
    sections.forEach(section => {
        const items = section.querySelectorAll('.nav-item');
        let hasVisibleItem = false;
        
        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(lowerQuery)) {
                item.style.display = '';
                hasVisibleItem = true;
            } else {
                item.style.display = 'none';
            }
        });
        
        // Hide section if no items match
        section.style.display = hasVisibleItem ? '' : 'none';
    });
}

/**
 * Toggle sidebar (for mobile)
 */
function toggleSidebar() {
    contextSidebar.classList.toggle('collapsed');
    
    // Save state
    const isCollapsed = contextSidebar.classList.contains('collapsed');
    localStorage.setItem('guru-erp-sidebar-collapsed', isCollapsed);
}

/**
 * Restore state from localStorage
 */
function restoreState() {
    // Restore module
    const savedModule = localStorage.getItem('guru-erp-module');
    if (savedModule && navigationData[savedModule]) {
        currentModule = savedModule;
    }
    
    // Restore sidebar collapse state
    const sidebarCollapsed = localStorage.getItem('guru-erp-sidebar-collapsed') === 'true';
    if (sidebarCollapsed && window.innerWidth <= 768) {
        contextSidebar.classList.add('collapsed');
    }
    
    // Switch to saved module
    switchModule(currentModule);
    
    // Restore active link
    const savedLink = localStorage.getItem('guru-erp-active-link');
    if (savedLink) {
        setTimeout(() => {
            const linkElement = document.querySelector(`[data-path="${savedLink}"]`);
            if (linkElement) {
                linkElement.classList.add('active');
                currentActiveLink = savedLink;
            }
        }, 100);
    }
}

// ============================================
// Event Listeners
// ============================================

// Module button clicks
moduleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const moduleName = button.dataset.module;
        switchModule(moduleName);
    });
});

// Sidebar toggle
sidebarToggle.addEventListener('click', toggleSidebar);

// Search input
searchInput.addEventListener('input', (e) => {
    filterNavigation(e.target.value);
});

// Handle responsive behavior
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        contextSidebar.classList.remove('collapsed');
    }
});

// ============================================
// Initialization
// ============================================

// ============================================
// Export for external use (optional)
// ============================================

window.GuruERP = {
    switchModule,
    navigationData,
    getCurrentModule: () => currentModule,
    showWelcomeScreen
};

// ============================================
// Logo Click Handler
// ============================================

// Add click handler to logo to return to welcome screen
document.addEventListener('DOMContentLoaded', () => {
    restoreState();
    
    // Add fade-in animation to page
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.3s ease';
        document.body.style.opacity = '1';
    }, 50);
    
    // Logo click handler
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', (e) => {
            e.preventDefault();
            showWelcomeScreen();
        });
    }
});
