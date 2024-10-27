import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false); // Track form submission

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "77d796f3-fb4d-4faf-b207-dff2b256fecc");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setSubmitted(true); // Show thank you animation
      setTimeout(() => setSubmitted(false), 3000); // Hide after 3 seconds
    }
  };

  return (
    <section id="contact" className="font-Roboto py-20 bg-gray-900 text-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl text-white font-bold mb-6">Get In Touch</h2>
        <p className="mb-8">Feel free to reach out for any web development projects or collaborations!</p>

        {/* Conditionally render the thank you animation */}
        {submitted ? (
          <div className="font-Roboto bg-gray-900  text-xl text-white font-bold animate-pulse transition-opacity duration-500 opacity-100">
          🌟<span className='text-3xl'> Thank you so much for your message!</span> 🌟 <br />
          We truly appreciate your interest, and we’ll be in touch with you shortly. 😊
        </div>
        ) : (
          <form onSubmit={onSubmit} className="flex flex-col items-center space-y-4">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              className="w-full max-w-lg p-2 rounded" 
              required
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              className="w-full max-w-lg p-2 rounded" 
              required
            />
            <textarea 
              name="message" 
              placeholder="Your Message" 
              className="w-full max-w-lg p-2 rounded h-32" 
              required
            ></textarea>
            <button 
              type="submit" 
              className="inline-block bg-white text-gray-900 font-bold py-3 px-6 rounded-full hover:bg-gray-900 hover:text-white transition   duration-300 ease-in-out">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
