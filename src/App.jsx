/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Footer from "./components/Footer";
import LoaderSVG from "./components/LoaderSvg"; // Import the LoaderSVG component

function App() {
  const [isLoading, setIsLoading] = useState(true); // State to track if loading
  const [progress, setProgress] = useState(0); // State to track the loading progress

  useEffect(() => {
    // Simulate a loading progress with a timer
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval); // Stop the loading when progress reaches 100%
          setIsLoading(false); // Hide the loader when loading is complete
          return 100;
        }
        return prevProgress + 10; // Increment the progress by 10
      });
    }, 500); // Update progress every 500ms
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen ">
      {/* Loader container */}
      <div className="flex items-center justify-center w-[200px] h-[200px]">
        <LoaderSVG progress={progress} /> {/* Loader SVG with dynamic progress */}
      </div>
    </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="css-selector bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
