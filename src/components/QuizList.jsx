import { useState } from "react"
import { motion } from "framer-motion"
import { FaArrowRight } from "react-icons/fa6"
import { useQuizStore } from "../store/quiz"
import { Link } from "react-router-dom"

export default function QuizList({close}) {

    const [ hover, setHover ] = useState(null)
    const { getQuizesTitles, setQuiz, resetQuiz, startQuiz } = useQuizStore()

    function handleStartQuiz(i){
        setQuiz(i)
        resetQuiz()
        startQuiz()
      }

    return (
        // Modal
        <motion.div 
            className='absolute top-0 h-screen w-screen bg-black bg-opacity-30 flex justify-center items-center' 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            onClick={close}
        >
            <div 
                className="flex flex-col gap-10 h-2/3 w-2/4 pt-4 px-8 bg-neutral-900 rounded-md shadow-lg font-medium text-white"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="">
                    <h2 className='lufga text-lg lg:text-2xl text-center text-neutral-200'>
                        Choose a quiz
                    </h2>
                </div>
                <div className="grid grid-cols-2 grid-rows-5 gap-2 h-5/6">
                    {getQuizesTitles()?.map((title, i) => (
                        <Link to={`/react-quiz/quiz/`} onClick={() => handleStartQuiz(i)}>
                            <motion.div
                                className="hover:cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                onHoverStart={() => setHover(i)}
                                onHoverEnd={() => setHover(null)}
                            >
                                <div className="w-full flex items-center justify-center">
                                        <motion.p 
                                            animate={ hover == i ? {x:-10, color: '#61dafb'} : {x:0} }
                                            className="text-2xl">
                                            {title}
                                        </motion.p>
                                        <motion.span
                                            animate={ hover == i ? { x: 0, opacity: 1, color: '#61dafb', scale:1 } : { x: -5, opacity: 0, scale:0.5 } }
                                            transition={{ yoyo: Infinity, duration: 0.2 }}
                                            exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' }}}
                                            className="inline-block text-neutral-200"
                                        >
                                            <FaArrowRight className="text-2xl" />
                                        </motion.span>                                             
                                </div>
                                <p className="text-center text-xs text-neutral-600">
                                    Quiz {i + 1}
                                </p>
                            </motion.div>
                        </Link>
                    ))
                    }
                </div>
            </div>
        </motion.div>
    )
}