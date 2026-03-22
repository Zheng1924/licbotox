'use client'

import { motion } from 'framer-motion'
import { Calendar, Star, Phone, MapPin, Clock, Instagram, Mail } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-rose-50" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium">
              Now Open in Long Island City
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-rose-400 to-pink-600 bg-clip-text text-transparent">
            Long Island City Botox
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Premium beauty services in the heart of LIC. Expert technicians delivering beautiful, natural results.
          </p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-pink-500 text-pink-500 rounded-full text-lg font-semibold hover:bg-pink-50 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (555) 123-4567
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="mt-12 flex items-center justify-center gap-6 text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">41-26 27th St, LIC</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Mon-Sat 9am-7pm</span>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-pink-300 rounded-full flex justify-center">
            <motion.div 
              className="w-1.5 h-3 bg-pink-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Professional treatments tailored to enhance your natural beauty
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: 'Botox Treatments',
                description: 'Smooth fine lines and wrinkles with our expert Botox injections. Natural-looking results that last.',
                price: 'From $299'
              },
              {
                icon: Clock,
                title: 'Consultation',
                description: 'Personalized consultation to understand your goals and create a customized treatment plan.',
                price: 'Free'
              },
              {
                icon: Phone,
                title: 'Aftercare Support',
                description: 'Comprehensive aftercare guidance and follow-up appointments to ensure optimal results.',
                price: 'Included'
              }
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-gradient-to-br from-pink-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-pink-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-400 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="text-pink-600 font-semibold">{service.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience the difference of professional care
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '10+', label: 'Years Experience' },
              { number: '5,000+', label: 'Happy Clients' },
              { number: '4.9/5', label: 'Average Rating' },
              { number: '100%', label: 'Certified Experts' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-4xl md:text-5xl font-bold text-pink-500 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 px-4 bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Book your consultation today and take the first step towards a more confident you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-pink-500 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Now
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                (555) 123-4567
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Long Island City Botox</h3>
              <p className="text-gray-400">Premium beauty services in the heart of LIC.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400 mb-2">41-26 27th Street</p>
              <p className="text-gray-400 mb-2">Long Island City, NY 11101</p>
              <p className="text-gray-400">(555) 123-4567</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Hours</h4>
              <p className="text-gray-400 mb-2">Mon - Sat: 9am - 7pm</p>
              <p className="text-gray-400">Sunday: Closed</p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2026 Long Island City Botox. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
