import React, { useState } from 'react';
import { GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Education = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const educationDetails = [
    {
      degree: 'Master of Management in Analytics',
      institution: 'McGill University, Desautels Faculty of Management',
      location: 'Montreal, Canada',
      period: 'July 2023 – Aug 2024',
      gpa: '3.66/4',
      achievements: [
        'Awarded an entrance scholarship award of $8000',
        'MMA Representative, McGill Case Competition Association (MCCA)',
      ],
      coursework: [
        'Advanced Data Science Concepts',
        'Machine Learning',
        'Deep Learning',
        'Statistics',
        'Data Mining',
        'Data Visualization',
        'Computer Vision',
        'Cloud Computing',
        'Artificial Intelligence',
        'Ethics',
        'Data Modeling',
        'Data Analytics',
      ],
    },
    {
      degree: 'Bachelor of Technology (B.Tech.), Mechanical Engineering',
      institution: 'Delhi Technological University (formerly Delhi College of Engineering)',
      location: 'Delhi, India',
      period: 'Aug 2014 – July 2018',
      gpa: '8.01/10',
      coursework: [
        'Information Technology',
        'Programming in C',
        'Mathematics',
        'Numerical & Quantitative Techniques',
      ],
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      x: -50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {educationDetails.map((edu, index) => (
            <motion.div 
              key={index} 
              className="relative pl-8 pb-12 last:pb-0"
              variants={itemVariants}
            >
              {index !== educationDetails.length - 1 && (
                <motion.div 
                  className="absolute left-[11px] top-[28px] bottom-0 w-[2px] bg-gray-200"
                  initial={{ height: 0 }}
                  animate={{ height: '100%' }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              )}
              
              <motion.div 
                className="absolute left-0 top-1.5 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <GraduationCap size={14} className="text-white" />
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-sm cursor-pointer"
                onClick={() => toggleExpand(index)}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                    <div className="text-blue-600 font-medium mb-2">{edu.institution}, {edu.location}</div>
                    <div className="text-gray-500 text-sm">{edu.period} | GPA: {edu.gpa}</div>
                  </div>
                  <div>
                    {expandedIndex === index ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </div>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 overflow-hidden"
                    >
                      {edu.achievements && (
                        <div className="mb-2">
                          <h4 className="font-semibold text-gray-800 mb-1">Achievements:</h4>
                          <ul className="text-gray-600 list-disc pl-5 space-y-1">
                            {edu.achievements.map((ach, i) => (
                              <li key={i}>{ach}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Relevant Coursework:</h4>
                        <p className="text-gray-600">{edu.coursework.join(', ')}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
