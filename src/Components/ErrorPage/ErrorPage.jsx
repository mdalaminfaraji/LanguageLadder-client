import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import { Player } from '@lottiefiles/react-lottie-player';
import { FaArrowLeft} from "react-icons/fa";

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className='flex items-center h-screen p-16 bg-red-100  text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <Player
         src='https://assets4.lottiefiles.com/packages/lf20_afwjhfb2.json'
         className="player" 
         loop 
         autoplay
         style={{ height: '500px', width: '500px' }}
         speed={1}
        />
        
        <div className='max-w-md text-center pb-5'>
         
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            {error?.message}
          </p>
          <div className='inline-flex items-center p-4 hover:bg-blue-600 hover:underline hover:text-white font-semibold rounded-full  bg-cyan-200 text-gray-900'>
          <FaArrowLeft className='text-red-400 me-1'/> <Link
            to='/'
            
          >
          Back to Homepage
          </Link>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default ErrorPage