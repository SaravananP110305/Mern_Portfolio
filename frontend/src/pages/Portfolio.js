import React from 'react';
import '../styles/Portfolio.css'; // Make sure you create/update this CSS file

const projects = [
  {
    title: 'SaroPulse- Blood Bank Manager',
    description: 'Cross-platform app with donor search, expiry alerts, and PDF export using Firebase real-time sync. Features emergency-ready filtering, cloud data persistence, and automated notifications.',
    link: 'https://github.com/SaravananP110305/SaroPulse',
    image: 'https://media.istockphoto.com/id/1212823663/photo/female-doctor-is-checking-blood-bags-in-llaboratory-at-hospital.jpg?s=612x612&w=0&k=20&c=5mp2sorTIgbIfQerDa8lXMJuypOS8FAwhIsGBqlFSeo=', // Replace with your actual image
  },
  {
    title: 'Linova- E-Library System',
    description: 'The system uses the MERN stack to automate real-time alerts for library updates and transactions, enhancing resource management and user/admin experience.',
    link: 'https://github.com/SaravananP110305/E-Library',
    image: 'https://images.indianexpress.com/2022/01/E-library.jpg', // Replace with your actual image
  },
  {
    title: 'Inventra- Inventory System',
    description: 'The MERN-based Inventory Management System streamlines CRUD operations with secure MongoDB storage and can be enhanced with authentication and stock alerts.',
    link: 'https://github.com/SaravananP110305/Inventory-Management-System',
    image: 'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?cs=srgb&dl=pexels-samuel-wolfl-628277-1427541.jpg&fm=jpg', // Replace with your actual image
  },
  {
    title: 'Student Management System',
    description: 'Developed a responsive web system for managing student records with interactive forms and real-time validation for efficient data handling.',
    link: 'https://saravananp110305.github.io/Student-Management/',
    image: 'https://plus.unsplash.com/premium_photo-1681841964461-c6d5e03d435d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHNjaG9vbCUyMHN0dWRlbnRzfGVufDB8fDB8fHww', // Replace with your actual image
  },
  {
    title: 'Saros Image Search Engine',
    description: 'Sleek image-search portal that lets you browse and discover beautiful images from the web—sorted by orientation and popularity—using the Unsplash API.',
    link: 'https://sarosimage.netlify.app/',
    image: 'https://media.istockphoto.com/id/1440149713/photo/black-man-tablet-and-smile-for-social-media-post-shopping-online-or-browsing-internet.jpg?s=612x612&w=0&k=20&c=_AJnX1NBt8cHvOL0ygXQR4ysZQCLoPUr9Z9bzCl8Nrk=', // Replace with your actual image
  },
  {
    title: 'Smart Cart- Tkinter E-Commerce',
    description: 'Python Tkinter-based shopping app with SQLite3 integration that enables user registration, login, product browsing, and cart management.',
    link: 'https://github.com/SaravananP110305/TkinterEcommerce',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQccxmwHH9IBns5PpFsmGkD3-rKSLML42u-vw&s', // Replace with your actual image
  }
];

function Portfolio() {
  return (
    <section className="portfolio-container" data-aos="fade-up">
      <h2 className="portfolio-title">Projects</h2>
      <div className="portfolio-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="portfolio-item">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
