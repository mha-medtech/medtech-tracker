# MedTech Tracker 🏥

![Version](https://img.shields.io/badge/version-1.6.5-blue)
![Last Updated](https://img.shields.io/badge/updated-September%202026-green)
![Languages](https://img.shields.io/badge/languages-EN%20%7C%20DE%20%7C%20FA-orange)
![Status](https://img.shields.io/badge/status-active-brightgreen)
![Stack](https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JS%20%7C%20PHP%20%7C%20MySQL-informational)
![PWA](https://img.shields.io/badge/PWA-installable-blueviolet)

A full-stack web application for **medical equipment lifecycle management** in clinics and hospitals.

MedTech Tracker was designed and developed by a Biomedical Engineer with professional experience in medical-device regulation, inspection, distribution, and healthcare operations.

The project addresses a practical healthcare problem: equipment information is often scattered across spreadsheets, paper records, invoices, warranty documents, repair reports, and calibration records. MedTech Tracker brings this information together into a structured digital record for each device.

---

## 🌐 Live

| Version | URL | Notes |
|---|---|---|
| ✅ Full version (PHP + MySQL) | [medtracker.freedev.app](https://medtracker.freedev.app) | Login required, installable as PWA |
| 👀 Frontend demo | [mha-medtech.github.io/medtech-tracker](https://mha-medtech.github.io/medtech-tracker) | Static preview only |

---

## 🎯 Why I Built This

Through my professional work in the medical-device field, I became familiar with a recurring operational problem in hospitals, clinics, and medical-equipment organizations: information about a device is often fragmented across multiple documents and systems.

A single device may have separate records for:

- technical specifications
- purchase information
- warranty
- calibration
- maintenance
- repair history
- invoices and related documentation

MedTech Tracker was built as a practical attempt to organize this lifecycle into one structured equipment record.

Rather than functioning only as an equipment inventory, the system follows each device through its operational lifecycle.

This project also became an early technical foundation for my later work on **AI-assisted medical equipment documentation and data extraction**.

---

## ✨ Features

### 🏥 Equipment Management

- Full CRUD for medical equipment records
- Search and filter equipment
- Equipment status management
- Structured device records
- Equipment lifecycle tracking

### 📅 Calibration Management

- Last calibration date
- Next calibration date
- Automatic calibration alerts
- Overdue calibration indicators
- Upcoming calibration reminders

### 🛡️ Warranty Management

- Purchase date tracking
- Warranty expiry tracking
- Automatic warranty alerts
- Active / expired / expiring status indicators

### 🔧 Maintenance & Repair History

- Repair history for each device
- Problem type and description
- Corrective action
- Technician information
- Repair cost
- Invoice / reference number
- Repair status tracking:
  - Resolved
  - Needs Follow-up
  - Referred to Vendor

### 📊 Dashboard & Reports

- Live dashboard with equipment statistics
- Interactive Chart.js visualizations
- Equipment status overview
- Upcoming calibration widget
- Warranty status overview
- Monthly repair-cost reporting
- Equipment reports
- Quick Actions panel

### 👤 Authentication & Account

- Secure registration and login
- Hashed passwords
- Authenticated dashboard
- Editable user profile
- Password change with current-password verification
- Isolated clinic accounts

### 📱 UX & Platform

- Responsive desktop, tablet, and mobile interface
- Dark / Light mode
- Multilingual interface: English / German / Persian
- Automatic browser-language detection
- Manual language override
- Progressive Web App (PWA)
- Installable on supported mobile devices
- Equipment search and filtering
- CSV export

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Charts | Chart.js |
| Backend | PHP 8 |
| Database | MySQL |
| PWA | Service Worker, Web App Manifest |
| Hosting | InfinityFree |
| Version Control | Git / GitHub |

The project uses a lightweight traditional web stack and was developed as an independent full-stack healthcare software project.

---

## 📁 Project Structure

```text
medtech-tracker/
├── index.html
├── about.html
├── pricing.html
├── contact.html
├── login.html
├── dashboard.html
│
├── style.css
├── app.js
├── auth.js
├── lang.js
│
├── landing.css
├── landing.js
├── login.css
├── login.js
│
├── manifest.json
├── sw.js
│
└── api/
    ├── config.example.php
    │
    ├── auth/
    │   ├── login.php
    │   └── register.php
    │
    ├── equipment/
    │   ├── get.php
    │   ├── add.php
    │   ├── edit.php
    │   └── delete.php
    │
    ├── repairs/
    │   ├── get.php
    │   ├── add.php
    │   └── delete.php
    │
    └── user/
        ├── get.php
        └── update.php
```

---

## 🔄 Basic Workflow

```text
User Authentication
        ↓
Equipment Registration
        ↓
Digital Equipment Record
        ↓
┌─────────────┬──────────────┬─────────────┐
│ Calibration │ Maintenance  │  Warranty   │
└─────────────┴──────────────┴─────────────┘
        ↓
Dashboard / Alerts / Reports
```

---

## 🔒 Access & Data

This repository is public so the source code, architecture, and commit history can be reviewed for software-development, portfolio, and academic purposes.

No real clinic data, patient data, or confidential healthcare information is exposed in this repository.

Database credentials are stored only in:

```text
api/config.php
```

This file is excluded from version control through `.gitignore`.

An example configuration file is provided instead:

```text
api/config.example.php
```

The live application requires account registration, and there is no anonymous access to private equipment records.

The application manages **medical equipment information**, not electronic patient records.

---

## ✅ Current Status

The core application is functional and currently includes:

- [x] Landing page
- [x] Multilingual interface
- [x] User registration and login
- [x] Equipment CRUD
- [x] Calibration tracking
- [x] Calibration alerts
- [x] Warranty management
- [x] Warranty expiry alerts
- [x] Repair history
- [x] Reports and charts
- [x] Dark mode
- [x] Responsive interface
- [x] CSV export
- [x] PHP + MySQL backend
- [x] Progressive Web App
- [x] User settings

---

## 🗺️ Roadmap

Planned improvements include:

- [ ] Multi-user clinic accounts and staff roles
- [ ] Role-based access control
- [ ] Bulk equipment actions
- [ ] Bulk equipment import
- [ ] PDF / printable reports
- [ ] Advanced equipment analytics
- [ ] Improved API architecture
- [ ] Deployment on a dedicated server
- [ ] Custom production domain
- [ ] AI-assisted document processing integration

---

## 🤖 Future Direction: AI-Assisted Medical Equipment Documentation

A related project currently under development explores how artificial intelligence can reduce manual documentation work in medical-equipment management.

The concept is to allow a user to photograph or upload documents associated with medical devices, including:

- equipment nameplates
- purchase invoices
- repair invoices
- warranty documents
- calibration certificates
- other equipment-related records

The planned workflow is:

```text
Document / Image
        ↓
Document Type Recognition
        ↓
Information Extraction
        ↓
Medical Device Matching
        ↓
User Verification
        ↓
Structured Equipment Record
        ↓
Hospital / Clinic Database
```

For example, if a user photographs a warranty document, the system should identify the document type, extract relevant information, match it with the correct device already registered in the system, show the extracted fields to the user for verification, and then save the validated data to that device's history.

The same approach can be applied to purchase invoices, repair documentation, calibration certificates, and equipment nameplates.

This direction builds upon the equipment lifecycle and database concepts first developed in MedTech Tracker.

---

## 🚀 Getting Started

### Requirements

- PHP 8+
- MySQL / MariaDB
- Apache or compatible web server
- Modern web browser

### 1. Clone the repository

```bash
git clone https://github.com/mha-medtech/medtech-tracker.git
cd medtech-tracker
```

### 2. Create the configuration file

```bash
cp api/config.example.php api/config.php
```

### 3. Configure the database

Add your database credentials to:

```text
api/config.php
```

### 4. Create the database tables

Import or create the required MySQL tables, including:

```text
users
equipment
repairs
```

### 5. Run the application

Deploy the project through a PHP-compatible server or local development environment.

---

## 👨‍💻 Developer

### Mohammad Hassan Abbasi

**Biomedical Engineer | Healthcare Software Developer**

Professional background in:

- medical devices
- healthcare technology
- medical-device regulation and inspection
- medical-equipment operations
- healthcare business systems
- web development

Currently expanding my technical background in:

- Python
- computational problem solving
- artificial intelligence
- AI applications in healthcare

| | |
|---|---|
| 🌐 Website | [kayazh.com](https://www.kayazh.com) |
| 💼 LinkedIn | [linkedin.com/in/mhabbasii](https://www.linkedin.com/in/mhabbasii/) |
| 🐙 GitHub | [github.com/mha-medtech](https://github.com/mha-medtech) |

---

## 📌 Project Context

MedTech Tracker is an independent software project combining practical medical-device domain knowledge with software development.

It reflects an ongoing technical transition from biomedical engineering and healthcare operations toward the development of intelligent digital systems for medical technology and healthcare.

---

## 📄 License

© 2026 Mohammad Hassan Abbasi. All rights reserved.