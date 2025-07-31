import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import ProfilePicture from '../images/IMG_8545.jpg' // Update the path to the correct location

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Envoyer ensuite les données à un serveur via Netlify Forms, Formspree, un backend, etc.
    } 

    // State to store the local time
    const [localTime, setLocalTime] = useState("");

    // Fonction pour mettre à jour l'heure locale
    const updateTime = () => {
      const now = new Date();
      const options : Intl.DateTimeFormatOptions = { hour: "2-digit", minute: "2-digit" };
      setLocalTime(now.toLocaleTimeString("fr-FR", options));
    };

    // Update the time when the component mounts
    React.useEffect(() => {
      updateTime();
      const interval = setInterval(updateTime, 60000); // Update every minute
      return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
      <section className="contact-form container medium">
        {/* Première partie du contactForm  */}
        <div className="contact-form-top">
          <div className="row">
            <div className="flex-col">
              <h1>
                <span>Let's start a</span>
                <span>project together</span>
              </h1>
            </div>
            <div className="flex-col">
              <img
                src={ProfilePicture}
                alt="Profil Picture"
                className="contact-profile-picture"
              />
            </div>
          </div>
          <div className="row">
            <div className="flex-col">
              <form onSubmit={handleSubmit(onSubmit)} className="">
                {/* Nom */}
                <div className="form-row">
                  <h5 className="form-number">01</h5>
                  <label htmlFor="name">What's your name?</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    {...register("name", {
                      required: "Please enter your name",
                    })}
                  />
                  {errors.name && (
                    <span className="error">{String(errors.name.message)}</span>
                  )}
                </div>

                {/* Email */}
                <div className="form-row flex-1">
                  <h5 className="form-number">02</h5>
                  <label htmlFor="email">What's your email?</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@doe.com"
                    {...register("email", {
                      required: "Please enter your email",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Please enter a valid email",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="error">
                      {String(errors.email.message)}
                    </span>
                  )}
                </div>

                {/* Organization */}
                <div className="form-row">
                  <h5 className="form-number">03</h5>
                  <label htmlFor="organization">
                    What's the name of your organization?
                  </label>
                  <input
                    type="text"
                    id="organization"
                    placeholder="John & Doe ®"
                    {...register("organization")}
                  />
                </div>

                {/* Services */}
                <div className="form-row">
                  <h5 className="form-number">04</h5>
                  <label htmlFor="services">
                    What services are you looking for?
                  </label>
                  <input
                    type="text"
                    id="services"
                    placeholder="Web Development, Business Applications, Custom Solutions"
                    {...register("services", {
                      required: "Please enter the services you're looking for",
                    })}
                  />
                </div>

                {/* Message */}
                <div className="form-row">
                  <h5 className="form-number">05</h5>
                  <label htmlFor="message">Your message</label>
                  <textarea
                    id="message"
                    placeholder="Hi there! I'm looking for a new website for my business."
                    {...register("message", {
                      required: "Please enter your message",
                    })}
                  />
                  {errors.message?.message && (
                    <span className="error">
                      {String(errors.message.message)}
                    </span>
                  )}
                </div>

                {/* Submit */}
                <div className="btn-contact-send">
                  <div className="flex-col">
                    <div className="stripe"></div>
                    <div className="get-in-touch-container">
                      <div className="footer-circle-button magnetic">
                        <div className="btn-fill"></div>
                        <span className="btn-text">
                          <input
                            type="submit"
                            className="btn-text-inner change"
                            value="Send it!"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="flex-col">
              <h5>Contact Details</h5>
              <ul className="">
                <li className="">
                  <a
                    href="mailto:ceo@ditucorp.fr"
                    className="btn-click magnetic"
                    data-strength="20"
                    data-strength-text="10"
                  >
                    <span className="btn-text">
                      <span className="btn-text-inner">ceo@ditucorp.fr</span>
                    </span>
                  </a>
                </li>
                <li className="">
                  <a
                    href="tel:+31627847430"
                    className="btn-click magnetic"
                    data-strength="20"
                    data-strength-text="10"
                  >
                    <span className="btn-text">
                      <span className="btn-text-inner">+33 7 52 89 61 72</span>
                    </span>
                  </a>
                </li>
              </ul>
              <h5>Business Details</h5>
              <ul className="">
                <li>
                  <p>Valmy Dituluakidi EI</p>
                </li>
                <li>
                  <p>SIRET: 82204794000025</p>
                </li>
                <li>
                  <p>Freelance business ID:31700000102476XXX</p>
                </li>
                <li>
                  <p>Location: Lille, France</p>
                </li>
              </ul>
              <h5>Socials</h5>
              <ul className="links-wrap">
                <li className="">
                  <a
                    href="https://www.linkedin.com/in/valmy-dituluakidi"
                    target="_blank"
                    className="btn-click magnetic"
                    data-strength="20"
                    data-strength-text="10"
                  >
                    <span className="btn-text">
                      <span className="btn-text-inner">LinkedIn</span>
                    </span>
                  </a>
                </li>
                <li className="">
                  <a
                    href="https://github.com/VreezyVal/"
                    target="_blank"
                    className="btn-click magnetic"
                    data-strength="20"
                    data-strength-text="10"
                  >
                    <span className="btn-text">
                      <span className="btn-text-inner">Github</span>
                    </span>
                  </a>
                </li>
                <li className="">
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    className="btn-click magnetic"
                    data-strength="20"
                    data-strength-text="10"
                  >
                    <span className="btn-text">
                      <span className="btn-text-inner">Twitter</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Deuxième partie du contactForm  */}
        <div className="footer-bottom">
          <div className="row">
            <div className="flex-col">
              {/* < Mentions légales et signature  */}
              <div className="footer-bottom-left">
                <div>
                  <p className="footer-title">coded by</p>
                  <p>Valmy Dituluakidi</p>
                </div>
                <div>
                  <p className="footer-title">version</p>
                  <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
                </div>
              </div>
            </div>
            <div className="flex-col">
              {/* Local Time et icône tournante  */}
              <div className="footer-bottom-right">
                <div className="socials">
                  <p className="footer-title">socials</p>
                  <div className="footer-social-icons">
                    <ul>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/valmy-dituluakidi"
                          target="_blank"
                          rel="noopener noreferrer"
                          data-strength="25"
                          className="icon-link magnetic"
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
                          className="icon-link magnetic"
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
                          className="icon-link magnetic"
                        >
                          <div className="btn-fill"></div>
                          <FontAwesomeIcon icon={faTwitter} className="icon" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="local-time">
                  <p className="footer-title">local time</p>
                  <div className="localTime-icons">
                    {/* <FontAwesomeIcon icon={faGlobe} className="icon-globe" /> */}
                    <span id="local-time">{localTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )};


export default ContactForm;