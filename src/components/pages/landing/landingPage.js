import React from "react";
import "./landingPage.css";
import { Link } from "react-router-dom";
import { useFirebase } from "../../../context/firebase";
const LandingPage = () => {
  const firebase = useFirebase();
  // console.log(firebase.fetchUser(firebase.authUser().uid));
  return (
    <section id="hero">
      <div className="hero-container" data-aos="zoom-in" data-aos-delay={100}>
        <h1 className="mb-4 pb-0">
          <span>Musketeers</span> Premier League 2024 <br />
          Season 9
        </h1>
        <p className="mb-4 pb-0">20-21 April, 2024</p>
        <a
          href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
          className="glightbox play-btn mb-4"
        />
        <Link to="/register" className="about-btn scrollto">
          Join us
        </Link>
      </div>
    </section>
  );
};

export default LandingPage;
