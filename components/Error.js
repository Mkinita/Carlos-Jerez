import React from 'react'
import ScrollAnimation from '../components/ScrollAnimation';
import Link from 'next/link';


const Error = () => {
  return (
   <>
    <div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div class="relative">
                    <div class="absolute">
                        <div class="">
                            <h1 class="my-2 text-gray-800 font-bold text-2xl text-center">
                                Parece que has encontrado la puerta al gran 404
                            </h1>
                            <p class="my-2 text-gray-800 text-center">¡Lo lamento! debes Visitar mi página</p>
                           
                        </div>
                    </div>
                    <div className=''>
                        <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
                    </div>
                </div>
            </div>
            <div className='hidden md:block'>
                <img src="/assets/img/robot.gif" />
            </div>
        </div>

        <div class="text-gray-800 bg-gray-800 body-font py-5 pb-5 px-4">
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                <div className='shadow rounded-lg bg-white p-2'>
                    <img tabindex="0" role="img" aria-label="gaming" className=" scale-75 transition-all duration-400 hover:scale-90" src="/assets/img/40401.png" alt="games" />
                   <div className='text-center hover:animate-pulse'>
                    <Link href="/40401" className="block w-1/2 m-auto bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-95">
                        <div className="py-2 px-3 text-center text-sm">
                            <p className="text-gray-300">Da Un Vistazo👀</p>
                        </div>
                    </Link>
                    </div>
                </div>

                <div className='shadow rounded-lg bg-white p-2'>
                    <img tabindex="0" role="img" aria-label="gaming" className="scale-75 transition-all duration-400 hover:scale-90" src="/assets/img/40403.png" alt="games" />
                   <div className='text-center hover:animate-pulse'>
                    <Link href="/40402" className="block w-1/2 m-auto bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-95">
                        <div className="py-2 px-3 text-center text-sm">
                            <p className="text-gray-300">Da Un Vistazo👀</p>
                        </div>
                    </Link>
                    </div>
                </div>

                <div className='shadow rounded-lg bg-white p-2'>
                    <img tabindex="0" role="img" aria-label="gaming" className=" scale-75 transition-all duration-400 hover:scale-90" src="/assets/img/40402.png" alt="games" />
                   <div className='text-center hover:animate-pulse'>
                    <Link href="/40403" className="block w-1/2 m-auto bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-95">
                        <div className="py-2 px-3 text-center text-sm">
                            <p className="text-gray-300">Da Un Vistazo👀</p>
                        </div>
                    </Link>
                    </div>
                </div>

                <div className='shadow rounded-lg bg-white p-2'>
                    <img tabindex="0" role="img" aria-label="gaming" className=" scale-75 transition-all duration-400 hover:scale-90" src="/assets/img/40404.png" alt="games" />
                   <div className='text-center hover:animate-pulse'>
                    <Link href="/40404" className="block w-1/2 m-auto bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-95">
                        <div className="py-2 px-3 text-center text-sm">
                            <p className="text-gray-300">Da Un Vistazo👀</p>
                        </div>
                    </Link>
                    </div>
                </div>

                
                
                

            </div>
        
                
                
        </div>
        <Link href="/creaciones" className="fixed bottom-4 right-4 bg-transparent bg-opacity-50 text-black px-4 py-4 rounded-md animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>
              </Link>
        </>



  )
}

export default Error