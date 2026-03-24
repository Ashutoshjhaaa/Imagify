import React from 'react'
import {  useContext,useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext'

const Result = () => {

  const [image, setImage] = useState(assets.sample_img_1)

  const [IsImageLoaded, setIsImageLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')

  const {generateImage} = useContext(AppContext)

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)

    if(input){
      const image = await generateImage(input)
      if(image){
        setImage(image)
        setIsImageLoaded(true)
      }
    }
    setLoading(false)
  }


  return (
    <motion.form 
      initial={{ opacity: 0.2, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }} 

    onSubmit={onSubmitHandler} className='flex flex-col min-h-[90vh] justify-center items-center px-4'>
    <div>
        <div className='relative'>
          <img src={image} alt="" className='w-full max-w-sm rounded' />
          <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${loading ?'w-full transition-all duration-[10s]' : 'w-0'}`}/>

        </div>
        <p className={!loading ? 'hidden':'text-sm mt-2'}>Loading.....</p>
      
    </div>
    {!IsImageLoaded &&
    <div className='flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full overflow-hidden'>

      <input 
      onChange={e => setInput(e.target.value)} value={input}
       type="text" placeholder='Describe what you want to generate' className='flex-1 bg-transparent outline-none ml-4 sm:ml-8 max-sm:w-20 placeholder-color text-xs sm:text-base'/>
      <button type='submit'
      className='bg-zinc-900 px-8 sm:px-16 py-3 rounded-full text-xs sm:text-base'>Generate</button>
      

    </div>
    }
      {IsImageLoaded &&
    <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
      <p onClick={()=>{setIsImageLoaded(false)}}
       className='bg-transparent border border-zinc-900 text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full cursor-pointer text-xs sm:text-base'>Generate Another</p>
      <a href={image} download className='bg-zinc-900 px-8 sm:px-10 py-2.5 sm:py-3 rounded-full cursor-pointer text-xs sm:text-base'>Download</a>
    </div>
    }
    </motion.form>
  )
}

export default Result
