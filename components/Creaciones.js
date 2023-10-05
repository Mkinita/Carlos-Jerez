import React from 'react'
import Link from 'next/link'
import ScrollAnimation from '../components/ScrollAnimation';
import Image from 'next/image';

const Creaciones = () => {
  return (

    <>
        <div 
        
        // style={{
        //     backgroundImage: "url(/assets/img/sentence.gif)",
            
        //     backgroundRepeat: "no-repeat",
        //     backgroundPosition: "center",
        //     height: "50vh"
        //   }}
        
        className="pattern py-12 mt-10">
            <div className="max-w-5xl px-6 mx-auto text-center">
                <h2 className="text-2xl font-semibold text-gray-800">Ideas y Momentos de Desarrollo</h2>
                <p className="text-gray-800 mt-4">Bienvenido/a a mi mundo de desarrollo web. Aquí, en mis momentos de ocio y tiempo libre, te invito a descubrir algunas de las emocionantes partes de aplicaciones que construyo, enfocándome en el desarrollo front-end. Me apasiona la programación y siempre busco innovar para mejorar la experiencia del usuario.</p>
                <p className="text-gray-800 mt-4">¡Espero que te guste!</p>
            </div>

        </div>


        



        
        <section class="text-gray-800 bg-gray-800 body-font">
        
                <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                    <div class="p-4 md:w-1/3">
                    <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden py-2">
                    
                    <div className="flex items-center justify-center h-56  rounded-md overflow-hidden">
                                <Image
                                    src="/assets/img/Mobile UI-UX.gif" alt="imagen"
                                    width={320}
                                    height={400}
                                    className=""
                                />
                            </div>
                        <div class="p-6">
                        <ScrollAnimation>
                        <h1 class="title-font text-lg font-medium text-gray-600 mb-3">Clones de Aplicaciones Populares</h1>
                        <p class="leading-relaxed mb-3">¡Bienvenido/a a mi asombroso rincón de clones de aplicaciones! Aquí encontrarás una colección única de clones inspirados en las populares plataformas como Google, Instagram, Netflix y muchas otras.</p>
                        <div class="flex items-center flex-wrap ">
                            <Link href="/clones" className="bg-gradient-to-r from-cyan-400 to-blue-700 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                                Da un vistazo
                            </Link>
                        </div>
                        </ScrollAnimation>
                        </div>
                        
                    </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                    <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden py-2">
                    <div className="flex items-center justify-center h-56  rounded-md overflow-hidden">
                                <Image
                                    src="/assets/img/404-01.gif" alt="imagen"
                                    width={300}
                                    height={400}
                                    className=""
                                />
                            </div>                                     
                        <div class="p-6">
                        <ScrollAnimation>
                        <h1 class="title-font text-lg font-medium text-gray-600 mb-3">404</h1>
                        <p class="leading-relaxed mb-3">¡Explora mi diversidad creativa! Te traigo una variedad de estilos para la página de error 404. Desde lo imaginativo hasta lo innovador, te invito a explorar esta inesperada belleza incluso en los errores.</p>
                        <div class="flex items-center flex-wrap ">
                            <Link href="/error" className="bg-gradient-to-r from-cyan-400 to-blue-700 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                                Da un vistazo
                            </Link>
                        </div>
                        </ScrollAnimation>
                        </div>
                    </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                    <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden p-2">
                    <div className="flex items-center justify-center h-56  rounded-md overflow-hidden">
                                <Image
                                    src="/assets/img/IDEA.gif" alt="imagen"
                                    width={300}
                                    height={400}
                                    className=""
                                />
                            </div>  
                        <div class="p-6">
                        <ScrollAnimation>
                        <h1 class="title-font text-lg font-medium text-gray-600 mb-3">Momentos de Iluminación y Más</h1>
                        <p class="leading-relaxed mb-3">Bienvenido/a a mi espacio creativo, Aquí encontrarás una colección de proyectos que abarcan desde momentos de iluminación hasta efectos sorprendentes, formularios, notificaciones y mucho más.</p>
                        <div class="flex items-center flex-wrap ">
                            <Link href="/ideas" className="bg-gradient-to-r from-cyan-400 to-blue-700 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                                Da un vistazo
                            </Link>
                        </div>
                        </ScrollAnimation>
                        </div>
                    </div>
                    
                        
                    </div>
                </div>
                </div>
                
            </section>
            
    </>
  )
}

export default Creaciones