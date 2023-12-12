import AppBar from '../components/AppBar.jsx'
import { useQuizStore } from '../store/quiz'
import QuestionTitle from '../components/QuestionTitle.jsx';
import QuestionOption from '../components/QuestionOption.jsx';
import Button from '../components/Button.jsx';
import { FaArrowRightLong, FaArrowLeftLong, FaCheck } from "react-icons/fa6";
import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useTitle } from '../assets/hooks/useTitle.js';


export default function Questions() {

    const { questions, currentQuestion, setCurrentQuestion, isQuizStarted, finishQuiz } = useQuizStore()

    useEffect(()=>{
        document.title = `${currentQuestion + 1} / ${questions.length} | React Quiz App`
    }, [currentQuestion])

    function handleNextButton(){
        if(currentQuestion >= 9) return setCurrentQuestion(0)
        setCurrentQuestion(currentQuestion + 1)
    }

    function handleBackButton(){
        setCurrentQuestion(currentQuestion - 1)
    }
    function handleFinishButton(){
        finishQuiz()
    }

    return (
        <>
            <AppBar/>
            <AnimatePresence mode='wait'>
            <section className='h-[calc(100vh-6.5rem)] w-full flex flex-col justify-between px-10'>
                <div className='h-1/4'>
                    <QuestionTitle question={questions[currentQuestion].question}/>
                </div>
                <div className='lg:h-1/2'>
                    <QuestionOption choices={questions[currentQuestion].choices}/>
                </div>
                <div className='flex flex-row-reverse items-end justify-between'>
                    {
                        currentQuestion < 9 
                        ?
                        <Button 
                            action={handleNextButton} 
                            text={'Next'} 
                            appIcon={<FaArrowRightLong/>}
                            animation={'arrow'}    
                        />
                        :
                        <Link to={'/results'}>
                            <Button 
                                action={handleFinishButton} 
                                text={'Finish'} 
                                appIcon={<FaCheck/>}
                                animation={'finish'}    
                            />
                        </Link>

                    }
                    {
                        currentQuestion > 0 
                        ?
                        <Button 
                            action={handleBackButton} 
                            text={'Back'} 
                            preIcon={<FaArrowLeftLong/>}
                            animation={'arrow'} 
                        />
                        :
                        null
                    }
                </div>
            </section>
            </AnimatePresence>
        </>
    )
}