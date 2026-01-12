import React from 'react'
import { ArrowRight } from 'lucide-react'

function About() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((step) => (
            <div key={step} className="bg-slate-900 rounded-lg p-6">
              <div className="text-6xl font-bold mb-4 text-electric-coffee">0{step}</div>
              <h3 className="text-xl font-bold mb-4 text-white">Step {step}</h3>
              <p className="text-slate-400 mb-4">Description of the step in the coffee brewing process.</p>
              <a href="#" className="text-electric-coffee flex items-center">
                Learn More <ArrowRight className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About