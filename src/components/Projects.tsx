import React, { useState } from 'react';
import { Github, ExternalLink, ChevronDown, ChevronUp, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import project images
import xgboostImage from '../assets/xgboost.png';
import langchainImage from '../assets/langchain.png';
import neuralnetImage from '../assets/neuralnet.png';
import transformerImage from '../assets/transformer.png';

const Projects = () => {
  const projects = [
    {
      title: 'Customer Churn Prediction Using Ensemble Models',
      description: [
        'Developed and implemented an XGBoost machine learning model for customer churn prediction in the telecommunications industry.',
        'Improved model performance by 25% through hyperparameter tuning and feature engineering.',
        'Deployed the model using Flask and Docker for real-time predictions.'
      ],
      image: xgboostImage,
      technologies: ['XGBoost', 'Machine Learning'],
      github: 'https://github.com/krishangupta33/Deep-Learning-vs-Traditional-ML/tree/main',
      live: 'https://github.com/krishangupta33/Deep-Learning-vs-Traditional-ML/blob/main/Customer%20Churn-LighGBM%20vs%20Deep%20Learning.ipynb',
    },
    {
      title: 'Comments Toxicity Analysis',
      description: [
        'Developed a deep learning model to classify and detect toxic comments using advanced NLP techniques.',
        'Achieved an accuracy of 95% on the test dataset using a combination of LSTM and CNN architectures.',
        'Deployed the model as a web application using Streamlit for real-time predictions.'
      ],
      image: neuralnetImage,
      technologies: ['TensorFlow', 'Deep Learning', 'NLP'],
      github: 'https://github.com/krishangupta33/Comment-Toxicity-Analysis-Using-Deep-Learning',
      live: 'https://comment-toxicity-analysis.streamlit.app/',
    },
    {
      title: 'Retrieval Based Chat System',
      description: [
        'Built a sophisticated retrieval-based chat system leveraging advanced AI technologies for intelligent conversational interactions.',
        'Integrated the system with a knowledge graph database for accurate and informative responses.',
        'Deployed the system as a web application using FastAPI and Docker for real-time interactions.'
      ],
      image: langchainImage,
      technologies: ['RAG', 'LangChain', 'Vector Database', 'FastAPI', 'Llama3', 'OpenAI ChatGPT', 'Big Data'],
      github: 'https://github.com/krishangupta33/Langchain',
    },
    {
      title: 'Finetuning Transformer for Text Classification',
      description: [
        'Implemented a fine-tuned transformer model for multi-class text classification using state-of-the-art NLP techniques.',
        'Achieved an accuracy of 90% on the test dataset using a combination of pre-training and fine-tuning.',
        'Deployed the model as a web application using Streamlit for real-time predictions.'
      ],
      image: transformerImage,
      technologies: ['PyTorch Lightning', 'Transformer', 'Text Classification'],
      github: 'https://github.com/krishangupta33/Multi-class-Text-Classification-using-Fine-Tuned-GPT2-Transformer',
    },
  ];

  const [selectedProject, setSelectedProject] = useState<typeof projects[number] | null>(null);

  const openProjectModal = (project: typeof projects[number]) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 0.2,
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl cursor-pointer"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5 }
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                onClick={() => openProjectModal(project)}
              >
                <div className="cursor-pointer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeProjectModal}
          >
            <motion.div 
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={closeProjectModal}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-10"
              >
                <X size={24} />
              </button>

              <div className="grid md:grid-cols-2">
                {/* Project Image */}
                <motion.div 
                  className="md:col-span-1 h-full flex items-center justify-center bg-gray-100"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-full h-[500px] flex items-center justify-center p-4">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </motion.div>

                {/* Project Details */}
                <motion.div 
                  className="md:col-span-1 p-8"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                  
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {selectedProject.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>

                  <motion.ul 
                    className="list-disc list-inside text-gray-700 space-y-3 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {selectedProject.description.map((point, pointIndex) => (
                      <motion.li 
                        key={pointIndex} 
                        className="text-base"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 + pointIndex * 0.1 }}
                      >
                        {point}
                      </motion.li>
                    ))}
                  </motion.ul>

                  <motion.div 
                    className="flex space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    {selectedProject.github && (
                      <a 
                        href={selectedProject.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition"
                      >
                        <Github className="mr-2" size={20} />
                        GitHub
                      </a>
                    )}
                    {selectedProject.live && (
                      <a 
                        href={selectedProject.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded hover:bg-blue-200 transition"
                      >
                        <ExternalLink className="mr-2" size={20} />
                        Live Demo
                      </a>
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;