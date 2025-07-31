import React, { useEffect, useState } from 'react';
import "../styles/index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
// import logoBlack from "../images/Logo_black_transparent.png"
import { Link } from 'gatsby';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}
const ComingSoon: React.FC = () => {
const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
});

useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 60); // Set target date to 60 days from now

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now; // Calculate the distance between now and the target date

        if (distance < 0) {
            clearInterval(interval); // Clear the interval if the target date has passed
            return;
        }

        setTimeLeft({
            days: Math.floor(distance / (1000 * 60 * 60 * 24)), // Calculate days left
            hours: Math.floor((distance / (1000 * 60 * 60)) % (24)), // Calculate hours left
            minutes: Math.floor((distance / (1000 * 60 )) % (60)), // Calculate minutes left
            seconds: Math.floor((distance / (1000)) % 60), // Calculate seconds left
        }); // Update the time left state

    }, 1000); // Update every second
       
    return () => clearInterval(interval); // Clear the interval on component unmount

}, []);
return (
  <section className="coming-soon-container">
    <div className="overlay">
      <div className="coming-soon-wrapper">
        {/* Colonne Gauche */}
        <div className="coming-soon-left-column">
          <div className="row">
            {/*<img src={logoBlack} alt="Logo DituCorp" className="logo" />*/}
          </div>
          <div className="row">
            <h1>COMING SOON!</h1>
          </div>
          <div className="row">
            <p>
              Our website is under maintenance. We'll be back soon with a new
              awesome site.
            </p>
          </div>
        </div>
        {/* Stripe */}
        <div className="vertical-stripe"></div>
        {/* Colonne droite */}
        <div className="coming-soon-right-column">
          <div className="row">
            <p> The maintenance will ends on</p>
            <div className="countdown">
              <div>
                <span>{timeLeft.days}</span>
                <p>Days</p>
              </div>
              <div>
                <span>{timeLeft.hours}</span>
                <p>Hours</p>
              </div>
              <div>
                <span>{timeLeft.minutes}</span>
                <p>Minutes</p>
              </div>
              <div>
                <span>{timeLeft.seconds}</span>
                <p>Seconds</p>
              </div>
            </div>
          </div>
          <div className="row notify-section">
              <input type="email" placeholder="Your email address"  required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
            <form action="https://formspree.io/f/xovdbbjv" method="POST" className="notify-form" onSubmit={e => e.preventDefault()}>
              <div className="stripe" style={{backgroundColor: "#333"}}></div>
              <div className="get-in-touch-container">
                <button type="submit" className="coming-soon-circle-btn footer-circle-button magnetic">
                  <div className="btn-fill"></div>
                  <span className="btn-text">
                    <span className="btn-text-inner change">Notify me</span>
                  </span>
                </button>
              </div>
            </form>
          </div>
          
          
          <div className="row">
            <p>Connect with us</p>
            <div className="coming-soon-social-icons">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/valmy-dituluakidi"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-strength="25"
                    className=" magnetic"
                  >
                    <div className="btn-fill"></div>
                    <FontAwesomeIcon icon={faLinkedin} className="icon" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://github.com/VreezyVal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-strength="25"
                    className="magnetic"
                  >
                    <div className="btn-fill"></div>
                    <FontAwesomeIcon icon={faGithub} className="icon" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-strength="25"
                    className=" magnetic"
                  >
                    <div className="btn-fill"></div>
                    <FontAwesomeIcon icon={faTwitter} className="icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
};
export default ComingSoon;