# Marathon Management System

![Marathon Banner](https://i.ibb.co/wNr4ZM6f/marathon.png)

The Marathon Management System is a full-stack web application designed to help users organize and participate in marathon events seamlessly. It offers an intuitive platform for event organizers and participants, allowing them to manage marathons, register for events, and track their activities—all in one place.

## 🌍 Live Demo  
🔗 [Visit the Marathon Management System Live](https://marathon-manage-system.web.app/)

---

## 🚀 Features  

- **Event Management**: Create, update, and delete marathon events with essential details such as location, registration dates, and running distances.  
- **User Dashboard**: Manage marathon applications and track your activities through a personalized dashboard.  
- **Secure Authentication**: Email/password login with strong password validation and optional Google/GitHub login.  
- **Countdown Timers**: View real-time countdowns for upcoming marathon events.  
- **Search and Sorting**: Easily search applications by title and sort marathons by creation date.  
- **Responsive Design**: Optimized for mobile, tablet, and desktop views with a clean, modern UI.  
- **Interactive Notifications**: Receive toast/sweet alerts for every successful or failed operation.

---

## 🛠️ Technologies Used  

- **Frontend**: React, React Router, TailwindCSS, DaisyUI  
- **Backend**: Firebase, MongoDB  
- **State Management**: React Toastify, SweetAlert2  
- **Countdown Timer**: react-countdown-circle-timer  
- **Deployment**: Vercel, Firebase Hosting  

---

## 📦 Dependencies  

The project uses the following dependencies:  

```json
"dependencies": {
  "firebase": "^11.2.0",
  "react": "^18.3.1",
  "react-countdown-circle-timer": "^3.2.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^7.1.3",
  "react-toastify": "^11.0.3",
  "sweetalert2": "^11.15.10",
  "mongoose": "^7.0.0"  
}

"devDependencies": {
  "daisyui": "^5.0.0-beta.2",
  "eslint": "^9.17.0",
  "eslint-plugin-react": "^7.37.2",
  "eslint-plugin-react-hooks": "^5.0.0",
  "eslint-plugin-react-refresh": "^0.4.16",
  "postcss": "^8.5.1",
  "tailwindcss": "^4.0.0",
  "vite": "^6.0.5"
}
