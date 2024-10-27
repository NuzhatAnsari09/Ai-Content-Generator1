'use client'
import React from 'react';
import { ArrowRight, FileText, Sliders, BookOpen, MessageCircle, User } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();

  // Handler for button clicks
  const handleClick = () => {
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <div className="flex">
            <div className="w-6 h-6 rounded-full bg-blue-500" />
            <div className="w-6 h-6 rounded-full bg-violet-500 -ml-2" />
            <div className="w-6 h-6 rounded-full bg-purple-500 -ml-2" />
            <div className="w-6 h-6 rounded-full bg-pink-500 -ml-2" />
          </div>
          <span className="font-bold text-xl text-slate-800">AIContent</span>
        </div>
        <div className="flex items-center gap-6">
          <button
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
            onClick={handleClick}
            aria-label="Get Started"
          >
            <User className="w-4 h-4" />
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-8 leading-tight">
            <span className="text-slate-800">AI Content</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600"> Generator</span>
          </h1>
          <p className="text-slate-600 text-xl leading-relaxed mb-12">
            Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.
          </p>
          <button
            className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-indigo-200 transition-all duration-300 flex items-center gap-2 mx-auto group"
            onClick={handleClick}
            aria-label="Get started with AI Content Generator"
          >
            Get started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </main>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: FileText,
              title: "25+ templates",
              description: "Responsive, and mobile-first project on the web",
              color: "from-blue-500 to-blue-600"
            },
            {
              icon: Sliders,
              title: "Customizable",
              description: "Components are easily customized and extendable",
              color: "from-indigo-500 to-indigo-600"
            },
            {
              icon: BookOpen,
              title: "Free to Use",
              description: "Every component and plugin is well documented",
              color: "from-violet-500 to-violet-600"
            },
            {
              icon: MessageCircle,
              title: "24/7 Support",
              description: "Contact us 24 hours a day, 7 days a week",
              color: "from-purple-500 to-purple-600"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200 hover:shadow-2xl transition-all duration-300">
              <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} text-white rounded-xl flex items-center justify-center mb-6`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">{feature.title}</h3>
              <p className="text-slate-600 mb-6">{feature.description}</p>
              <button className="text-indigo-600 flex items-center gap-2 hover:gap-3 transition-all duration-300" aria-label={`Learn more about ${feature.title}`}>
                Learn more <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
