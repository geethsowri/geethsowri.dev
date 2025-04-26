import { useState, useEffect } from "react";
import "./Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showLightModePopup, setShowLightModePopup] = useState(false);
  const [showResumePopup, setShowResumePopup] = useState(false);
  const themeToggle = document.getElementById("themeToggle");

  useEffect(() => {
    document.body.className = "dark-mode";
    localStorage.setItem("theme", "dark");
    document
      .querySelectorAll("a")
      .forEach((a) => a.setAttribute("target", "_blank"));
  }, []);

  //   const toggleTheme = () => {
  //     if (isDarkMode) {
  //       setShowLightModePopup(true);
  //     } else {
  //       document.body.classList.add("dark-mode");
  //       localStorage.setItem("theme", "dark");
  //     }
  //     setIsDarkMode(true); // Always switch back to dark
  //   };

  //   const closeLightModePopup = () => {
  //     setShowLightModePopup(false);
  //   };

  const openResumePopup = (e) => {
    e.preventDefault();
    setShowResumePopup(true);
  };

  const closeOverlay = () => {
    setShowLightModePopup(false);
    setShowResumePopup(false);
  };

  const findEyeHospital = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const url = `https://www.google.com/maps/search/Eye+Hospital/@${lat},${lon},14z`;
          window.location.href = url;
        },
        () => {
          alert("Error getting location. Please allow location access.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const [showPopup, setShowPopup] = useState(false);

  const toggleTheme = () => {
    setShowPopup(true); // show popup on click
  };

  const closeLightModePopup = () => {
    setShowPopup(false); // close popup
  };

  return (
    <div>
      {(showLightModePopup || showResumePopup) && (
        <div className="overlay" onClick={closeOverlay}></div>
      )}

      {showLightModePopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Objection</h3>
            <p>
              Light mode? Not a big fan, so skipped it. <br />
              (If you still need Light mode,{" "}
              <a
                href="https://www.google.com/maps/search/Eye+Hospital/"
                className="eye-hosp"
              >
                Click here
              </a>
              )
            </p>
            <button onClick={closeLightModePopup}>Back to Dark Mode</button>
          </div>
        </div>
      )}

      

      <div className="container">
        <header>
          <h1>Nainala Geeth Sowri</h1>
          <p className="bio">
            CS Undergrade '26 — Currently working on Backend dev using{" "}
            <strong>Node, Express</strong> and{" "}
            <strong>exploring various databases.</strong> Always open to
            collaboration and eager to try new and unique ideas.
          </p>
          <div className="tooltip-container">
            <button className="button" onClick={openResumePopup}>
              Resume
              <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                <path
                  clipRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
            <span className="tooltip-text">Resume is not yet attached.</span>
          </div>
        </header>

        <div className="links-container">
          <div className="section">
            <h2 className="section-title">
              <i className="fas fa-code"></i> Coding Profiles
            </h2>
            <a href="https://leetcode.com/u/an_astronaut" className="link-item">
              <div className="icon">
                <i class="fas fa-code"></i>
              </div>
              <span>LeetCode</span>
            </a>
            <a
              href="https://www.codechef.com/users/an_astronaut"
              className="link-item"
            >
              <div className="icon">
                <i className="fas fa-terminal"></i>
              </div>
              <span>CodeChef</span>
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/geethsowri/"
              className="link-item"
            >
              <div className="icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <span>GeeksforGeeks</span>
            </a>
            <a
              href="https://codeforces.com/profile/geethsowri"
              className="link-item"
            >
              <div className="icon">
                <i className="fas fa-keyboard"></i>
              </div>
              <span>Codeforces</span>
            </a>
          </div>

          <div className="section">
            <h2 className="section-title">
              <i className="fas fa-id-badge"></i> Career Profiles
            </h2>
            <a href="https://github.com/geethsowri" className="link-item">
              <div className="icon">
                <i className="fab fa-github"></i>
              </div>
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/geethsowri/"
              className="link-item"
            >
              <div className="icon">
                <i className="fab fa-linkedin"></i>
              </div>
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="section">
            <h2 className="section-title">
              <i className="fas fa-envelope"></i> Contact Info
            </h2>
            <a href="mailto:nainalageethsowri@gmail.com" className="link-item">
              <div className="icon">
                <i className="fas fa-envelope"></i>
              </div>
              <span>Email</span>
            </a>
            <a href="https://t.me/vyomaagami" className="link-item">
              <div className="icon">
                <i className="fab fa-telegram"></i>
              </div>
              <span>Telegram</span>
            </a>
          </div>
        </div>

        <footer>
          <p>
            Main Portfolio under Development. Meanwhile, Read my articles on{" "}
            <a href="https://medium.com/@geethsowri" className="medium-link">
              Medium
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
