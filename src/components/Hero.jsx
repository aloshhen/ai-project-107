import React from 'react'
import { Coffee, ShoppingCart } from 'lucide-react'

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold tracking-tight mb-6 text-white">
            Reimagine Your Coffee Experience
          </h1>
          <p className="text-xl mb-10 text-slate-400">
            A high-tech ecosystem for coffee lovers, bringing precision and innovation to every cup.
          </p>
        
          <div className="flex justify-center space-x-4">
            <button className="bg-electric-coffee text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:scale-105 transition">
              <ShoppingCart />
              <span>Order Now</span>
            </button>
            <button className="border border-slate-700 text-slate-300 px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-slate-800 transition">
              <Coffee />
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero