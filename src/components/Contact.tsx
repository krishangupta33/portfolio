import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Replace these with your actual EmailJS details
    emailjs.send(
      'service_0vdkbef', // Replace with your EmailJS service ID
      'template_papckq1', // Replace with your EmailJS template ID
      {
        from_name: name,
        from_email: email,
        message: message,
      },
      'tjkM5k3qUVvt6uJQk' // Replace with your EmailJS public key
    )
    .then(() => {
      setSubmitStatus('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setSubmitStatus('Failed to send message. Please try again.');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="text-blue-600" size={24} />
                <div>
                  <div className="font-medium">Email</div>
                  <a href="mailto:krishan.gupta@mail.mcgill.ca" className="text-gray-600">
                    krishan.gupta@mail.mcgill.ca
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-blue-600" size={24} />
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-gray-600">
                    <p>Toronto, Canada 🇨🇦 </p>
                    <p>New Delhi, India 🇮🇳</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>
            {submitStatus && (
              <div className={`text-center py-2 rounded-lg ${
                submitStatus.includes('successfully') 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {submitStatus}
              </div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-3 rounded-lg transition-colors ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;