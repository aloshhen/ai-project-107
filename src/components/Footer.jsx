import React from 'react'
import { Coffee } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-slate-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="text-electric-coffee" />
              <span className="font-bold text-xl text-white">CoffeeEco</span>
            </div>
            <p className="text-slate-400">Revolutionizing coffee through technology and innovation.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['Features', 'Pricing', 'About', 'Contact'].map(link => (
                <li key={link}><a href={`#${link.toLowerCase()}`} className="text-slate-400 hover:text-white">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Legal</h4>
            <ul className="space-y-2">
              {['Privacy', 'Terms', 'Cookies'].map(link => (
                <li key={link}><a href="#" className="text-slate-400 hover:text-white">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Contact</h4>
            <p className="text-slate-400 mb-2">support@coffeeco.com</p>
            <p className="text-slate-400">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-4 text-center text-slate-400">
          © {new Date().getFullYear()} CoffeeEco. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer