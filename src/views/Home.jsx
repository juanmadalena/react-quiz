import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import { useQuizStore } from '../store/quiz'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTitle } from '../assets/hooks/useTitle'
import QuizList from '../components/QuizList'


export default function Home() {

  const [showQuiz, setShowQuiz] = useState(false)

  function handleCloseQuiz(){
    setShowQuiz(false)
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
          <motion.button 
            className='text-lg font-medium px-6 py-4 rounded-md bg-neutral-900 shadow-md hover:shadow-lg'
            whileHover={{ scale: 1.05 }}
            onClick={() => setShowQuiz(true)}
          >
            Start quiz !
          </motion.button>
      </div>
      { showQuiz && <QuizList close={handleCloseQuiz}/> }
    </motion.div>
  </>
  )
}