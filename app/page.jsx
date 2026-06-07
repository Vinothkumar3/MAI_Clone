'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, MapPin, Zap, MessageSquare, ArrowRight, Check } from 'lucide-react';
import ScrollReveal from './components/ScrollReveal';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [priceRange, setPriceRange] = useState(12500);
  const { scrollY } = useScroll();
  const heroRef = useRef(null);

  // Parallax effects
  const yHero = useTransform(scrollY, [0, 300], [0, 100]);
  const yServices = useTransform(scrollY, [600, 900], [0, 50]);
  const yFooter = useTransform(scrollY, [2000, 2500], [0, 80]);

  const services = [
    { title: 'Worktop & Tile Removal', icon: '🔨', color: 'from-blue-500 to-cyan-500' },
    { title: 'Engineered Stone Installation', icon: '🪨', color: 'from-purple-500 to-pink-500' },
    { title: 'Tiling Services', icon: '🧱', color: 'from-orange-500 to-red-500' },
    { title: 'Fire Place Surrounds', icon: '🔥', color: 'from-red-500 to-yellow-500' },
    { title: 'KBB Design', icon: '🎨', color: 'from-green-500 to-teal-500' },
    { title: 'Stone Repairs', icon: '🛠️', color: 'from-indigo-500 to-blue-500' },
  ];

  const workflowSteps = [
    { number: 1, title: 'Post Your Project', desc: 'Share your project details' },
    { number: 2, title: 'Receive Local Proposals', desc: 'Get offers from verified traders' },
    { number: 3, title: 'Compare Credentials', desc: 'Review ratings and experience' },
    { number: 4, title: 'Finalise & Start', desc: 'Book and begin your project' },
  ];

  return (
    <div className="w-full min-h-screen bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black" />
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Sticky Navbar */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="sticky top-0 z-50 w-full backdrop-blur-md bg-black/40 border-b border-white/5 shadow-lg"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  MAI
                </span>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex gap-12 items-center">
                {['Company', 'Platform', 'Blogs'].map((item) => (
                  <motion.a
                    key={item}
                    href="#"
                    whileHover={{ color: '#60a5fa' }}
                    className="text-gray-300 hover:text-blue-400 text-sm font-medium transition"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>

              {/* CTA Button */}
              <div className="hidden md:flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition text-sm font-medium"
                >
                  Post a Project
                </motion.button>
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <X size={24} className="text-white" />
                ) : (
                  <Menu size={24} className="text-white" />
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden pb-4 space-y-3"
              >
                {['Company', 'Platform', 'Blogs'].map((item) => (
                  <a key={item} href="#" className="block text-gray-300 hover:text-blue-400 text-sm font-medium">
                    {item}
                  </a>
                ))}
                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition text-sm font-medium">
                  Post a Project
                </button>
              </motion.div>
            )}
          </div>
        </motion.nav>

        {/* Hero Section with Parallax */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden py-20">
          {/* Parallax Background Elements */}
          <motion.div style={{ y: yHero }} className="absolute inset-0 z-0">
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
          </motion.div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <ScrollReveal delay={0.1} className="mb-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-block bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              >
                ✨ 200K+ Trusted Traders • 11K Monthly Active
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Find Trusted Stones
                </span>
                <br />
                <span className="text-white">& Masons in UK</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                Connect with verified professionals for your home improvement projects
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 40px rgba(59, 130, 246, 0.8)',
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-10 py-5 rounded-xl hover:shadow-2xl transition text-lg font-bold inline-flex items-center gap-2"
              >
                Get Started
                <ArrowRight size={20} />
              </motion.button>
            </ScrollReveal>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal delay={0.1}>
              <h2 className="text-5xl font-bold text-white mb-16 text-center">Our Services</h2>
            </ScrollReveal>

            <motion.div style={{ y: yServices }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ScrollReveal key={index} delay={0.1 + index * 0.1}>
                  <motion.div
                    whileHover={{
                      y: -10,
                      boxShadow: '0 20px 60px rgba(59, 130, 246, 0.3)',
                    }}
                    className={`bg-gradient-to-br ${service.color} p-0.5 rounded-2xl hover:shadow-2xl transition`}
                  >
                    <div className="bg-slate-900 p-8 rounded-2xl h-full">
                      <div className="text-5xl mb-6">{service.icon}</div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      <motion.div
                        initial={{ width: 0 }}
                        whileHover={{ width: 40 }}
                        transition={{ duration: 0.3 }}
                        className="h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mt-4"
                      />
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Toolkit Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal delay={0.1}>
              <h2 className="text-5xl font-bold text-white mb-16 text-center">Intelligent Toolkit</h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Postcode Search Map */}
              <ScrollReveal delay={0.2}>
                <motion.div
                  whileHover={{
                    y: -10,
                    boxShadow: '0 20px 60px rgba(59, 130, 246, 0.3)',
                  }}
                  className="bg-gradient-to-br from-blue-600 to-cyan-600 p-0.5 rounded-2xl"
                >
                  <div className="bg-slate-900 p-10 rounded-2xl h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div whileHover={{ rotate: 20 }}>
                        <MapPin className="text-blue-400" size={32} />
                      </motion.div>
                      <h3 className="text-3xl font-bold text-white">Postcode Search</h3>
                    </div>
                    <p className="text-gray-300 mb-8">
                      Find verified traders near you with our advanced postcode-based search system
                    </p>
                    <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 h-48 rounded-xl flex items-center justify-center text-gray-400 border border-blue-400/30">
                      [Interactive Map Preview]
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>

              {/* AI Writing Tool */}
              <ScrollReveal delay={0.3}>
                <motion.div
                  whileHover={{
                    y: -10,
                    boxShadow: '0 20px 60px rgba(59, 130, 246, 0.3)',
                  }}
                  className="bg-gradient-to-br from-purple-600 to-pink-600 p-0.5 rounded-2xl"
                >
                  <div className="bg-slate-900 p-10 rounded-2xl h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div whileHover={{ rotate: 20 }}>
                        <Zap className="text-purple-400" size={32} />
                      </motion.div>
                      <h3 className="text-3xl font-bold text-white">MAI AI Assistant</h3>
                    </div>
                    <p className="text-gray-300 mb-8">Let our AI help you craft the perfect project description instantly</p>
                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Describe your project..."
                        className="w-full px-4 py-3 border border-purple-400/30 rounded-lg focus:outline-none focus:border-purple-400 bg-slate-800/50 text-white placeholder-gray-400"
                      />
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg hover:shadow-lg transition font-semibold"
                      >
                        Generate
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Workflow Steps */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal delay={0.1}>
              <h2 className="text-5xl font-bold text-white mb-16 text-center">How It Works</h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workflowSteps.map((step, index) => (
                <ScrollReveal key={step.number} delay={0.1 + index * 0.15}>
                  <motion.div
                    whileHover={{
                      y: -10,
                      boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)',
                    }}
                    className="relative"
                  >
                    <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-400/30 p-8 rounded-2xl h-full hover:border-blue-400/50 transition">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6 shadow-lg"
                        whileHover={{ scale: 1.1 }}
                      >
                        {step.number}
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-400 text-sm">{step.desc}</p>

                      {index < workflowSteps.length - 1 && (
                        <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                          <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                            <ArrowRight className="text-blue-400" size={24} />
                          </motion.div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Stone Offcuts Marketplace */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Parallax Background */}
          <motion.div style={{ y: yFooter }} className="absolute inset-0 z-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
          </motion.div>

          <div className="max-w-4xl mx-auto relative z-10">
            <ScrollReveal delay={0.1}>
              <div className="text-center mb-12">
                <h2 className="text-5xl font-bold text-white mb-4">Find Your Perfect Stone Offcut</h2>
                <p className="text-gray-400 text-lg">Discover high-quality stone offcuts at incredible prices</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="bg-gradient-to-br from-indigo-600 to-blue-600 p-0.5 rounded-3xl">
              <div className="bg-slate-900 p-10 rounded-3xl space-y-8">
                {/* Project Title */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-bold text-white mb-3 uppercase tracking-wider">Project Title</label>
                  <input
                    type="text"
                    placeholder="e.g., Kitchen Countertop Replacement"
                    className="w-full px-6 py-4 border border-indigo-400/30 rounded-xl focus:outline-none focus:border-indigo-400 bg-slate-800/50 text-white placeholder-gray-500 transition"
                  />
                </motion.div>

                {/* Stone Selection */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-bold text-white mb-3 uppercase tracking-wider">Stone Type</label>
                  <select className="w-full px-6 py-4 border border-indigo-400/30 rounded-xl focus:outline-none focus:border-indigo-400 bg-slate-800/50 text-white transition">
                    <option>Select stone type...</option>
                    <option>Granite</option>
                    <option>Marble</option>
                    <option>Quartz</option>
                    <option>Limestone</option>
                    <option>Slate</option>
                  </select>
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm font-bold text-white mb-3 uppercase tracking-wider">Project Description</label>
                  <textarea
                    placeholder="Tell us more about your project..."
                    className="w-full px-6 py-4 border border-indigo-400/30 rounded-xl focus:outline-none focus:border-indigo-400 bg-slate-800/50 text-white placeholder-gray-500 h-28 transition"
                  />
                </motion.div>

                {/* Budget Slider */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex justify-between items-center mb-4">
                    <label className="block text-sm font-bold text-white uppercase tracking-wider">Budget Range</label>
                    <motion.span key={priceRange} initial={{ scale: 1.2, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                      £{priceRange.toLocaleString()}
                    </motion.span>
                  </div>
                  <input
                    type="range"
                    min="300"
                    max="25000"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full h-3 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>£300</span>
                    <span>£25,000</span>
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 40px rgba(79, 70, 229, 0.8)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: 0.5 }}
                  className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-4 rounded-xl hover:shadow-2xl transition font-bold text-lg inline-flex items-center justify-center gap-2"
                >
                  <Zap size={20} />
                  Find Stone Offcuts
                </motion.button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-b from-slate-900 to-black text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-blue-400/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <ScrollReveal delay={0.1}>
                <div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    MAI
                  </span>
                  <p className="mt-4 text-gray-400 leading-relaxed">
                    Connecting homeowners with trusted professionals for exceptional home improvements
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div>
                  <h3 className="font-bold text-lg mb-6 text-white">Contact</h3>
                  <motion.a href="mailto:info@myproject.ai" whileHover={{ x: 5 }} className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition mb-4">
                    <MessageSquare size={20} />
                    <span>info@myproject.ai</span>
                  </motion.a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div>
                  <h3 className="font-bold text-lg mb-6 text-white">Phone</h3>
                  <motion.a href="tel:+442080043345" whileHover={{ x: 5 }} className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition">
                    <Check size={20} />
                    <span>+44 208 004 3345</span>
                  </motion.a>
                </div>
              </ScrollReveal>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              className="border-t border-blue-400/10 pt-8 text-center"
            >
              <p className="text-gray-500 text-sm">&copy; 2024 MAI - Find Trusted Traders. All rights reserved.</p>
            </motion.div>
          </div>
        </footer>
      </div>
    </div>
  );
}
