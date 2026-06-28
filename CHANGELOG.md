# Changelog

All notable changes to MedTech Tracker are documented here.

---

## [v1.6.0] — 2026-06-27
### Added
- Repair history tracking for each device
- Repair records: date, problem type, description, action taken, technician, cost, invoice
- Repair status tracking (Resolved / Needs Follow-up / Referred to Vendor)
- Maintenance page in dashboard sidebar
- About and Pricing pages for landing
- Multilingual support for all new features

## [v1.5.2] — 2026-06-26
### Added
- Complete dashboard redesign with sidebar navigation
- Sidebar with user avatar, clinic name, and logout button
- Welcome message in header with user name
- Warranty Management page in dashboard
- Mobile-friendly sidebar with overlay
- Nav items for future features (Maintenance, Reports) with "Soon" badge

### Changed
- Dashboard layout from top-nav to sidebar
- Header simplified — removed duplicate logout button
- Landing page hides login buttons after authentication

## [v1.5.1] — 2026-06-26
### Added
- Warranty management with purchase date and expiry tracking
- Warranty alert system (separate from calibration alerts)
- Warranty status badges (Valid / Expiring soon / Expired)
- Loading spinner for dashboard data fetch
- Cache busting version params for CSS and JS files
- Shared lang.js for unified language management across all pages
- Login and registration page with multilingual support

### Fixed
- Language not persisting across pages
- Sign out button not translating without page refresh
- Warranty badges not updating on language change


## [v1.5.0] — 2026-06-25
### Added
- Landing page with multilingual support
- Login and registration system
- PHP/MySQL backend integration
- Session management and logout
- Equipment data synced with database

## [v1.4.1] — 2026-06-24
### Fixed
- Mobile table labels not translating correctly
- Language load order on page startup
- Mobile card view for equipment table

## [v1.4.0] — 2026-06-24
### Added
- About page with project and developer info
- Navigation routing between Dashboard and About
- Active nav link highlight
- Multilingual About page (EN/DE/FA)

## [v1.3.1] — 2026-06-23
### Added
- Export to CSV with active filter support
- UTF-8 BOM for correct Persian encoding in Excel

### Fixed
- Filter dropdown not working with multilingual status
- Persian text encoding in CSV export

## [v1.3.0] — 2026-06-23
### Added
- Interactive doughnut chart for equipment status overview (Chart.js)
- Calibration alert system with overdue and upcoming warnings
- Next Calibration Date field for each equipment
- Sample data loaded on first visit
- Multilingual alert messages (EN/DE/FA)

---

## [v1.2.1] — 2026-06-23
### Added
- Edit functionality for existing equipment rows
- Out of Service stat card in dashboard

### Fixed
- Stats not updating after edit

---

## [v1.2.0] — 2026-06-23
### Added
- Multilingual support (English / German / Persian)
- localStorage to persist data across sessions
- Language preference saved automatically

---

## [v1.1.0] — 2026-06-22
### Added
- Dark / Light mode toggle
- Responsive design with hamburger menu for mobile
- Search and filter functionality
- No results found message
- Dynamic equipment form
- Delete functionality with stats update
- Footer with author info and version

---

## [v1.0.0] — 2026-06-22
### Added
- Initial project setup
- Equipment list table
- Dashboard with stat cards
- README with project overview