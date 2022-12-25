import React from "react";
import { useState } from "react";
import { images } from "../../Constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {

  const [formData, setFormData] = useState({name:'', email:'', message: ''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {username, email, message} = formData
  const  handleChangeInput = (e) => {
    const {name, value} = e.target

    setFormData({...formData, [name]:value});
  }

  const handleSubmit = () => {
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    }

    client.create(contact)
    .then(()=> {
      setLoading(false);
      setIsFormSubmitted(true);
    })
  }

  return (
    <>
    <h2 className="head-text">Take a coffee & chat with me</h2>

    <div className="app__footer-cards">
      <div className="app__footer-card ">
        <img src={images.email} alt="email" />
        <a href="mailto:nikos_koukas@outlook.com" className="p-text">nikos_koukas@outlook.com</a>
      </div>
      <div className="app__footer-card">
        <img src={images.mobile} alt="phone" />
        <a href="tel:+30 694 4438077" className="p-text">+30 694 4438077</a>
      </div>
    </div>
    {!isFormSubmitted ? (
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
        </div>
        <div className="app__flex">
          <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
        </div>
        <div>
          <textarea
            className="p-text"
            placeholder="Your Message"
            value={message}
            name="message"
            onChange={handleChangeInput}
          />
        </div>
        <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        <button type="button" className="p-text"><a href="Nikolaos_Koukas_CV.pdf" download>Download CV</a></button>
      </div>
    ) : (
      <div>
        <h3 className="head-text">
          Thank you for getting in touch!
        </h3>
      </div>
    )}
  </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
