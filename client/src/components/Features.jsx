import { Globe, GraduationCap, Trophy, Users } from 'lucide-react';
import React from 'react'
const features = [
    {
      icon: <GraduationCap className="h-6 w-6 text-indigo-400" />,
      title: "Global Universities",
      description: "Access to top universities worldwide with detailed insights and requirements."
    },
    {
      icon: <Trophy className="h-6 w-6 text-indigo-400" />,
      title: "Scholarships",
      description: "Discover and apply for scholarships matching your profile and aspirations."
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-400" />,
      title: "Expert Guidance",
      description: "Connect with education agents and counselors for personalized advice."
    },
    {
      icon: <Globe className="h-6 w-6 text-indigo-400" />,
      title: "Study Abroad",
      description: "Comprehensive resources and support for international education."
    }
  ];
export default function Features() {
  return (
    <div>
           {/* Features Section */}
      <div id="features" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Your Education, Our Priority
            </h2>
            <p className="mt-4 text-xl text-slate-400">
              Comprehensive support for your academic aspirations
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features?.map((feature, index) => (
                <div key={index} className="relative group">
                  <div className="h-full relative rounded-2xl feature-card p-6 transition-all duration-200 hover:translate-y-[-4px]">
                    <div>{feature.icon}</div>
                    <h3 className="mt-4 text-lg font-medium text-white">{feature.title}</h3>
                    <p className="mt-2 text-base text-slate-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
