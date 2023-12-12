import { useEffect, useState } from 'react'
import { useQuizStore } from '../store/quiz'
import { checkAnswers } from '../utils/checkAnswers'
import partyPopper from '../assets/images/party-popper.png'
import fine from '../assets/images/fine.png'
import bad from '../assets/images/bad.png'
import { startConfetti, loopConfetti } from '../utils/confetti'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowDown } from 'react-icons/fa6'
import { useTitle } from '../assets/hooks/useTitle'

export default function Results() {
    const { answers, questions } = useQuizStore()

    const [ correctAnswers, setCorrectAnswers ] = useState(0)

    useEffect(()=>{
        const updatedCorrectAnswers = checkAnswers(answers, questions);
        setCorrectAnswers(updatedCorrectAnswers);
      
        if (updatedCorrectAnswers >= 8) {
          loopConfetti(2);
        }
    }, [])

    useTitle('Results | React Quiz App')

    const text = () => {
        if(correctAnswers === 10) return 'Perfect'
        else if(correctAnswers >= 8) return 'Congrats'
        else if( correctAnswers < 8 && correctAnswers >= 6) return 'Good'
        else if( correctAnswers < 6 && correctAnswers >= 5) return 'Fine, just fine'
        else if( correctAnswers < 5 && correctAnswers >= 3) return 'Try again'
        else if( correctAnswers < 2) return 'Naa you need to study'
    }

    const image = () => {
        if(correctAnswers >= 8) return partyPopper
        else if( correctAnswers < 8 && correctAnswers >= 5) return fine
        else if( correctAnswers < 5) return bad
    }

    return (
        <>
            <div className='w-screen flex items-center flex-col justify-center z-20' style={{height: '90dvh'}}>
                { correctAnswers >=8 ?        
                <p className='border p-2 rounded-full border-neutral-700 text-neutral-700'>
                    Click
                    <motion.span
                        animate={{ opacity: [0.5, 1] }}
                        transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse' }}
                    >
                        <FaArrowDown className='ml-2 mr-1 inline-block'/>
                    </motion.span>
                </p>
                : 
                null }
                <motion.img 
                    transition={{ duration: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    src={image()} className='w-48' alt='party-popper'
                    onClick={correctAnswers >=8 ? startConfetti : null}
                />
                <h1 className='text-8xl mb-4'>
                    { correctAnswers ?? 0 } / { questions.length }
                </h1>
                <h1 className='lufga text-4xl lg:text-9xl block'>
                    {text()}
                </h1>
            </div>
            <div className='text-neutral-600 font-semibold text-center'>
                <Link to={'/react-quiz/'}>
                <p>
                    Go home!
                </p>
                </Link>
            </div>
        </>
    )
}