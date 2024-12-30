import React from 'react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* McGill University */}
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
            <div className="w-24 h-24 mr-6 flex-shrink-0">
              <img 
                src="/mcgill.png" 
                alt="McGill University Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">McGill University</h3>
              <p className="text-gray-600">Master of Management in Analytics (MMA)</p>
              <p className="text-sm text-gray-500">Sep 2023 - Dec 2024</p>
              <p className="text-sm text-gray-500">GPA: 3.66/4.00</p>
            </div>
          </div>

          {/* Delhi Technological University */}
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
            <div className="w-24 h-24 mr-6 flex-shrink-0">
              <img 
                src="/dtu.png" 
                alt="Delhi Technological University Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Delhi Technological University</h3>
              <p className="text-gray-600">Bachelor of Technology in Mechanical Engineering (B.Tech)</p>
              <p className="text-sm text-gray-500">Aug 2015 - May 2019</p>
              <p className="text-sm text-gray-500">GPA: 8.0/10.0</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
