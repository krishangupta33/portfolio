import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            className="text-2xl font-bold text-gray-800 flex items-center gap-2"
          >
            <span className="bg-blue-600 text-white px-2 py-1 rounded-md">KG</span>
            <span className="text-gray-600 text-lg font-medium">Krishan Gupta</span>
          </a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLinks />
            <SocialLinks />
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            <div className="flex flex-col gap-4">
              <NavLinks />
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

const NavLinks = () => (
  <>
    {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
      <a
        key={item}
        href={`#${item.toLowerCase()}`}
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        {item}
      </a>
    ))}
  </>
);

const SocialLinks = () => (
  <div className="flex items-center gap-4">
    <a 
      href="https://github.com/KrishanGupta33" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-gray-600 hover:text-gray-900"
    >
      <Github size={20} />
    </a>
    <a 
      href="https://www.linkedin.com/in/krishangupta33/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-gray-600 hover:text-gray-900"
    >
      <Linkedin size={20} />
    </a>
    <a 
      href="mailto:krishangupta33@gmail.com" 
      className="text-gray-600 hover:text-gray-900"
    >
      <Mail size={20} />
    </a>
  </div>
);

export default Header;