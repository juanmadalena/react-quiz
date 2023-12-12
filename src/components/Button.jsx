import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Button({action, text, preIcon, appIcon, animation}) {

    const [hover, setHover] = useState(false)

    const animate = () => {
        if (animation === 'arrow'){
            return { x: [0,2,0], transition: { duration: 0.8, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
        }
        else if (animation === 'finish'){
            return { scale: 1.2  }
        }else{
            return { x: 0 }
        }
    }

    return (
        <motion.button 
            onClick={action} 
            className='py-4 px-6 rounded-lg hover:cursor-pointer bg-neutral-700'
            whileHover={animation == 'finish' ? { backgroundColor:'#22c55e', scale: 1.1 } : ''}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
        >
            <p className='w-full flex items-center'>
                <motion.span
                    className='inline-block mr-2'
                    animate={hover ? animate() : { x: 0 }}
                >
                    {preIcon}
                </motion.span>
                {text}
                <motion.span
                    className='inline-block ml-2'
                    animate={hover ? animate() : { x: 0 }}
                >
                    {appIcon}
                </motion.span>
            </p>
        </motion.button>
    )
}