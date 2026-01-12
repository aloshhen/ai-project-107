import React from 'react'
import { Zap, Coffee, Filter, Settings } from 'lucide-react'

function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Instant Brewing',
      description: 'Advanced technology for perfect coffee in seconds'
    },
    {
      icon: Coffee,
      title: 'Precision Roasting',
      description: 'Machine learning for optimal bean selection'
    },
    {
      icon: Filter,
      title: 'Smart Filtering',
      description: 'Customizable brewing profiles for every taste'
    },
    {
      icon: Settings,
      title: 'Tech Integration',
      description: 'Seamless control via mobile and web apps'
    }
  ]

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-900 rounded-lg p-6 text-center hover:bg-slate-800 transition">
              <feature.icon className="mx-auto mb-4 text-electric-coffee" size={48} />
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features