import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from "motion/react"

const Steps = () => {
  return (

    <motion.div 
    initial={{opacity: 0.2, y: 100}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 1}}
    viewport={{ once: true  }}

    className='flex flex-col items-center justify-center my-32'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>How it works</h1>

        <p className='text-lg text-gray-600 mb-8'>Transform Words Into Stunning Images</p>

        <div className='flex flex-col gap-4 w-full max-w-3xl text-sm'>
            {stepsData.map((item, index) => (
                <div key={index} className='flex items-center gap-4 bg-white border px-5 sm:px-8 py-4 sm:py-5 rounded-lg shadow-md hover:scale-[1.02] transition-all duration-300'>
                    <img src={item.icon} alt="" className='w-10 sm:w-12' />
                    <div>
                        <h2 className='text-lg sm:text-xl font-medium'>{item.title}</h2>
                        <p className='text-gray-500 text-xs sm:text-base'>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
      
    </motion.div>
  )
}

export default Steps
