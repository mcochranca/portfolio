import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <p>&copy; 2024 Your Name. All rights reserved.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4"
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition-colors duration-300">
              <Twitter size={24} />
            </a>
          </motion.div>
        </div>
        <div className="mt-4 text-center">
          <Link to="/login" className="text-indigo-300 hover:text-white transition-colors duration-300">Login</Link>
          {' | '}
          <Link to="/register" className="text-indigo-300 hover:text-white transition-colors duration-300">Register</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer