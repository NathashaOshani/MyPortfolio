import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

const images = [
  '/food-delivery/img1.png',
  '/food-delivery/img2.png',
  '/food-delivery/img3.png',
  '/food-delivery/img4.png',
  '/food-delivery/img5.png',
  '/food-delivery/img6.png',
  '/food-delivery/img7.png',
  '/food-delivery/img8.png',
];

export default function FoodDeliveryProject() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % images.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="min-h-screen py-20 px-8 bg-gradient-to-br from-gray-900 via-slate-900 to-emerald-950 text-white relative">
      
      {/* Back Button - Top Right */}
      <button
        onClick={() => navigate('/web-development-projects')}
        className="absolute top-8 right-8 px-6 py-2 border border-emerald-400 rounded-full text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 transition z-10"
      >
        ← Back to Portfolio
      </button>

      <div className="max-w-6xl mx-auto space-y-20">
 {/* Title */}
 <header className="space-y-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-emerald-400 drop-shadow-lg">
          Food Delivery System
          </h1>
          <p className="text-gray-200 text-xl md:text-xl max-w-3xl mx-auto leading-relaxed">
          A responsive and modern <span className="text-teal-400 font-semibold">Food Delivery Web Application</span> built
          with React as a self-learning frontend project. Focused on UI/UX, responsiveness, and real-world flow
          </p>
        </header>
       

       {/* Overview & Features side by side */}
<section className="space-y-6 md:space-y-0 md:flex md:gap-12">
  {/* Project Overview */}
  <div className="md:w-1/2 text-center md:text-left">
    <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 tracking-wide mb-4">
      Project Overview
    </h2>
    <p className="text-gray-300 text-lg leading-relaxed">
      This project simulates a real-world food ordering experience where users
      can browse restaurants, view menus, add items to cart, and proceed to checkout.
      The backend is currently under development and will be integrated in future phases.
    </p>
  </div>

  {/* Key Features */}
  <div className="md:w-1/2 text-center md:text-left md:pl-6">
    <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 tracking-wide mb-4">
      Key Features
    </h2>
    <ul className="list-none space-y-3 text-gray-300 text-lg leading-relaxed">
      <li className="flex items-center gap-3">
        <span className="text-emerald-400 text-xl">🏠</span>
        Homepage with featured restaurants and offers
      </li>
      <li className="flex items-center gap-3">
        <span className="text-emerald-400 text-xl">📋</span>
        Menu browsing with categories and item details
      </li>
      <li className="flex items-center gap-3">
        <span className="text-emerald-400 text-xl">🛒</span>
        Add to Cart and order summary
      </li>
      <li className="flex items-center gap-3">
        <span className="text-emerald-400 text-xl">💳</span>
        Checkout UI with user and payment details
      </li>
      <li className="flex items-center gap-3">
        <span className="text-emerald-400 text-xl">📱</span>
        Fully responsive design for all devices
      </li>
    </ul>
  </div>
</section>

        {/* Tech Stack */}
        <section className="space-y-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 tracking-wide">
            Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            <div className="bg-gray-800 px-6 py-4 rounded-xl shadow-lg text-lg font-semibold">
              ⚛️ React.js
            </div>
            <div className="bg-gray-800 px-6 py-4 rounded-xl shadow-lg text-lg font-semibold">
              🧭 React Router
            </div>
            <div className="bg-gray-800 px-6 py-4 rounded-xl shadow-lg text-lg font-semibold">
              🧠 Context API
            </div>
            <div className="bg-gray-800 px-6 py-4 rounded-xl shadow-lg text-lg font-semibold">
              🎨 HTML5 / CSS3
            </div>
            <div className="bg-gray-800 px-6 py-4 rounded-xl shadow-lg text-lg font-semibold">
              🧩 JavaScript (ES6+)
            </div>
          </div>
        </section>

        {/* Image Slider */}
        <section className="space-y-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 tracking-wide">
            Application Screens
          </h2>

          <div className="relative flex justify-center">
            <img
              src={images[current]}
              alt="Food Delivery UI"
              className="rounded-xl border border-gray-700 max-w-full max-h-[600px] h-auto"
            />
           <button
  onClick={prevSlide}
  className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-900/60 px-5 py-3 rounded-full text-emerald-400 text-2xl font-bold shadow-lg hover:bg-emerald-400 hover:text-gray-900 transition transform hover:scale-110"
>
  ‹
</button>

<motion.button
  onClick={nextSlide}
  whileHover={{ scale: 1.2, rotate: 10 }}
  whileTap={{ scale: 0.95 }}
  className="absolute right-4 top-1/2 -translate-y-1/2 bg-emerald-400 text-gray-900 text-3xl font-bold w-14 h-14 flex items-center justify-center rounded-full shadow-2xl ring-2 ring-emerald-300 hover:ring-4 transition transform"
>
  ›
</motion.button>


          </div>
        </section>

        {/* Demo Video */}
        <section className="space-y-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 tracking-wide">
            Demo Video
          </h2>

          <video
            controls
            className="w-full h-auto rounded-xl border border-gray-700"
          >
            <source
              src="/food-delivery/demo.mp4"
              type="video/mp4"
            />
          </video>
        </section>

        {/* Links */}
        <section className="space-y-10 text-center">
          <h2 className="text-4xl font-bold text-emerald-400 tracking-wide">
            Project Links
          </h2>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Explore the live website or dive into the source code on GitHub.
            Experience the fully responsive design and modern UI/UX we built with React.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mt-6">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://food-delivery-frontend-tau-one.vercel.app/"
              target="_blank"
              className="px-10 py-4 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 text-gray-900 font-bold shadow-lg hover:shadow-2xl transition transform"
            >
              🌐 Live Website
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/NathashaOshani/Food-Delivery-website-frontend"
              target="_blank"
              className="px-10 py-4 rounded-full border-2 border-emerald-400 text-emerald-400 font-bold hover:bg-emerald-400 hover:text-gray-900 shadow-lg hover:shadow-2xl transition transform"
            >
              💻 GitHub Repository
            </motion.a>
          </div>
        </section>

      </div>
    </section>
  );
}
