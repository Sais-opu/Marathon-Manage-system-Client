# Marathon Management System

![Marathon Banner](https://i.ibb.co/wNr4ZM6f/marathon.png)

The Marathon Management System is a full-stack web application designed to help users organize and participate in marathon events seamlessly. It offers an intuitive platform for event organizers and participants, allowing them to manage marathons, register for events, and track their activities—all in one place.
## Project Purpose  

The Marathon Management System is designed to simplify the process of organizing and participating in marathon events. This platform offers a user-friendly experience for both event organizers and participants. It allows for the seamless creation, registration, and tracking of marathons, ensuring that users can manage their events and activities effectively.

## Project Overview  

The Marathon Management System is a full-stack web application that allows users to manage marathon events, register for races, and track progress. The platform features robust functionality for event organizers to create and manage events, while participants can sign up, monitor their participation, and view countdown timers for upcoming races. With an intuitive interface and features like search, sorting, and notifications, this system streamlines the marathon experience for everyone involved.

## 🌍 Live Demo  
🔗 [Visit the Marathon Management System Live](https://marathon-manage-system.web.app/)

---

## 🚀 Features  

- **Event Management**: Create, update, and delete marathon events with essential details such as location, registration dates, and running distances.  
- **Secure Authentication**: Email/password login with strong password validation and optional Google/GitHub login.  
- **Countdown Timers**: View real-time countdowns for upcoming marathon events.  
- **Search and Sorting**: Easily search applications by title and sort marathons by creation date.  
- **Responsive Design**: Optimized for mobile, tablet, and desktop views with a clean, modern UI.  
- **Interactive Notifications**: Receive toast/sweet alerts for every successful or failed operation.

---

## 🛠️ Technologies Used  

- **Frontend**: React, React Router, TailwindCSS, DaisyUI  
- **Backend**: Firebase, MongoDB  
- **State Management**: React Toastify, SweetAlert2, Vite 
- **Countdown Timer**: react-countdown-circle-timer  
- **Deployment**: Vercel, Firebase Hosting
  

---

## Additional Resources

Here are some useful resources to help you understand the technologies used in this project:

- [React.js Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

## Project Setup

To run the project locally, follow these steps:

```sh
# Clone the repository
git clone https://github.com/Sais-opu/Marathon-Manage-system-Client.git


# Navigate to the project folder
cd marathon-manage-sustem-client

# Install dependencies
npm install

# Start the development server
npm run dev
```
```sh
#Or you can try to install
npm i react-router-dom
npm i react-toastify
npm install
```
## 📦 Dependencies  

The project uses the following dependencies:  

```json
{
  "name": "marathon-manage-sustem-client",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/postcss": "^4.0.0",
    "@tailwindcss/vite": "^4.0.0",
    "firebase": "^11.2.0",
    "react": "^18.3.1",
    "react-countdown-circle-timer": "^3.2.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^7.1.3",
    "react-toastify": "^11.0.3",
    "sweetalert2": "^11.15.10"
  },
  "devDependencies": {
    "@eslint/js": "^9.17.0",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "daisyui": "^5.0.0-beta.2",
    "eslint": "^9.17.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.16",
    "globals": "^15.14.0",
    "postcss": "^8.5.1",
    "tailwindcss": "^4.0.0",
    "vite": "^6.0.5"
  }
}
