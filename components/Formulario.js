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
                        <div className="flex items-center justify-center h-56  bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                                <Image
                                    src="/assets/img/formulario01.jpg" alt="imagen"
                                    width={300}
                                    height={400}
                                    className=""
                                />
                            </div>
                            <Link href="/formulario01" className="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                <div className="py-2 px-3 text-center text-sm">
                                    <p className="text-gray-300">Revisar</p>
                                </div>
                            </Link>
                        </div>

                        <div className="max-w-xs w-full">
                            <div className="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                                <Image
                                    src="/assets/img/formulario02.jpg" alt="imagen"
                                    width={300}
                                    height={400}
                                    className=""
                                />
                            </div>
                            <Link href="/formulario02" className="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                <div className="py-2 px-3 text-center text-sm">
                                    <p className="text-gray-300">Revisar</p>
                                </div>
                            </Link>
                        </div>

                        <div className="max-w-xs w-full">
                        <div className="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                                <Image
                                    src="/assets/img/Animation.gif" alt="imagen"
                                    width={250}
                                    height={400}
                                    className=""
                                />
                            </div>
                            <Link href="/efectos" className="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                <div className="py-2 px-3 text-center text-sm">
                                    <p className="text-gray-300">Efectos</p>
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