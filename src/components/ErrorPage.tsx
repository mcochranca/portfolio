import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ErrorPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
      >
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Oops! Page Not Found
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <Link
                to="/"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Go back to homepage
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ErrorPage