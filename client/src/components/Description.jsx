import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Description = () => {
  return (
    <motion.div 
    initial={{opacity: 0.2, y: 100}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 1}}
    viewport={{ once: true }}
    className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
      <p className='text-gray-500 mb-8'>Turn your imagination into visuals</p>

      <div className='flex flex-col gap-10 md:gap-14 md:flex-row items-center '>
        <img src= {assets.sample_img_1} alt="" className='w-full sm:w-80 xl:w-96 rounded-lg' />

        <div className='max-sm:text-center text-left'>
          <h2 className='text-2xl sm:text-3xl font-medium max-w-lg mb-4'>Introducing the AI-Powered Text to Image Generator</h2>
          <p className='text-gray-600 mb-4 text-sm sm:text-base'>Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life!</p>


          <p className='text-gray-600 text-sm sm:text-base'>Simply type in a text prompt images in seconds. From product visuals to character designs, our AI creates stunning visuals in seconds, even concepts that are difficult to visualize! effortlessly. Powered by advanced AI technology.the creative possibilities are endless.</p>

      


        </div>
      </div>
      
    </motion.div>
  )
}

export default Description
