# 🎬 Netflix Clone

A fully responsive, feature-rich Netflix clone built with React, Vite, and Firebase. This application seamlessly integrates with the TMDB (The Movie Database) API to fetch real-time movie data, categories, and video trailers, delivering an authentic streaming platform experience.



## ✨ Core Features

* **User Authentication:** Secure Sign Up, Sign In, and Log Out functionality powered by Firebase Authentication.
* **Real-time Database:** User details are stored in Firebase Firestore upon registration.
* **TMDB API Integration:** Dynamically fetches movies across various categories including:
  * Blockbuster / Top Rated
  * Popular (Only on Netflix)
  * Upcoming
  * Now Playing (Top Picks)
* **Trailer Player:** Dedicated video player route that dynamically fetches and embeds YouTube trailers for selected movies.
* **Interactive UI:** Horizontal scrollable movie rows, dynamic navbar background on scroll, and a polished aesthetic mimicking the actual Netflix platform.
* **Responsive Design:** Fully responsive layout with custom CSS media queries ensuring smooth experiences across Desktop, Tablet, and Mobile devices.



## 🛠️ Tech Stack

* **Frontend Framework:** React 18
* **Build Tool:** Vite (for fast HMR and optimized builds)
* **Routing:** React Router v7
* **Backend / BaaS:** Firebase (Authentication & Firestore)
* **External API:** TMDB (The Movie Database) API
* **Styling:** Pure CSS (Custom styles and animations)
* **Notifications:** React Toastify (`react-toastify`)

## 📂 Project Structure

```text
adharsh-tvm-netflix-clone/
├── src/
│   ├── assets/              # Static assets, local images, and mock data
│   ├── components/
│   │   ├── Footer/          # Footer component
│   │   ├── Navbar/          # Navigation bar with scroll-effect
│   │   └── TitleCards/      # Reusable movie row component (TMDB integration)
│   ├── pages/
│   │   ├── Home/            # Main landing page with hero banner
│   │   ├── Login/           # Authentication page
│   │   └── Player/          # Dedicated YouTube trailer player
│   ├── App.jsx              # Main router and Auth state listener
│   ├── firebase.js          # Firebase configuration and auth service functions
│   └── index.css            # Global base styles
