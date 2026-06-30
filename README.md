![Version](https://img.shields.io/badge/version-1.6.5-blue)
![Last Updated](https://img.shields.io/badge/updated-June%202026-green)
![Languages](https://img.shields.io/badge/languages-EN%20%7C%20DE%20%7C%20FA-orange)
![Status](https://img.shields.io/badge/status-active-brightgreen)
![Stack](https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JS%20%7C%20PHP%20%7C%20MySQL-informational)
![PWA](https://img.shields.io/badge/PWA-installable-blueviolet)

# MedTech Tracker 🏥

A full-stack web application for medical equipment management in clinics and hospitals.
Built by a Biomedical Engineer with 8+ years of real-world experience in medical device regulation and healthcare business management.

---

## 🌐 Live

| Version | URL | Notes |
|---|---|---|
| ✅ Full version (PHP + MySQL) | [medtracker.freedev.app](https://medtracker.freedev.app) | Login required, installable as PWA |
| 👀 Frontend demo (no database) | [mha-medtech.github.io/medtech-tracker](https://mha-medtech.github.io/medtech-tracker) | Static preview only |

---

## ✨ Features

### Landing & Marketing
- Multilingual marketing site — Home, About, Pricing, Contact
- Responsive design with mobile-first navigation
- Auto-detect browser language with manual override

### Authentication & Account
- Secure registration and login (hashed passwords)
- Each clinic has its own isolated account
- Editable profile (name, clinic, phone, city, address)
- Password change with current-password verification

### Equipment Management
- Full CRUD for medical equipment records
- Calibration tracking — last & next calibration dates
- Automatic calibration alerts (overdue / upcoming within 30 days)
- Warranty tracking with purchase date, expiry, and status badges
- Automatic warranty alerts (expired / expiring soon)

### Maintenance
- Repair history log per device
- Problem type, description, action taken, technician, cost, invoice number
- Repair status tracking (Resolved / Needs Follow-up / Referred to Vendor)

### Dashboard & Reports
- Live dashboard with equipment statistics
- Interactive doughnut chart (Chart.js) — equipment status overview
- Quick Actions panel for one-click common tasks
- Upcoming Calibrations widget with urgency indicators
- Dedicated Reports page:
  - Summary stats (equipment, repairs, warranty)
  - Equipment status chart
  - Warranty status chart
  - Monthly repair cost chart (live data)
  - Upcoming calibrations table

### UX & Platform
- Dark / Light mode toggle
- Fully responsive — mobile, tablet, desktop
- Installable as a Progressive Web App (PWA) on iOS & Android
- Search and filter equipment by status
- Export equipment list to CSV (UTF-8, respects active filters)

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3, JavaScript (Vanilla) |
| Charts | Chart.js |
| Backend | PHP 8 |
| Database | MySQL |
| PWA | Service Worker, Web App Manifest |
| Hosting | InfinityFree |
| Version Control | Git / GitHub |

---

## 📁 Project Structure

```
medtech-tracker/
├── index.html              # Landing page
├── about.html               # About page
├── pricing.html              # Pricing page
├── contact.html             # Contact page
├── login.html               # Login & registration
├── dashboard.html          # Main dashboard (protected)
├── style.css                 # Dashboard styles
├── app.js                    # Dashboard logic
├── auth.js                   # Session management
├── lang.js                   # Shared language system
├── landing.css               # Landing pages styles
├── landing.js                 # Landing pages logic
├── login.css                 # Login page styles
├── login.js                  # Auth logic
├── manifest.json              # PWA manifest
├── sw.js                      # Service Worker
└── api/
    ├── config.example.php
    ├── auth/
    │   ├── login.php
    │   └── register.php
    ├── equipment/
    │   ├── get.php
    │   ├── add.php
    │   ├── edit.php
    │   └── delete.php
    ├── repairs/
    │   ├── get.php
    │   ├── add.php
    │   └── delete.php
    └── user/
        ├── get.php
        └── update.php
```

---

## 🔒 Access & Data

This repository is public so the source code, architecture, and commit history can be
reviewed (e.g. for academic applications or portfolio purposes). No real clinic data
is exposed: database credentials live only in `api/config.php`, which is excluded
from version control via `.gitignore`. The live application itself requires account
registration — there is no public or anonymous access to any clinic's equipment data.

---

## 🗺️ Roadmap

- [x] Landing page with multilingual support
- [x] User authentication (register / login / logout)
- [x] Equipment CRUD (Add / Edit / Delete)
- [x] Calibration alert system
- [x] Warranty management with expiry alerts
- [x] Repair history tracking
- [x] Reports page with live charts
- [x] Multilingual — EN / DE / FA
- [x] Dark mode
- [x] Responsive design with sidebar navigation
- [x] Export to CSV
- [x] PHP + MySQL backend
- [x] Progressive Web App (installable)
- [x] User settings panel
- [ ] Multi-user clinic accounts
- [ ] Bulk actions (multi-select equipment)
- [ ] PDF export / printable reports
- [ ] Deploy on dedicated server with custom domain

---

## 🚀 Getting Started

1. Clone the repository
2. Copy `api/config.example.php` to `api/config.php`
3. Add your database credentials to `config.php`
4. Run the SQL schema in phpMyAdmin (tables: `users`, `equipment`, `repairs`)
5. Upload files to your hosting
6. Open `index.html` in your browser

---

## 👨‍💻 Developer

**Mohammad Hassan Abbasi**
Biomedical Engineer | CEO at Kayazh Biomedical Engineering Co. | MSc Applicant in Biomedical Engineering (Switzerland)

| | |
|---|---|
| 🌐 Website | [kayazh.com](https://www.kayazh.com) |
| 💼 LinkedIn | [linkedin.com/in/mhabbasii](https://www.linkedin.com/in/mhabbasii/) |
| 🐙 GitHub | [github.com/mha-medtech](https://github.com/mha-medtech) |

---

## 📄 License

© 2026 Mohammad Hassan Abbasi. All rights reserved.