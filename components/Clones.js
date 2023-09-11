import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Clones = () => {
  return (
    <>

        <div className="bg-gray-800 pattern py-2 pb-52">
            <div className="max-w-5xl px-2 mx-auto text-center">
                <div className="flex items-center justify-center mt-10">
                    <div className='grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-3'>
                        <div className="max-w-xs w-full">
                            <div className="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                                <img  class="animate-pulse h-[89px] w-[273px]" src="https://ppc.co/wp-content/uploads/2021/01/Google.png"  alt="google Logo" />
                            </div>
                            <Link href="/google" className="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                <div className="py-2 px-3 text-center text-sm">
                                    <p className="text-gray-300">Buscador De Google</p>
                                </div>
                            </Link>
                        </div>

                        <div className="max-w-xs w-full">
                            <div className="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                                <Image
                                    src="/assets/img/netflix.png" alt="imagen"
                                    width={220}
                                    height={400}
                                    className="a animate-pulse"
                                />
                            </div>
                            <Link href="/netflix" className="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                <div className="py-2 px-3 text-center text-sm">
                                    <p className="text-gray-300">Netflix</p>
                                </div>
                            </Link>
                        </div>

                        <div className="max-w-xs w-full">
                            <div className="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">  
                            <img className='a animate-pulse' width="144" height="144" src="https://img.icons8.com/color/144/facebook-messenger--v1.png" alt="facebook-messenger--v1"/>                            </div>
                            <Link href="/mesenger" className="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                <div className="py-2 px-3 text-center text-sm">
                                    <p className="text-gray-300">Messenger</p>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Clones