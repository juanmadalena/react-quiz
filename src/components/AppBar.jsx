import React from 'react'
import { useQuizStore } from '../store/quiz'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FaArrowLeftLong } from 'react-icons/fa6'

export default function AppBar() {

    const { currentQuestion, resetQuiz } = useQuizStore()

    return (
        <header id='appbar' className='h-20 w-screen grid grid-cols-3 px-10 overflow-hidden'>
            <div className='flex items-center justify-start'>
                <motion.div
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1 }}
                >
                    <Link to={'/react-quiz/'} onClick={resetQuiz}>
                        <FaArrowLeftLong className='text-2xl'/>
                    </Link>
                </motion.div>
            </div>
            <div className='flex items-center justify-center'>
                <motion.h1 
                    className='lufga text-1xl lg:text-3xl text-center'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    React quiz app
                </motion.h1>
            </div>
            <div className='flex items-center justify-end'>
                <AnimatePresence mode='popLayout'>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        exit={{ opacity: 0, y: -18 }}
                        key={currentQuestion}
                    >
                        { currentQuestion + 1 }
                    </motion.span>
                </AnimatePresence>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    exit={{ opacity: 0 }}
                >
                    / 10
                </motion.span>
            </div>
        </header>
    )
}