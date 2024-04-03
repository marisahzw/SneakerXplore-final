import './App.css';
import './main.js'
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import styles from './RouterStyles.module.css';
import Sneakers from './Pages/Sneakers';
import Home from './Pages/Home';
import Forum from './Pages/Forum.jsx';
import CreateForum from './Pages/forum/CreateForum.js';
import UpdateForum from './Pages/forum/UpdateForum.js';
import ViewForum from './Pages/forum/ViewForum.js';
import Calendar from './Pages/Calendar';
import LoginSignup from './Pages/LoginSignup';
import Login from './Pages/Login';
import SneakerDetail from './Pages/SneakerDetail';
import Hero from './Components/Hero/Hero';
import UserProfile from './Pages/UserProfile.jsx';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<div className={styles["route-specific"]}><Home /></div>} />
          <Route path="/sneakers" element={<div className={styles["route-specific"]}><Sneakers /></div>} /> 
          <Route path="/sneaker/:id" element={<div className={styles["route-specific"]}><SneakerDetail /></div>} />
          <Route path="/profile" element={<div className={styles["route-specific"]}><UserProfile /></div>} /> 
          <Route path="/sneaker/:slug/:id" element={<div className={styles["route-specific"]}><SneakerDetail /></div>} />
          <Route path="/calendar" element={<div className={styles["route-specific"]}><Calendar /></div>} />
          <Route path="/forum" element={<div className={styles["route-specific"]}><Forum /></div>} />
          <Route path="/forum/createForum" element={<div className={styles["route-specific"]}><CreateForum /></div>} />
          <Route path="/forum/updateThread/:id" element={<div className={styles["route-specific"]}><UpdateForum /></div>} />
          <Route path="/forum/view/:id" element={<div className={styles["route-specific"]}><ViewForum /></div>} />

          <Route path="/" element={<div className={styles["route-specific"]}><Hero /></div>} />

          <Route path="/login" element={<div className={styles["route-specific"]}><Login /></div>} />

          <Route path="/loginsignup" element={<div className={styles["route-specific"]}><LoginSignup /></div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
