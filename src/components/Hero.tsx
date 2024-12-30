import React from 'react';
import { ArrowRight, FileDown } from 'lucide-react';
import { motion } from 'framer-motion';
import KrishanImage from '../assets/Krishan_Gupta.jpg';
import ResumeFile from '../assets/KrishanGupta_Resume.pdf';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
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
    <motion.section 
      id="home" 
      className="min-h-screen flex items-center pt-24 bg-gradient-to-b from-white to-gray-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="text-center md:text-left w-full"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
              variants={itemVariants}
            >
              Hi, I'm <span className="gradient-text">Krishan Gupta</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0"
              variants={itemVariants}
            >
              A passionate Data Scientist crafting innovative solutions through AI and Machine Learning
            </motion.p>

            <motion.div 
              className="flex gap-4 justify-center md:justify-start"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's talk <ArrowRight size={20} />
              </motion.a>
              <motion.button
                onClick={handleResumeDownload}
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition duration-300 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileDown className="mr-2" /> Resume
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
    </motion.section>
  );
};

export default Hero;