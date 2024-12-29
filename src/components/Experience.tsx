import React, { useState } from 'react';
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences = [
    {
      title: 'Data Scientist',
      company: 'Canadian Tire Financial Services (Canadian Tire Bank)',
      period: 'Sep 2024 – Present',
      description: [
        'Facilitated the bank\'s transition from SAS-based credit scoring models to Python-based Scorecard models, significantly reducing the model development time and expediting the training process for scorecard models.',
        'Identified the causes of performance degradation in a credit scoring model developed in 2017 and successfully refactored the scores, ensuring the model\'s deviation from the benchmark fell within acceptable limits.'
      ],
    },
    {
      title: 'Graduate Research Assistant (Data Science)',
      company: 'McGill University',
      period: 'Feb 2024 – Aug 2024',
      description: [
        'Developed and deployed a computer vision model using the Gemini API for animal identification in the Amazon rainforest, integrated with Google Cloud via CI/CD pipelines for storing output in Big Query database.',
        'Implemented ETL processes to handle data transformation and loading, ensuring efficient data flow from image captures to model input.'
      ],
    },
    {
      title: 'Data Scientist',
      company: 'Proctor & Gamble',
      period: 'Sep 2023 – May 2024',
      description: [
        'Performed regression analysis on historical marketing campaigns to optimize budget allocation for maximizing ROAS (Return on Ad Spend), leading to estimated annual savings of over 200,000 CAD.',
        'Trained and deployed a LightGBM Model in Databricks using model serving features and MLOps techniques to predict customer trade-up paths, resulting in a 10% increase in revenue per customer by increasing customer engagement.'
      ],
    },
    {
      title: 'Data Scientist',
      company: 'Protium Finance',
      period: 'Dec 2022 – July 2023',
      description: [
        'Applied clustering algorithms for customer analytics and segment customer risk profiles, expanding the customer base by 60%. Developed a Business Intelligence dashboard in PowerBI to identify delinquent customers, reducing EMI bounce rates by 20%.',
        'Analyzed text data to compare thousands of credit score reports from different credit bureaus, resulting in a 30% cost saving by selecting a cost-effective bureau and enhancing business performance.'
      ],
    },
    {
      title: 'Data Analyst',
      company: 'Udaan Capital',
      location: 'Bengaluru, India',
      period: 'Aug 2022 – Dec 2022',
      description: [
        'Employed SQL and Python to enact Reserve Bank of India\'s compulsory NPA guidelines, contributing to the seamless operation of business activities.',
        'Built an Asset Liability Management Dashboard to keep track of future flow of funds leveraging Google Sheets and data flow automation.'
      ],
    },
    {
      title: 'Data Analyst',
      company: 'Freshok',
      location: 'Gurugram, India',
      period: 'Jan 2022 – May 2022',
      description: [
        'Created dashboards of product-level P&L, Gross Margins, and Inventory on Redash using SQL and BigQuery.',
        'Analyzed past year\'s pricing data of fruits and vegetables in Advanced Excel and PowerBI to conclude a business decision of investing 110,000 CAD.'
      ],
    },
    {
      title: 'Co-Founder',
      company: 'Kramofire Manufacturer and Trader Pvt Ltd',
      location: 'Delhi, India',
      period: 'Jun 2019 – Jan 2022',
      description: [
        'Developed a pricing model based on inventory and demand, resulting in a 25% increase in gross profit.',
        'Optimized inventory turnover with a demand forecasting model, reducing capital requirements by 10%.'
      ],
    },
    {
      title: 'Mechanical Engineer (Research & Development)',
      company: 'Tata Motors',
      location: 'Pune, India',
      period: 'Aug 2018 – May 2019',
      description: [
        'Developed new test rigs for the testing of Electric Vehicle transmissions.',
        'Upgraded old test rigs and saved 80% in capital expenditure costs.'
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
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="relative pl-8 pb-12 last:pb-0"
              variants={itemVariants}
            >
              {index !== experiences.length - 1 && (
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
                <Briefcase size={14} className="text-white" />
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
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <div className="text-blue-600 font-medium mb-2">
                      {exp.company}
                      {exp.location && <span className="text-gray-500 text-sm ml-2">({exp.location})</span>}
                    </div>
                    <div className="text-gray-500 text-sm">{exp.period}</div>
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
                      <ul className="text-gray-600 list-disc pl-5 space-y-2">
                        {exp.description.map((point, pointIndex) => (
                          <li key={pointIndex}>{point}</li>
                        ))}
                      </ul>
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

export default Experience;