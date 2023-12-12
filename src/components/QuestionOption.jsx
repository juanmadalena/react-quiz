import { motion } from 'framer-motion'
import { FaCheck } from 'react-icons/fa6'
import { useQuizStore } from '../store/quiz'


export default function QuestionOption({choices}) {
    
    const { addAnswer, answers, currentQuestion } = useQuizStore()

    function handleOptionClick(answer){
        addAnswer(answer)
    }

    return (
        <div className='grid gap-6 lg:grid-cols-2 lg:grid-rows-2 h-3/4'>
            {choices.map((choice, index) => (
                <motion.div
                    key={index}
                    className='border w-full p-4 lg:p-8 pl-16 rounded-lg flex items-center justify-between hover:bg-neutral-700 hover:cursor-pointer' 
                    initial={{ opacity: 0 }}
                    animate={answers[currentQuestion] === choice ? { backgroundColor: 'rgba(34 197 94, 1)', opacity: 1 } : { backgroundColor: '#262626' ,opacity: 1, transition: { duration: 0.4, delay: index / 50 } }}
                    exit={{ opacity: 0}}
                    whileTap={{ scale: 0.9, transition: { duration: 0.4 } }}
                    onClick={() => handleOptionClick(choice)}
                >
                    <span className='text-base font-semibold lg:text-xl'>
                        {choice}
                    </span>
                    <span className=' text-lg lg:text-2xl'>
                        {answers[currentQuestion] === choice ? <FaCheck/> : ''}
                    </span>
                </motion.div>
            ))}
        </div>
    )
}