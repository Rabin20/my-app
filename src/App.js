import React, { useState, useEffect } from "react";
import "./App.css";

// Import your images
import slide1 from "./1.jpeg";
import slide2 from "./1.jpeg";
import slide3 from "./1.jpeg";
import slide4 from "./1.jpeg";

const slides = [
  {
    id: 1,
    title: "LEEP 9th GRADE STUDENT DEVELOPMENT PLAN",
    description: "CLICK HERE TO ENTER THE JOURNEY",
    image: slide1,
  },
  {
    id: 2,
    title: "",
    description:
      "Welcome to LEEP’s 9th Grade Development Plans! Get ready for an awesome journey built just for you. We’ll give you the tools, skills, and a simple plan to help you reach your goals in school and in life. This is your first step toward making your dreams real, and we’re here to help you the whole way. Let’s get started and make it happen!",
    image: slide2,
  },
  {
    id: 3,
    title: "",
    description:
      "The development process starts with you! You know your interests, skills, and goals best.                         By understanding what's important to you, you can take control of your future and choose options that fit your priorities.",
    image: slide3,
  },
  {
    id: 4, // Custom Slide (presentation-style content)
    customContent: true,
  },
  {
    id: 5, // Form Slide
    form: true,
  },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Keyboard navigation for slides
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel">
      <div className="slide">
        {slides[currentSlide].customContent ? (
          <div className="slide-container">
            <div className="slide-header">
              <h1>Your NorthStar Goal is the ULTIMATE GOAL you want to accomplish by the end of high school.</h1>
            </div>
            <div className="slide-content">
              <div className="goal-box short-term">
                <h2>“Current Grade” NorthStar Goal <span>(Short-Term)</span></h2>
                <p>
                  This goal is all about staying on track and doing your best in your current grade. 
                  It focuses on your schoolwork, personal growth, and activities that will help you succeed this year.
                </p>
              </div>
              <div className="goal-box long-term">
                <h2>“Graduation” NorthStar Goal <span>(Long-Term)</span></h2>
                <p>
                  This is your big dream for when you finish school. It’s the goal you're aiming for, 
                  with steps you take now and later to help you reach it and succeed.
                </p>
              </div>
            </div>
            <div className="slide-footer">
              <p>
                Once you set your goals, think about the steps that will help you get there. These steps could be going to a 
                LEEP workshop, studying on your own, doing special projects, or completing assignments that help you grow.
              </p>
              <button className="cta-button">CLICK TO MOVE FORWARD ON YOUR JOURNEY</button>
            </div>
          </div>
        ) : slides[currentSlide].form ? (
          <div className="form-section">
            <h1>Fill Out Your Details</h1>
            <p>Please fill out the form below to continue your journey.</p>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="grade">Grade:</label>
                <input type="text" id="grade" placeholder="Enter your grade" />
              </div>
              <div className="form-group">
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        ) : (
          <>
            <div className="text-section">
              <h1>{slides[currentSlide].title}</h1>
              <p>{slides[currentSlide].description}</p>
            </div>
            <div className="image-section">
              {slides[currentSlide].image && (
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
