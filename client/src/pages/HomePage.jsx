import React from "react";
import { Rocket, TrendingUp, Shield } from "lucide-react";

class Home extends React.Component {
  render() {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-indigo-700">
          <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                Decentralized Crowdfunding
                <span className="block text-indigo-200">Powered by Blockchain</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-indigo-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Fund innovative projects with transparency and security. Join the future of crowdfunding.
              </p>
              <div className="mt-10 flex justify-center">
                <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-indigo-50 transition">
                  Start a Project
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[1, 2, 3].map(function (item) {
              return (
                <div key={item} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={"https://source.unsplash.com/random/800x600?blockchain&" + item}
                    alt="Project"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Project {item}</h3>
                    <p className="text-gray-600 mb-4">
                      An innovative blockchain project revolutionizing the industry.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-indigo-600 font-semibold">75% Funded</span>
                      <button className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm hover:bg-indigo-700">
                        Support
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features */}
        <div className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Shield className="h-12 w-12 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Secure & Transparent</h3>
                <p className="text-gray-600">
                  All transactions are recorded on the blockchain for complete transparency.
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Rocket className="h-12 w-12 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quick Launch</h3>
                <p className="text-gray-600">
                  Start your fundraising campaign in minutes with easy setup.
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <TrendingUp className="h-12 w-12 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Global Reach</h3>
                <p className="text-gray-600">
                  Connect with supporters from around the world instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
