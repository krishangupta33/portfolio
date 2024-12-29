import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

// Import project images
import xgboostImage from '../assets/xgboost.png';
import langchainImage from '../assets/langchain.png';
import neuralnetImage from '../assets/neuralnet.png';
import transformerImage from '../assets/transformer.png';

const Projects = () => {
  const projects = [
    {
      title: 'Customer Churn Prediction Using Ensemble Models',
      description: 'Developed and implemented an XGBoost machine learning model for customer churn prediction in the telecommunications industry.',
      image: xgboostImage,
      technologies: ['XGBoost', 'Machine Learning'],
      github: 'https://github.com/krishangupta33/Deep-Learning-vs-Traditional-ML/tree/main',
      live: 'https://github.com/krishangupta33/Deep-Learning-vs-Traditional-ML/blob/main/Customer%20Churn-LighGBM%20vs%20Deep%20Learning.ipynb',
    },
    {
      title: 'Comments Toxicity Analysis',
      description: 'Developed a deep learning model to classify and detect toxic comments using advanced NLP techniques.',
      image: neuralnetImage,
      technologies: ['TensorFlow', 'Deep Learning', 'NLP'],
      github: 'https://github.com/krishangupta33/Comment-Toxicity-Analysis-Using-Deep-Learning',
      live: 'https://comment-toxicity-analysis.streamlit.app/',
    },
    {
      title: 'Retrieval Based Chat System',
      description: 'Built a sophisticated retrieval-based chat system leveraging advanced AI technologies for intelligent conversational interactions.',
      image: langchainImage,
      technologies: ['RAG', 'LangChain', 'Vector Database', 'FastAPI', 'Llama3', 'OpenAI ChatGPT', 'Big Data'],
      github: 'https://github.com/krishangupta33/Langchain',
    },
    {
      title: 'Finetuning Transformer for Text Classification',
      description: 'Implemented a fine-tuned transformer model for multi-class text classification using state-of-the-art NLP techniques.',
      image: transformerImage,
      technologies: ['PyTorch Lightning', 'Transformer', 'Text Classification'],
      github: 'https://github.com/krishangupta33/Multi-class-Text-Classification-using-Fine-Tuned-GPT2-Transformer',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
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
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              variants={projectVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 mt-4">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <Github className="mr-2" size={20} />
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink className="mr-2" size={20} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;