import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ThreeDCarouselProject() {
  const navigate = useNavigate();

  const images = [
    "/uiux/slide1.png",
    "/uiux/slide2.png",
    "/uiux/slide3.png",
    "/uiux/slide4.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="min-h-screen py-20 px-8 bg-gradient-to-br from-gray-900 via-slate-900 to-emerald-950 text-white relative">

      {/* Back Button */}
      <button
        onClick={() => navigate("/ui-ux-projects")}
        className="fixed top-6 right-6 px-6 py-2 border border-emerald-400 rounded-full text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 transition font-semibold shadow-md z-50"
      >
        ← Back
      </button>

      <div className="max-w-5xl mx-auto space-y-16 text-center">

        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight text-white">
            🎠 3D Carousel in Figma Using Smart Animate
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Experience a smooth, interactive 3D carousel animation designed entirely
            in Figma. Leveraging Smart Animate and component variants, this design
            brings your UI/UX concepts to life.
          </p>
        </div>

        {/* Figma Link */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-emerald-400">
            Figma Design
          </h2>
          <a
            href="https://drive.google.com/file/d/1kh3Vda0bpjCIV7GQ8EY_1HgWIwOeXcLP/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-3 border border-emerald-400 rounded-full text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 transition font-semibold shadow-lg"
          >
            view design video →
          </a>
        </section>

        {/* Image Slider */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-emerald-400">
            Carousel Preview
          </h2>

          <div className="relative w-full md:w-4/5 mx-auto overflow-hidden rounded-xl border border-gray-700 shadow-2xl">

            {/* Image */}
            <img
              src={images[currentIndex]}
              alt={`Carousel ${currentIndex + 1}`}
              className="w-full h-[420px] object-cover transition-opacity duration-700"
            />

            {/* Previous */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full hover:bg-emerald-400 hover:text-gray-900 transition"
            >
              ‹
            </button>

            {/* Next */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full hover:bg-emerald-400 hover:text-gray-900 transition"
            >
              ›
            </button>
          </div>
        </section>

      </div>
    </section>
  );
}
