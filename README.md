# 🏫 Greenfield School Management System (SMS)
### Academic Focus — Secondary Section | Phase 1

> A full-featured, web-based School Management System built for Nigerian secondary schools. Covers everything from student enrollment and subject management to broadsheet generation, report cards, attendance tracking, and school announcements — all in one platform.

---

## 🌐 Live Demo

🔗 **[View Live Demo →](https://your-demo-link.netlify.app)**
> _(Replace this link with your deployed Netlify URL)_

| Role | Email | Password |
|------|-------|----------|
| 👨‍💼 Admin | `admin@greenfield.edu` | `admin123` |
| 👩‍🏫 Teacher | `n.okafor@greenfield.edu` | `teacher123` |
| 👩‍🎓 Student | `adaeze@greenfield.edu` | `student123` |

---

## 📸 Preview

> _Add screenshots of the Dashboard, Broadsheet, and Report Card pages here after deployment._

---

## 📦 Features

### 🔐 Authentication & Role Management
- Secure login with role-based access control
- Roles: Admin, Principal, Class Teacher, Subject Teacher, Student

### 👤 Student Management
- Enroll, edit, and manage student records
- Assign students to classes and sections
- Filter by class, status, and gender

### 📚 Subject & Course Management
- Create and manage subjects per class
- Assign subject teachers
- Track enrollment per subject

### 📝 Assignments & Grading
- Create assignments with due dates and max scores
- Track submission progress per class
- Filter by Open / Closed / Upcoming status

### ✅ Attendance Tracker
- Mark and monitor daily attendance
- Visual attendance rate per student
- At-Risk flagging for students below 75%

### 🗓 Timetable / Schedule
- Day-by-day class timetable
- Subject colour coding
- Teacher and room assignments

### 📊 Results & Broadsheet
- Enter C.A. scores and Exam scores per subject
- Auto-compute total scores, grades, and positions
- WAEC-style grading (A1 – F9)
- Full class broadsheet view
- Downloadable/printable PDF report cards

### 📋 Report Cards
- Individual student report cards
- Class Teacher's comment
- Principal's comment
- Attendance summary included
- PDF export ready

### 🎓 Teacher Portal
- Staff directory with subject and class assignments
- Status tracking (Active / On Leave)

### 📢 Announcements & Notice Board
- Post school-wide announcements
- Filter by category (Exams, Events, Academic, Sports)
- Priority tagging (High / Medium / Low)
- Pin, edit, and delete controls

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + Vite |
| Styling | Custom CSS-in-JS + Google Fonts (Nunito, Poppins) |
| State Management | React useState (hooks) |
| PDF Generation | Puppeteer / pdfkit _(planned for full build)_ |
| Backend _(planned)_ | Node.js + Express |
| Database _(planned)_ | PostgreSQL |
| Auth _(planned)_ | JWT + bcrypt |
| Hosting | Vercel (frontend) + Railway (backend + DB) |

> **Note:** This repository is currently the frontend demo/prototype. The full backend and database integration are in active development.

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Cyber-Nate/greenfield-sms.git

# Navigate into the project
cd greenfield-sms

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The output will be in the `/dist` folder — ready to deploy on Netlify or Vercel.

---

## 📁 Project Structure

```
greenfield-sms/
├── public/
├── src/
│   ├── App.jsx          # Main application + all modules
│   ├── main.jsx         # React entry point
│   └── index.css        # Global reset styles
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

> As the project grows into a full-stack build, the structure will expand into `/components`, `/pages`, `/api`, `/hooks`, and `/utils` folders.

---

## 🗺 Roadmap

- [x] Frontend prototype with all 8 modules
- [x] Role-based login (Admin, Teacher, Student)
- [x] Student, Subject, Assignment, Attendance, Timetable, Results, Teachers, Announcements
- [ ] Backend API (Node.js + Express)
- [ ] PostgreSQL database integration
- [ ] Real authentication (JWT + bcrypt)
- [ ] C.A. + Exam score entry with auto-grade computation
- [ ] WAEC-style broadsheet generation
- [ ] PDF report card export
- [ ] Class Teacher & Principal comments
- [ ] Primary School section (Phase 2)
- [ ] Parent portal
- [ ] Fee management module
- [ ] Mobile responsive optimization

---

## 🎯 Target Users

- Nigerian Secondary Schools (public and private)
- School administrators and principals
- Subject and class teachers
- Students and parents

---

## 👨‍💻 Developer

**Nathaniel Temitope Ogunjobi** — *Cyber Nate*
> Cybersecurity Professional | Full-Stack Developer | IT Consultant

- 🌐 Portfolio: [cybernatesec.netlify.app](https://cybernatesec.netlify.app)
- 💼 LinkedIn: [linkedin.com/in/nathaniel-cybersecurity](https://www.linkedin.com/in/nathaniel-cybersecurity/)
- 🐙 GitHub: [github.com/Cyber-Nate](https://github.com/Cyber-Nate)
- 📧 Email: nathanieltemitope.o@gmail.com

---

## 📄 License

This project is proprietary software developed for client delivery.
© 2026 Nathaniel Temitope Ogunjobi. All rights reserved.

---

> *Built with 💙 by Cyber Nate — making school management smarter, one feature at a time.*
