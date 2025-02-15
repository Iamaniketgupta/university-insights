import { Search } from 'lucide-react'
import React from 'react'

export default function Hero() {
  return (
    <div>
          {/* Hero Section */}
      <div className="relative hero-gradient text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                  <span className="block text-white">Your Gateway to Global</span>
                  <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">Higher Education</span>
                </h1>
                <p className="mt-3 text-base text-slate-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Discover world-class universities, scholarships, and expert guidance for your educational journey.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <button
                      className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white gradient-bg hover:opacity-90 transition-opacity md:py-4 md:text-lg md:px-10"
                    >
                      Find Scholarships
                      <Search className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button
                      className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-slate-300 border border-slate-700 hover:text-white hover:border-slate-600 transition-colors md:py-4 md:text-lg md:px-10"
                    >
                      Explore Universities
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover opacity-20 sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="University campus"
          />
        </div>
      </div>
    </div>
  )
}
