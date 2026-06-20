import React from "react";

import { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); 
  };

  return (
    <div className="contact-page">

      <div className="contact-container glass-strong">

        <p className="label">Contact</p>
        <h1 className="heading-section">Get in Touch</h1>
        <div className="divider-emerald mt-2 mb-4"></div>

        <form onSubmit={handleSubmit} className="contact-form">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="input"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="input"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="textarea"
          />

          <button type="submit" className="btn-primary">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
};

export default ContactPage;
