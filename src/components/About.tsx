import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            About Me
          </h2>
          
          <div className="space-y-6 text-lg text-gray-600">
            <p>
              I am a Data Scientist with a passion for leveraging AI and Machine Learning to solve complex business problems. 
              With a strong foundation in mathematics and computer science from McGill University, I've developed a keen ability 
              to translate data into actionable insights and innovative solutions.
            </p>

            <p>
              My expertise spans across various domains of AI and ML, including Natural Language Processing, 
              Computer Vision, and Predictive Analytics. I've successfully implemented end-to-end machine learning 
              solutions, from data preprocessing and model development to deployment and monitoring.
            </p>

            <p>
              What drives me is the opportunity to bridge the gap between cutting-edge technology and real-world applications. 
              I'm particularly interested in developing scalable AI solutions that can make a meaningful impact on businesses 
              and society. My experience includes working with diverse technologies and frameworks such as PyTorch, TensorFlow, 
              and various cloud platforms.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-2 text-blue-600">Technical Skills</h3>
              <p className="text-gray-600">Python, PyTorch, TensorFlow, SQL, Big Data Technologies, Cloud Platforms</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-2 text-blue-600">Areas of Expertise</h3>
              <p className="text-gray-600">Machine Learning, Deep Learning, NLP, Computer Vision, Data Analytics</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-2 text-blue-600">Soft Skills</h3>
              <p className="text-gray-600">Problem Solving, Team Collaboration, Project Management, Communication</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;