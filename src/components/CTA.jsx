import React from 'react'

function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Ready to Elevate Your Coffee Experience?</h2>
        <p className="text-xl mb-10 text-white/80">Join our high-tech coffee ecosystem today</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition">
            Start Free Trial
          </button>
          <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition">
            Book Demo
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA