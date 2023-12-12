import React from 'react'
import reactLogo from '../assets/react.svg'
import { useQuizStore } from '../store/quiz'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTitle } from '../assets/hooks/useTitle'


export default function Home() {

  const { startQuiz, resetQuiz } = useQuizStore()

  function handleStartQuiz(){
    resetQuiz()
    startQuiz()
  }

  useTitle('React Quiz App')

  return (
  <>
    <motion.div 
      className="h-screen flex align-middle  justify-center flex-col gap-8 -mt-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' }}}
    >
      <div className="flex align-middle justify-center">
        <img src={reactLogo} className="h-52 logo react logo-spin" alt="React logo" />
      </div>
      <section>
        <h1 className='lufga text-5xl text-center'>
            React quiz app
        </h1>
      </section>
      <div className="text-center">
        <Link to={'/Quiz'} onClick={handleStartQuiz}>
          <motion.button 
            className='text-lg font-medium px-6 py-4 rounded-md bg-neutral-900 shadow-md hover:shadow-lg'
            whileHover={{ scale: 1.05 }}
          >
            Start quiz !
          </motion.button>
        </Link>
      </div>
    </motion.div>
  </>
  )
}