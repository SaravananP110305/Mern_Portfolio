import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('https://mern-portfolio-backend-gw02.onrender.com/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (response.ok) {
      alert('Thanks for reaching out! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Something went wrong: ' + result.error);
    }
  } catch (error) {
    alert('Error connecting to server.');
  }
};


  return (
    <section className="contact-container" data-aos="fade-up">
      <h2>Contact Me</h2>
      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit" className="primary-btn">
            Send Message
          </button>
        </form>

        <div className="contact-location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.6816028181975!2d77.55606587478611!3d9.449293190629778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06e9d68fe31f1f%3A0xdd3938e9cd3e6058!2sMeenakshi%20Theatre%20Rd%2C%20Rajapalayam%2C%20Tamil%20Nadu%20626117!5e0!3m2!1sen!2sin!4v1747485045383!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Meenakshi Theatre Rd, Rajapalayam"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;

