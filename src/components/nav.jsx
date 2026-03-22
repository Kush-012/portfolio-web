import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "DSA", path: "/dsasheet" },
    { name: "Blogs", path: "/blogs" },
    { name: "HR Qs", path: "/hrqs" },
    { name: "About", path: "/about" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          
<Link
  to="/"
  className="flex items-center text-2xl sm:text-3xl font-bold"
>
  <img
    src="/logo.png"
    alt="CoderEarth logo"
    className="h-8 w-8 sm:h-9 sm:w-9 object-contain mr-2"
  />
  <span className="text-white">Coder</span>
  <span className="text-green-400">Earth</span>
</Link>




          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 text-lg font-medium transition-colors
                  ${
                    isActive(item.path)
                      ? "text-white after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-10 after:h-[3px] after:bg-green-400 after:rounded-full"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-4 py-4 space-y-2 bg-gray-900 border-t border-gray-800">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl text-lg font-medium transition
                ${
                  isActive(item.path)
                    ? "text-white bg-gray-800 border-l-4 border-green-400"
                    : "text-gray-300 hover:bg-gray-800/60"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
