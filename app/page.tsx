"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";

export default function Home() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(0);
  const hasSnappedRef = useRef(false);
  const hasReturnedRef = useRef(false);
  const lastYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const lastY = lastYRef.current;
      const isScrollingUp = y < lastY;
      const about = document.getElementById("about");
      const aboutTop = about?.offsetTop ?? Number.POSITIVE_INFINITY;
      // console.log("Scroll Y:", y);
      // console.log("Last Y:", lastY);
      // console.log("About Top:", aboutTop);
      // console.log("Is Scrolling Up:", isScrollingUp);
      // console.log("Has Returned:", hasReturnedRef.current);
      // console.log("Has Snapped:", hasSnappedRef.current);
      // console.log("Has Scrolled:", hasScrolled);
      // console.log("---");


      if (y <= 50) {
        setHasScrolled(false);
        hasSnappedRef.current = false;
        hasReturnedRef.current = false;
        lastYRef.current = 0;
        return;
      }

      if (y > 50 && !hasScrolled) { //??? 
        setHasScrolled(true);
      }

      // Return to top when scrolling up past 50px above About (md+ only), once per session
      if (
        isScrollingUp &&
        window.innerWidth >= 768 &&
        !hasReturnedRef.current &&
        y <= Math.max(0, aboutTop - 50)
      ) {
        hasReturnedRef.current = true;
        // console.log("Returning to top");
        requestAnimationFrame(() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        
        );
      }

      lastYRef.current = y;
    };

    const updateSidebarWidth = () => {
      // Match the sidebar widths from Hero component
      if (window.innerWidth >= 1280) {
        setSidebarWidth(480); // xl
      } else if (window.innerWidth >= 1024) {
        setSidebarWidth(400); // lg
      } else if (window.innerWidth >= 768) {
        setSidebarWidth(320); // md
      } else {
        setSidebarWidth(0); // mobile - no sidebar
      }
    };

    // const scrollToSection = (id: string) => {
    //   const element = document.getElementById(id);
    //   element?.scrollIntoView({ behavior: "smooth" });
    // };

    updateSidebarWidth();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateSidebarWidth);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateSidebarWidth);
    };
  }, [hasScrolled]);

  // fire the snap once when the sidebar mode first activates (md+ only)
  useEffect(() => {
    if (!hasScrolled || hasSnappedRef.current) return;
    if (window.innerWidth < 768) return;

    const about = document.getElementById("about");
    if (about) {
      hasSnappedRef.current = true;
      requestAnimationFrame(() =>
        about.scrollIntoView({ behavior: "smooth", block: "start" })
      );
    }
  }, [hasScrolled]);

  // Smooth spring transition matching Hero
  const smoothTransition = {
    type: "spring" as const,
    stiffness: 100,
    damping: 20,
    mass: 1,
  };

  return (
    <main className="min-h-screen bg-background">
      <Hero />
      {/* Content wrapper - animates smoothly when sidebar appears */}
      <motion.div
        animate={{
          marginLeft: hasScrolled && sidebarWidth > 0 ? sidebarWidth : 0,
        }}
        transition={smoothTransition}
      >
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </motion.div>
    </main>
  );
}
