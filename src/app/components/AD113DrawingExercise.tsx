import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../../imports/ad113-drawing-1.jpg";
import img2 from "../../imports/ad113-drawing-2.jpg";
import img3 from "../../imports/ad113-drawing-3.jpg";
import img4 from "../../imports/ad113-drawing-4.jpg";
import img5 from "../../imports/ad113-drawing-5.jpg";
import img6 from "../../imports/ad113-drawing-6.jpg";
import img7 from "../../imports/ad113-drawing-7.jpg";
import img8 from "../../imports/ad113-drawing-8.jpg";
import img9 from "../../imports/ad113-drawing-9.jpg";
import img10 from "../../imports/ad113-drawing-10.jpg";
import img11 from "../../imports/ad113-drawing-11.jpg";
import img12 from "../../imports/ad113-drawing-12.jpg";
import img13 from "../../imports/ad113-drawing-13.jpg";

const drawings = [
  {
    src: img1,
    caption:
      "Gesture and structure study of the human hand, focusing on proportion and skeletal form.",
  },
  {
    src: img2,
    caption:
      "Perspective drawing exploring spatial depth and architectural structure.",
  },
  {
    src: img3,
    caption:
      "Abstract composition using geometric shapes to explore contrast, rhythm, and visual balance.",
  },
  {
    src: img4,
    caption:
      "Still life sketch emphasizing overlapping forms and spatial relationships.",
  },
  {
    src: img5,
    caption:
      "Material and texture study using warm tones to capture surface variation.",
  },
  {
    src: img6,
    caption:
      "High-contrast charcoal study focusing on dramatic lighting and depth.",
  },
  {
    src: img7,
    caption:
      "Geometric abstraction exploring repetition, volume, and form construction.",
  },
  {
    src: img8,
    caption:
      "Complex still life rendering focusing on value range and material differentiation.",
  },
  {
    src: img9,
    caption:
      "Narrative drawing capturing human interaction and emotional expression.",
  },
  {
    src: img10,
    caption:
      "Figure study exploring inverted composition and anatomical structure.",
  },
  {
    src: img11,
    caption:
      "Pattern and depth experiment combining organic forms with graphic backgrounds.",
  },
  {
    src: img12,
    caption:
      "Decorative illustration exploring color, rhythm, and cultural motifs.",
  },
  {
    src: img13,
    caption:
      "Landscape study focusing on atmospheric perspective and tonal depth.",
  },
];

export default function AD113DrawingExercise() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % drawings.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + drawings.length) % drawings.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const currentDrawing = drawings[currentIndex];

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/exercises"
          className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-100 mb-12 transition-colors duration-300"
        >
          <ArrowLeft size={20} />
          Back to Exercises
        </Link>

        <section className="mb-12">
          <h1 className="text-5xl md:text-6xl text-white mb-6 leading-tight">
            Fragments of Observation
          </h1>

          <p className="text-2xl text-slate-300 mb-8 leading-relaxed">
            A series of observational drawings exploring form, light, texture, and spatial structure.
          </p>

          <div className="bg-slate-900/50 border border-purple-500/20 rounded-xl p-6">
            <p className="text-sm text-purple-300 mb-1 uppercase tracking-wide">
              Course Info
            </p>
            <p className="text-white text-lg">
              AD 11300 - Basic Drawing
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="relative bg-slate-950/70 border border-slate-700/50 rounded-2xl overflow-hidden shadow-xl">
            <div className="h-[620px] flex items-center justify-center p-6">
              <img
                src={currentDrawing.src}
                alt={`Drawing ${currentIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 hover:bg-purple-600 text-white flex items-center justify-center transition"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 hover:bg-purple-600 text-white flex items-center justify-center transition"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="mt-6 bg-slate-900/50 border border-slate-700/50 rounded-xl p-6">
            <p className="text-purple-300 text-sm mb-2">
              Drawing {currentIndex + 1} / {drawings.length}
            </p>
            <p className="text-slate-300 leading-relaxed">
              {currentDrawing.caption}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {drawings.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition ${
                  currentIndex === index
                    ? "bg-purple-400 scale-125"
                    : "bg-slate-600 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}