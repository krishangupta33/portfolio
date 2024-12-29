import React from 'react';
import { ArrowRight, FileDown } from 'lucide-react';
import { motion } from 'framer-motion';
import KrishanImage from '../assets/Krishan_Gupta.jpg';
import ResumeFile from '../assets/KrishanGupta_Resume.pdf';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = ResumeFile;
    link.download = 'Krishan_Gupta_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="flex-1 text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={textVariants}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Hi, I'm <span className="gradient-text">Krishan Gupta</span>
              </h1>
            </motion.div>
            
            <motion.div variants={textVariants}>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
                A passionate Data Scientist crafting innovative solutions through AI and Machine Learning
              </p>
            </motion.div>

            <motion.div 
              className="flex gap-4 justify-center md:justify-start"
              variants={textVariants}
            >
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's talk <ArrowRight size={20} />
              </motion.a>
              <motion.a
                href="#projects"
                className="px-8 py-4 border-2 border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.button
                onClick={handleResumeDownload}
                className="px-8 py-4 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume <FileDown size={20} />
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="relative z-10"
                animate={{
                  y: [-10, 10, -10]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.img 
                  src={KrishanImage} 
                  alt="Krishan Gupta" 
                  className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover border-4 border-white shadow-xl"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;