"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/app/data/portfolio";
import { ArrowRight, Github, Linkedin, Mail, User } from "lucide-react";

const Hero = () => {
  const [isInSidebar, setIsInSidebar] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Toggle based on scroll position - returns to center when at top
      setIsInSidebar(window.scrollY > 50);

      // Update active section
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    { icon: Github, href: portfolioData.personal.github, label: "GitHub" },
    {
      icon: Linkedin,
      href: portfolioData.personal.linkedin,
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: `mailto:${portfolioData.personal.email}`,
      label: "Email",
    },
  ];

  return (
    <>
      {/* Desktop */}
      <motion.div
        className="fixed top-0 left-0 bottom-0 z-40 hidden md:flex flex-col bg-background"
        animate={{
          width: isInSidebar ? "min(400px, 30vw)" : "100%",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          borderRight: isInSidebar ? "1px solid rgba(39, 39, 42, 0.5)" : "none",
        }}
      >
        {/* Background effects */}
        <motion.div
          className="absolute inset-0 bg-linear-to-br from-background via-background to-accent/5 pointer-events-none"
          animate={{ opacity: isInSidebar ? 0 : 1 }}
          transition={{ duration: 0.4 }}
        />
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl pointer-events-none"
          animate={{ opacity: isInSidebar ? 0 : 8 }}
          transition={{ duration: 0.4 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none"
          animate={{ opacity: isInSidebar ? 0 : 8 }}
          transition={{ duration: 0.4 }}
        />

        {/* Content */}
        <motion.div
          className={`relative z-10 h-full flex flex-col px-8 ${isInSidebar ? 'justify-between items-start pt-20 pb-20' : 'justify-center items-center pt-0 pb-0'} `}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          layout
        >
          {/* Avatar */}
          <motion.div
            className="rounded-full bg-linear-to-br from-accent/30 to-secondary/30 border-4 border-accent/20 flex items-center justify-center"
            animate={{
              width: isInSidebar ? 64 : 112,
              height: isInSidebar ? 64 : 112,
              // marginLeft: isInSidebar ? 0 : "auto",
              // marginRight: isInSidebar ? 0 : "auto",
              marginBottom: isInSidebar ? 16 : 24,
            }}
            layout
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* TODO: Replace with actual image later */}
            <User
              className="text-accent/60"
              style={{
                width: isInSidebar ? 32 : 56,
                height: isInSidebar ? 32 : 56,
                transition: "all 0.5s ease-in-out",
              }}
            />
          </motion.div>

          {/* Status badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent"
            animate={{
              opacity: isInSidebar ? 0 : 1,
              height: isInSidebar ? 0 : "auto",
              marginBottom: isInSidebar ? 0 : 20,
              padding: isInSidebar ? 0 : undefined,
            }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
            layout
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm font-medium">
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="font-bold tracking-tight"
            animate={{
              fontSize: isInSidebar ? "1.5rem" : "3rem",
              marginBottom: isInSidebar ? 4 : 12,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            layout
          >
            {!isInSidebar && (
              <span className="text-text-primary">Hi, I&apos;m </span>
            )}
            <span className="gradient-text">{portfolioData.personal.name}</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            className="text-text-secondary font-medium"
            animate={{
              fontSize: isInSidebar ? "0.875rem" : "1.25rem",
              marginBottom: isInSidebar ? 8 : 12,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            layout
          >
            {portfolioData.personal.role}
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-text-muted leading-relaxed"
            animate={{
              fontSize: isInSidebar ? "0.8rem" : "1rem",
              marginBottom: isInSidebar ? 24 : 28,
              maxWidth: isInSidebar ? "100%" : "32rem",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            layout
          >
            {portfolioData.personal.description}
          </motion.p>

          {/* Navigation - only in sidebar */}
          <motion.nav
            animate={{
              opacity: isInSidebar ? 1 : 0,
              height: isInSidebar ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
            layout
          >
            <ul className="space-y-0.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`group flex items-center py-2 transition-colors ${
                        isActive
                          ? "text-text-primary"
                          : "text-text-secondary hover:text-text-primary"
                      }`}
                    >
                      <span
                        className={`h-px mr-3 transition-all duration-200 ${
                          isActive
                            ? "w-12 bg-text-primary"
                            : "w-6 bg-text-muted group-hover:w-12 group-hover:bg-text-primary"
                        }`}
                      />
                      <span className="text-xs font-bold uppercase tracking-widest">
                        {link.name}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.nav>

          {/* CTA Buttons - only in center */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3"
            animate={{
              opacity: isInSidebar ? 0 : 1,
              height: isInSidebar ? 0 : "auto",
              marginBottom: isInSidebar ? 0 : 32,
            }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden", justifyContent: "center" }}
            layout
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-xl text-white bg-linear-to-r from-accent to-accent-dark shadow-lg shadow-accent/25 transition-all duration-200"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-xl text-text-primary bg-surface border border-border hover:border-accent/50 transition-all duration-200"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex gap-3"
          animate={{ justifyContent: isInSidebar ? "flex-start" : "center" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          layout
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={
                social.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className={`rounded-lg text-text-secondary hover:text-accent transition-colors ${
                isInSidebar
                  ? "p-1.5"
                  : "p-2.5 bg-surface-subtle border border-transparent hover:border-accent/20"
              }`}
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ opacity: isInSidebar ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        style={{ pointerEvents: isInSidebar ? "none" : "auto" }}
        layout
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-text-muted hover:text-accent transition-colors"
        >
          <span className="text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 border-current flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 bg-current rounded-full" />
          </motion.div>
        </a>
      </motion.div>

      {/* Mobile */}
      <div className="md:hidden">
        <section
          className={`fixed inset-0 z-40 flex items-center justify-center bg-background transition-opacity duration-300 ${
            isInSidebar ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="absolute inset-0 bg-linear-to-br from-background via-background to-accent/5" />
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />

          <div className="relative z-10 text-center px-6 max-w-md">
            <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-linear-to-br from-accent/30 to-secondary/30 border-4 border-accent/20 flex items-center justify-center">
              <User className="w-10 h-10 text-accent/60" />
            </div>

            <h1 className="text-3xl font-bold tracking-tight mb-2">
              <span className="text-text-primary">Hi, I&apos;m </span>
              <span className="gradient-text">
                {portfolioData.personal.name}
              </span>
            </h1>

            <p className="text-base text-text-secondary font-medium mb-2">
              {portfolioData.personal.role}
            </p>

            <p className="text-sm text-text-muted leading-relaxed mb-6">
              {portfolioData.personal.description}
            </p>

            <div className="flex flex-col gap-2 mb-6">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-xl text-white bg-linear-to-r from-accent to-accent-dark"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-xl text-text-primary bg-surface border border-border"
              >
                Get In Touch
              </a>
            </div>

            <div className="flex justify-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="p-2 rounded-lg bg-surface-subtle text-text-secondary"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
            <a
              href="#about"
              className="flex flex-col items-center gap-1 text-text-muted"
            >
              <span className="text-xs">Scroll</span>
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-4 h-6 rounded-full border-2 border-current flex items-start justify-center p-0.5"
              >
                <div className="w-0.5 h-1.5 bg-current rounded-full" />
              </motion.div>
            </a>
          </div>
        </section>

        <header
          className={`fixed top-0 left-0 right-0 z-50 glass border-b border-border/50 px-4 py-2.5 transition-all duration-300 ${
            isInSidebar
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-linear-to-br from-accent/30 to-secondary/30 border border-accent/20 flex items-center justify-center">
                <User className="w-4 h-4 text-accent/60" />
              </div>
              <div>
                <h1 className="text-sm font-bold text-text-primary">
                  {portfolioData.personal.name}
                </h1>
                <p className="text-xs text-text-muted">
                  {portfolioData.personal.role}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="p-1.5 text-text-muted hover:text-accent transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </header>
      </div>

      <div className="h-screen" />
    </>
  );
};

export default Hero;
