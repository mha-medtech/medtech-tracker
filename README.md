![Version](https://img.shields.io/badge/version-1.5.0-blue)
![Last Updated](https://img.shields.io/badge/updated-June%202026-green)
![Languages](https://img.shields.io/badge/languages-EN%20%7C%20DE%20%7C%20FA-orange)
![Status](https://img.shields.io/badge/status-active-brightgreen)
![Stack](https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JS%20%7C%20PHP%20%7C%20MySQL-informational)

# MedTech Tracker 🏥

A full-stack web application for medical equipment management in clinics and hospitals.  
Built by a Biomedical Engineer with 8+ years of real-world experience in medical device regulation and healthcare business management.

---

## 🌐 Live
| Version | URL |
|---|---|
| Full hosted version | [medtracker.freedev.app](https://medtracker.freedev.app) |
| GitHub Pages (frontend) | [mha-medtech.github.io/medtech-tracker](https://mha-medtech.github.io/medtech-tracker) |

---

## ✨ Features
- 🔐 User registration and login with secure authentication
- 📊 Real-time dashboard with equipment statistics
- 📈 Interactive doughnut chart (Chart.js)
- ⚠️ Calibration alert system — overdue and upcoming warnings
- ➕ Add, edit, and delete equipment records
- 🔍 Search and filter by status
- 🌙 Dark / Light mode toggle
- 🌍 Multilingual — English / Deutsch / فارسی (with RTL)
- 📱 Fully responsive — mobile & tablet friendly
- ⬇️ Export to CSV with filter support
- 💾 Data stored in MySQL database per clinic account

---

## 🛠️ Tech Stack
| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3, JavaScript (Vanilla) |
| Charts | Chart.js |
| Backend | PHP 8 |
| Database | MySQL |
| Hosting | InfinityFree |
| Version Control | Git / GitHub |

---

## 📁 Project Structure
medtech-tracker/

├── index.html          # Landing page

├── login.html          # Login & registration

├── dashboard.html      # Main dashboard (protected)

├── style.css           # Dashboard styles

├── app.js              # Dashboard logic

├── auth.js             # Session management

├── landing.css         # Landing page styles

├── landing.js          # Landing page logic

├── login.css           # Login page styles

├── login.js            # Auth logic

└── api/

├── config.example.php

├── auth/

│   ├── login.php

│   └── register.php

└── equipment/

├── get.php

├── add.php

├── edit.php

└── delete.php

---

## 🗺️ Roadmap
- [x] Landing page with multilingual support
- [x] User authentication (register / login / logout)
- [x] Equipment CRUD (Add / Edit / Delete)
- [x] Calibration alert system
- [x] Multilingual — EN / DE / FA
- [x] Dark mode
- [x] Responsive design
- [x] Export to CSV
- [x] PHP + MySQL backend
- [ ] Warranty management
- [ ] Repair history tracking
- [ ] Multi-user clinic accounts
- [ ] Deploy on dedicated server

---

## 🚀 Getting Started
1. Clone the repository
2. Copy `api/config.example.php` to `api/config.php`
3. Add your database credentials to `config.php`
4. Import the database schema
5. Open `index.html` in your browser

---

## 👨‍💻 Developer
**Mohammad Hassan Abbasi**  
Biomedical Engineer | CEO at Kayazh Medical | MSc Applicant in Biomedical Engineering (Switzerland)

| | |
|---|---|
| 🌐 Website | [kayazh.com](https://www.kayazh.com) |
| 💼 LinkedIn | [linkedin.com/in/mhabbasii](https://www.linkedin.com/in/mhabbasii/) |
| 🐙 GitHub | [github.com/mha-medtech](https://github.com/mha-medtech) |

---

## 📄 License
© 2026 Mohammad Hassan Abbasi. All rights reserved.