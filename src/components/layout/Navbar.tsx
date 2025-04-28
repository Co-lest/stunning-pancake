import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          <NavLink 
            to="/" 
            className="text-xl font-bold text-primary-600"
            onClick={closeMenu}
          >
            Portfolio
          </NavLink>
  
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/projects" className="nav-link">Projects</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </nav>
  
          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:your-email@example.com" className="text-gray-600 hover:text-primary-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>
  
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800 focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
  
        {/* Mobile Menu */}
        <div 
          className={`md:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ top: '60px' }}
        >
          <nav className="flex flex-col p-6 space-y-6">
            <NavLink to="/" className="nav-link text-xl" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/about" className="nav-link text-xl" onClick={closeMenu}>About</NavLink>
            <NavLink to="/projects" className="nav-link text-xl" onClick={closeMenu}>Projects</NavLink>
            <NavLink to="/contact" className="nav-link text-xl" onClick={closeMenu}>Contact</NavLink>
            
            <div className="flex items-center gap-6 mt-8">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:your-email@example.com" className="text-gray-600 hover:text-primary-600 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </nav>
        </div>
      </header>
    );
} 

export default Navbar;