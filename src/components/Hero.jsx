import { useTypewriter } from 'react-simple-typewriter';

const Hero = () => {
  const [typeEffect] = useTypewriter({
    words: ["Shahin THE DEV"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen py-20 lg:py-52 font-Roboto h-screen bg-hero-background bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center text-white"
    >
      <div className="flex flex-col lg:flex-row items-center w-full max-w-6xl mx-auto p-4 lg:p-0">
        <div className="lg:w-1/2 w-full p-4">
          <img
            className="w-full h-auto max-h-96 lg:max-h-full object-contain mx-auto "
            src="/Image/download (2).png"
            alt="Developer"
          />
        </div>
        <div className="lg:w-1/2 w-full p-4 mt-6 lg:mt-0 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Hi, I'm [<span className="text-white">{typeEffect}</span>]
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-semibold mt-4">
            Full Stack Web Developer
          </p>
          <p className="mt-6 mb-6 max-w-xl lg:max-w-lg mx-auto lg:mx-0 text-base md:text-lg lg:text-xl">
            I create responsive, fast, and user-friendly web applications. Specializing in React, Node.js, and modern web technologies.
          </p>
          <a
            href="#projects"
            className="mt-6 inline-block bg-white text-gray-900 font-bold py-3 px-6 rounded-full hover:bg-gray-900 hover:text-white transition duration-300"
          >
            Check My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
