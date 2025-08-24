import React from 'react';
import '../styles/Services.css'; 
import { FaCode, FaDatabase, FaPaintBrush } from 'react-icons/fa';

const services = [
  {
    icon: <FaPaintBrush />,
    title: 'UI/UX Design',
    description: 'Designing user-friendly and visually appealing interfaces to enhance user experience.',
  },
  {
    icon: <FaCode />,
    title: 'Web Development',
    description: 'Building responsive and interactive websites using the latest technologies like React, Node.js, and Express.',
  },
  {
    icon: <FaDatabase />,
    title: 'Database Management',
    description: 'Designing efficient and scalable database solutions using MongoDB and other NoSQL databases.',
  },
];

function Services() {
  return (
    <section className="service-container" data-aos="fade-up">
      <h2>Services</h2>
      <div className="services-grid">
        {services.map((service, idx) => (
          <div key={idx} className="service-card">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
