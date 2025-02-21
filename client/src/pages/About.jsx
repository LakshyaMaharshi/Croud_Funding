import React from 'react';
import { Users, Target, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing crowdfunding by leveraging blockchain technology to create a transparent,
            secure, and efficient platform for innovators and supporters worldwide.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Founder",
                image: "https://source.unsplash.com/random/400x400?woman,professional,1"
              },
              {
                name: "Michael Chen",
                role: "CTO",
                image: "https://source.unsplash.com/random/400x400?man,professional,2"
              },
              {
                name: "Emily Rodriguez",
                role: "Head of Operations",
                image: "https://source.unsplash.com/random/400x400?woman,professional,3"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Community First</h3>
            <p className="text-gray-600">
              We believe in the power of community to drive innovation and change.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Target className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Innovation Driven</h3>
            <p className="text-gray-600">
              Constantly pushing the boundaries of what's possible in crowdfunding.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Globe className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Global Impact</h3>
            <p className="text-gray-600">
              Creating opportunities for innovators worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;