import { create } from 'zustand'
import { quizes } from '../data/quizQuestions'

export const useQuizStore = create(
    (set) => ({
        quizes: quizes,
        isQuizStarted: false,
        isQuizFinished: false,
        questions: null,
        currentQuestion: 0,
        answers:[],
        startQuiz: () => set(() => ({ isQuizStarted: true })),
        finishQuiz: () => set(() => ({ isQuizFinished: true })),
        resetQuiz: () => set(() => ({ isQuizStarted: false, isQuizFinished: false, currentQuestion: 0, answers: [] })),
        setQuestions: (questions) => set(() => ({ questions })),
        setCurrentQuestion: (currentQuestion) => set(() => ({ currentQuestion })),
        setScore: (score) => set(() => ({ score })),
        addAnswer: (answer) => set((state) => {
            const updatedAnswers = [...state.answers];
            updatedAnswers[state.currentQuestion] = answer
            return { answers: updatedAnswers }
        }),
        getQuizesTitles: () => {
            const titles = quizes.map((quiz) => quiz.title)
            return titles
        },
        setQuiz: (id) => {
            const { questions } = quizes.find((quiz) => quiz.id === id)
            console.log(questions);
            set(() => ({ questions }))
        }
    })
)