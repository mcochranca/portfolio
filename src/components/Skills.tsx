import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Globe, Palette } from 'lucide-react'

const skills = [
  { name: 'Front-end Development', icon: Globe, color: 'text-blue-500' },
  { name: 'Back-end Development', icon: Database, color: 'text-green-500' },
  { name: 'UI/UX Design', icon: Palette, color: 'text-purple-500' },
  { name: 'API Integration', icon: Code, color: 'text-red-500' },
]

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-indigo-900 mb-12"
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 rounded-lg p-6 text-center"
            >
              <skill.icon className={`w-12 h-12 ${skill.color} mx-auto mb-4`} />
              <h3 className="text-xl font-semibold text-indigo-900 mb-2">{skill.name}</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills