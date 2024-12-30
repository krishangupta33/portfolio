import React from 'react';
import { Github, Linkedin, Mail, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Blog Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Blog</h4>
            <div className="flex flex-col space-y-2">
              <a 
                href="https://medium.com/@krishangupta33" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition text-sm"
              >
                Medium Articles
              </a>
            </div>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
            <div className="flex space-x-4 items-center">
              <a 
                href="https://github.com/krishangupta" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-600 transition"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/krishangupta/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-600 transition"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:krishangupta33@gmail.com" 
                className="text-gray-400 hover:text-blue-600 transition"
              >
                <Mail size={20} />
              </a>
              
            </div>
            <p className="text-gray-500 text-xs mt-4">
              {new Date().getFullYear()} Krishan Gupta. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
