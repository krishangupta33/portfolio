import React, { useState } from 'react';
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react';

const experiences = [
  {
    title: "Data Scientist",
    company: "Canadian Tire Financial Services (Canadian Tire Bank)",
    location: "",
    duration: "Sep 2024 – Present",
    description: [
      'Facilitated the bank\'s transition from SAS-based credit scoring models to Python-based Scorecard models, significantly reducing the model development time and expediting the training process for scorecard models.',
      'Identified the causes of performance degradation in a credit scoring model developed in 2017 and successfully refactored the scores, ensuring the model\'s deviation from the benchmark fell within acceptable limits.'
    ]
  },
  {
    title: "Graduate Research Assistant (Data Science)",
    company: "McGill University",
    location: "",
    duration: "Feb 2024 – Aug 2024",
    description: [
      'Developed and deployed a computer vision model using the Gemini API for animal identification in the Amazon rainforest, integrated with Google Cloud via CI/CD pipelines for storing output in Big Query database.',
      'Implemented ETL processes to handle data transformation and loading, ensuring efficient data flow from image captures to model input.'
    ]
  },
  {
    title: "Data Scientist",
    company: "Proctor & Gamble",
    location: "",
    duration: "Sep 2023 – May 2024",
    description: [
      'Performed regression analysis on historical marketing campaigns to optimize budget allocation for maximizing ROAS (Return on Ad Spend), leading to estimated annual savings of over 200,000 CAD.',
      'Trained and deployed a LightGBM Model in Databricks using model serving features and MLOps techniques to predict customer trade-up paths, resulting in a 10% increase in revenue per customer by increasing customer engagement.'
    ]
  },
  {
    title: "Data Scientist",
    company: "Protium Finance",
    location: "",
    duration: "Dec 2022 – July 2023",
    description: [
      'Applied clustering algorithms for customer analytics and segment customer risk profiles, expanding the customer base by 60%. Developed a Business Intelligence dashboard in PowerBI to identify delinquent customers, reducing EMI bounce rates by 20%.',
      'Analyzed text data to compare thousands of credit score reports from different credit bureaus, resulting in a 30% cost saving by selecting a cost-effective bureau and enhancing business performance.'
    ]
  },
  {
    title: "Data Analyst",
    company: "Udaan Capital",
    location: "Bengaluru, India",
    duration: "Aug 2022 – Dec 2022",
    description: [
      'Employed SQL and Python to enact Reserve Bank of India\'s compulsory NPA guidelines, contributing to the seamless operation of business activities.',
      'Built an Asset Liability Management Dashboard to keep track of future flow of funds leveraging Google Sheets and data flow automation.'
    ]
  },
  {
    title: "Data Analyst",
    company: "Freshok",
    location: "Gurugram, India",
    duration: "Jan 2022 – May 2022",
    description: [
      'Created dashboards of product-level P&L, Gross Margins, and Inventory on Redash using SQL and BigQuery.',
      'Analyzed past year\'s pricing data of fruits and vegetables in Advanced Excel and PowerBI to conclude a business decision of investing 110,000 CAD.'
    ]
  },
  {
    title: "Co-Founder",
    company: "Kramofire Manufacturer and Trader Pvt Ltd",
    location: "Delhi, India",
    duration: "Jun 2019 – Jan 2022",
    description: [
      'Developed a pricing model based on inventory and demand, resulting in a 25% increase in gross profit.',
      'Optimized inventory turnover with a demand forecasting model, reducing capital requirements by 10%.'
    ]
  },
  {
    title: "Mechanical Engineer (Research & Development)",
    company: "Tata Motors",
    location: "Pune, India",
    duration: "Aug 2018 – May 2019",
    description: [
      'Developed new test rigs for the testing of Electric Vehicle transmissions.',
      'Upgraded old test rigs and saved 80% in capital expenditure costs.'
    ]
  },
];

const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
        
        <div className="relative pl-4 md:pl-12">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-8 transform w-1 bg-blue-500 h-full"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative mb-12 pl-8 md:pl-16"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-8 top-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                <Briefcase size={16} className="text-white" />
              </div>
              
              {/* Experience Card */}
              <div 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                    <p className="text-gray-600">{exp.company} | {exp.location}</p>
                    <p className="text-sm text-gray-500">{exp.duration}</p>
                  </div>
                  <div className="text-blue-500">
                    {expandedIndex === index ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </div>

                {expandedIndex === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-sm">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;