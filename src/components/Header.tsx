import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const scrollToSection = (sectionId: string) => {
  // Only scroll if on the home page
  if (window.location.pathname === '/') {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      // Redirect to home page first
      window.location.href = `/#${sectionId}`;
    } else {
      scrollToSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-2xl font-bold text-gray-800 flex items-center gap-2"
          >
            <span className="bg-blue-600 text-white px-2 py-1 rounded-md">KG</span>
            <span className="text-gray-600 text-lg font-medium">Krishan Gupta</span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLinks 
              onNavClick={handleNavClick} 
              isMobile={false} 
            />
            <SocialLinks />
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            <div className="flex flex-col gap-4">
              <NavLinks 
                onNavClick={handleNavClick} 
                isMobile={true} 
              />
              <div className="flex justify-center gap-4 pt-4 border-t">
                <SocialLinks />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

interface NavLinksProps {
  onNavClick: (sectionId: string) => void;
  isMobile: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ onNavClick, isMobile }) => {
  const location = useLocation();

  const navLinkClass = (isMobile ? 'block text-center py-2 ' : '') + 
    'text-gray-600 hover:text-blue-600 transition';

  return (
    <>
      {location.pathname === '/' ? (
        <>
          <button 
            onClick={() => onNavClick('home')} 
            className={navLinkClass}
          >
            Home
          </button>
          <button 
            onClick={() => onNavClick('about')} 
            className={navLinkClass}
          >
            About
          </button>
          <button 
            onClick={() => onNavClick('experience')} 
            className={navLinkClass}
          >
            Experience
          </button>
          <button 
            onClick={() => onNavClick('projects')} 
            className={navLinkClass}
          >
            Projects
          </button>
          <button 
            onClick={() => onNavClick('contact')} 
            className={navLinkClass}
          >
            Contact
          </button>
        </>
      ) : (
        <>
          <Link to="/" className={navLinkClass}>Home</Link>
          <Link to="/#about" className={navLinkClass}>About</Link>
          <Link to="/#experience" className={navLinkClass}>Experience</Link>
          <Link to="/#projects" className={navLinkClass}>Projects</Link>
          <Link to="/#contact" className={navLinkClass}>Contact</Link>
        </>
      )}
      <a 
        href="https://medium.com/@krishangupta33" 
        target="_blank" 
        rel="noopener noreferrer"
        className={navLinkClass}
      >
        Blog
      </a>
    </>
  );
};

const SocialLinks = () => (
  <>
    <a 
      href="https://github.com/krishangupta" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-gray-600 hover:text-blue-600 transition"
    >
      <Github size={20} />
    </a>
    <a 
      href="https://www.linkedin.com/in/krishangupta/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-gray-600 hover:text-blue-600 transition"
    >
      <Linkedin size={20} />
    </a>
    <a 
      href="mailto:krishangupta33@gmail.com" 
      className="text-gray-600 hover:text-blue-600 transition"
    >
      <Mail size={20} />
    </a>
  </>
);

export default Header;