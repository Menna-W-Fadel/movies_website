import React from "react";

import { useState } from "react";
import { Alert } from "@mui/material";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError("Please enter a valid email address so we can reply to you.");
      return;
    }
    if (!form.message.trim()) {
      setError("Please write a short message before sending.");
      return;
    }

    setError("");
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">

      <div className="contact-container glass-strong">

        <p className="label">Contact</p>
        <h1 className="heading-section">Get in Touch</h1>
        <div className="divider-emerald mt-2 mb-4"></div>

        <form onSubmit={handleSubmit} className="contact-form">

          {sent && (
            <Alert severity="success">
              Thank you, your message has been sent. We will get back to you soon.
            </Alert>
          )}

          {error && <Alert severity="error">{error}</Alert>}

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
