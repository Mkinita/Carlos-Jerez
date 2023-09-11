import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Proyectos = () => {
  return (

    <>
        <div className="bg-gray-800 pattern py-20">
            <div className="max-w-5xl px-6 mx-auto text-center">
                <h2 className="text-2xl font-semibold text-white">Proyectos</h2>

                <div className="flex items-center justify-center mt-10">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                        <div className="max-w-xs w-full">
                            <div className="flex items-center justify-center h-56 bg-white  rounded-md overflow-hidden">
                                <Image
                                    src="/assets/img/Dashboard.gif" alt="imagen"
                                    width={600}
                                    height={800}
                                    className=""
                                />
                            </div>

                            

                            <Link href="/control-produccion" className="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                <div className="py-2 px-3 text-center text-sm">
                                    <p className="text-gray-300">Sistema de Control Producción y Control de Stock en Industrias Madereras.</p>

                                    <span className="block text-gray-500 mt-2">Revisar el preview</span>
                                </div>
                            </Link>
                        </div>

                        {/* <div className="max-w-xs w-full">
                            <div className="flex items-center justify-center h-56 bg-white  rounded-md overflow-hidden">
                                <Image
                                    src="/assets/img/Construction hat.gif" alt="imagen"
                                    width={230}
                                    height={500}
                                    className=""
                                />
                            </div>

                            <Link href="/prevencion" className="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                <div className="py-2 px-3 text-center text-sm">
                                    <p className="text-gray-300">Sistema para Prevención de Riesgos de Levantamientos de incidentes y condiciones.</p>

                                    <span className="block text-gray-500 mt-2">Revisar el preview</span>
                                </div>
                            </Link>
                        </div> */}

                        <div className="max-w-xs w-full">
                            <div className="flex items-center justify-center h-56 bg-white  rounded-md overflow-hidden">
                                <Image
                                    src="/assets/img/Product quality.gif" alt="imagen"
                                    width={600}
                                    height={600}
                                    className=""
                                />
                            </div>

                            <Link href="ordenes-compras" className="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                <div className="py-2 px-3 text-center text-sm">
                                    <p className="text-gray-300">Sistemas Órdenes de Compra - Plataforma de Gestión de Compras</p>

                                    <span className="block text-gray-500 mt-2 ">Revisar el preview</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center mt-12 animate-pulse">
                    <a className="flex items-center text-white hover:underline hover:text-gray-200" href="https://github.com/Mkinita">
                        <span className=''>Revisa el código en Github</span>

                        <svg className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        
    </>
  )
}

export default Proyectos