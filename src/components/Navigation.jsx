import React from 'react'
import { Coffee, Menu } from 'lucide-react'

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Coffee className="text-electric-coffee" />
          <span className="font-bold text-xl">CoffeeEco</span>
        </div>
        <div className="flex space-x-4 items-center">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <button className="bg-electric-coffee text-white px-4 py-2 rounded-lg">
            Order Now
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation