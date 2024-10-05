import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, User } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { isAuthenticated, logout } = useAuth()
  const location = useLocation()

  const menuItems = [
    { name: 'About', path: '/#about' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Skills', path: '/#skills' },
    { name: 'Contact', path: '/#contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMenuItemClick = (path: string) => {
    setIsMenuOpen(false)
    if (location.pathname !== '/') {
      window.location.href = path
    } else {
      const element = document.querySelector(path.substring(1))
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className={`text-2xl font-bold ${isScrolled ? 'text-indigo-600' : 'text-white'}`}>My Portfolio</Link>
        </motion.div>
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.path}
              onClick={(e) => {
                e.preventDefault()
                handleMenuItemClick(item.path)
              }}
              className={`hover:text-indigo-600 transition-colors duration-300 ${isScrolled ? 'text-gray-600' : 'text-white'}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item.name}
            </motion.a>
          ))}
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className={`hover:text-indigo-600 transition-colors duration-300 ${isScrolled ? 'text-gray-600' : 'text-white'}`}>Dashboard</Link>
              <button onClick={logout} className={`hover:text-indigo-600 transition-colors duration-300 ${isScrolled ? 'text-gray-600' : 'text-white'}`}>Logout</button>
            </>
          ) : (
            <Link to="/login" className={`hover:text-indigo-600 transition-colors duration-300 ${isScrolled ? 'text-gray-600' : 'text-white'}`}>Login</Link>
          )}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} className={isScrolled ? 'text-gray-600' : 'text-white'} /> : <Menu size={24} className={isScrolled ? 'text-gray-600' : 'text-white'} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="block py-2 px-4 text-gray-600 hover:bg-indigo-100"
                onClick={(e) => {
                  e.preventDefault()
                  handleMenuItemClick(item.path)
                }}
              >
                {item.name}
              </a>
            ))}
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="block py-2 px-4 text-gray-600 hover:bg-indigo-100" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
                <button onClick={() => { logout(); setIsMenuOpen(false); }} className="block w-full text-left py-2 px-4 text-gray-600 hover:bg-indigo-100">Logout</button>
              </>
            ) : (
              <Link to="/login" className="block py-2 px-4 text-gray-600 hover:bg-indigo-100" onClick={() => setIsMenuOpen(false)}>Login</Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header