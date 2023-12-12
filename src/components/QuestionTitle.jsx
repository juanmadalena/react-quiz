import { motion } from 'framer-motion'

export default function QuestionTitle({question}) {
  return (
    <div className='flex items-center justify-center h-full px-5 rounded-lg bg-neutral-700'>
        <motion.h4 
          className='lufga text-2xl text-center font-semibold text-neutral-100 md:text-3xl'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          exit={{ opacity: 0 }}
          key={question}
        >  
          { question }
        </motion.h4>
    </div>
  )
}