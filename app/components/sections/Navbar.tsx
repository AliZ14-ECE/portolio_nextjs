import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navbarSections = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 `}>
      <div className="w-full h-20 sticky top-0 shadow-md bg-gray-800">
        <div className="container mx-auto px-4 h-full flex justify-between items-center">
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-2xl font-bold text-gray-900 dark:text-white"
            >
              Ali Zahir
            </a>
          </div>

          <div className="flex items-center justify-center h-full">
            {/* <Logo /> */}
            <ul className="hidden sm:flex gap-x-6 ">
              {navbarSections.map((section) => (
                <li key={section.name}>
                  <a
                    href={section.href}
                    className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {section.name}
                  </a>
                </li>
              ))}
            </ul>
            {/* <Button /> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
