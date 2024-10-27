import React, { useEffect } from 'react'; // Import useEffect
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio website built with React and Tailwind CSS to showcase my skills and projects.",
      img: "/Image/DALL·E 2024-10-03 23.24.52 - A portfolio thumbnail design inspired by a minimalist and professional website. The background features a dark color scheme, with subtle gradients for.webp",
      techStack: "React, Tailwind CSS, JavaScript"
    },
    {
      id: 2,
      title: "E-commerce Store",
      description: "A fully functional e-commerce site with product listings, shopping cart, and user authentication.",
      img: "/Image/E-commerce.png",
      techStack: "React, Node.js, Express, MongoDB"
    },
    {
      id: 3,
      title: "Task Manager App",
      description: "A task management web application to help users organize their daily tasks and to-dos.",
      img: "/Image/Task Manager App.png", // Adjusted file name
      techStack: "React, Firebase, Tailwind CSS"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 font-Roboto">
      <h2 className="text-center text-white text-5xl font-extrabold mb-10">MY PROJECTS</h2>
      <div data-aos="fade-right" className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id}   className="bg-white rounded-lg shadow-lg p-5 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <img src={project.img} alt={project.title} className="w-full rounded-lg h-40 object-cover mb-4" />
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p>{project.description}</p>
            <p className="mt-2 text-sm text-gray-600">Tech Stack: {project.techStack}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);

  return (
    <div className="App">
      <Projects />
    </div>
  );
}

export default App;
