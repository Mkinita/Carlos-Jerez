import React from 'react'

const Prevencion = () => {
  return (

    <>
        <div className="bg-white pattern py-12 mt-10">
            <div className="max-w-5xl px-6 mx-auto text-center">
                <h2 className="text-2xl font-semibold text-gray-800">Sistema Prevención de Riesgos</h2>
                <p className="text-gray-800 mt-4">Para este proyecto, elegí nuevamente MySQL como base de datos, brindando estabilidad y rendimiento en el manejo de datos críticos de seguridad. Prisma se utilizó como el ORM principal, lo que aceleró el desarrollo y permitió una gestión efectiva de las relaciones entre las tablas de la base de datos.</p>
                <p className="text-gray-800 mt-4">El proyecto se construyo sobre Next.js, lo que garantizó una entrega rápida y una experiencia de usuario fluida. Tailwind CSS se implementó para el estilizado, permitiéndome crear interfaces intuitivas y personalizadas que mejoran la usabilidad y la estética.</p>
                <p className="text-gray-800 mt-4">Te invito a ver el "preview" del proyecto en mi sitio web, donde podrás explorar más detalles. ¡Espero que te guste!</p>
            </div>

        </div>

        <div id="blog" className="bg-gray-800 px-4 xl:px-4 py-14">
            <div className="mx-auto container">
                <span role="contentinfo">
                <h1 tabindex="0" className="focus:outline-none text-center text-3xl lg:text-5xl tracking-wider text-white">Preview</h1>
                </span>
                <div tabindex="0"  aria-label="Group of cards" className="focus:outline-none mt-12 lg:mt-24">
                    <div  className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                        <div tabindex="0" className="focus:outline-none" aria-label="card 1">
                            <video className='focus:outline-none w-full rounded-ss-xl rounded-t-xl' controls autoPlay>
                                <source src="/assets/img/indocadores.mp4" type="video/mp4" />
                                Tu navegador no soporta la reproducción de videos.
                            </video>
                                    
                            <div className="bg-white px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                                <h1 tabindex="0" className="focus:outline-none text-xl text-gray-900 font-semibold tracking-wider">Indicadores en un Vistazo</h1>
                                <p tabindex="0" className="focus:outline-none text-gray-700 text-base lg:text-lg lg:leading-8 tracking-wide mt-6 w-11/12">En este proyecto, desarrollé un Informe de Producción que permite a los administradores ver gráficos de barras con la producción diaria y gráficos circulares que muestran el rendimiento en todas las áreas de la industria. ¡Descubre cómo esta herramienta puede impulsar el éxito en tu empresa! Mira el video para más detalles.</p>
                                <div className="h-5 w-2"></div>
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 py-5 gap-2'>
                                <div>
                                    <video className='focus:outline-none w-full rounded-ss-xl rounded-t-xl' controls autoPlay>
                                        <source src="/assets/img/actual.mp4" type="video/mp4" />
                                        Tu navegador no soporta la reproducción de videos.
                                    </video>
                                    <div className="bg-white px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                                        <h1 tabindex="0" className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider">Producción En Tiempo Real</h1>
                                        <div className="h-5 w-2"></div>
                                    </div>
                                </div>
                                <div>
                                    <video className='focus:outline-none w-full rounded-ss-xl rounded-t-xl' controls autoPlay>
                                        <source src="/assets/img/stock.mp4" type="video/mp4" />
                                        Tu navegador no soporta la reproducción de videos.
                                    </video>
                                    <div className="bg-white px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                                        <h1 tabindex="0" className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider">Stock Sistematico En Tiempo Real</h1>
                                        <div className="h-5 w-2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                
                            <div>
                                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2">
                                    <div tabindex="0" className="focus:outline-none " aria-label="card 2" >
                                        <img tabindex="0" role="img" aria-label="gaming" className="focus:outline-none w-full rounded-ss-xl rounded-t-xl" src="/assets/img/resumen01.png" alt="games" />                                      
                                        <div className="bg-white px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                            <h1 tabindex="0" className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider">Ingreso de Producción</h1>
                                            <p tabindex="0" className="focus:outline-none text-gray-700 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2">Registra producción con calidad y cliente específico. Visualiza el volumen y cantidad de paquetes en línea. Control total de envíos. Optimiza tu proceso con facilidad.</p>
                                        </div>
                                    </div>
                                    <div  tabindex="0" className="focus:outline-none" aria-label="card 3">
                                        <img tabindex="0" role="img" aria-label="gaming" className="focus:outline-none w-fullrounded-ss-xl rounded-t-xl" src="/assets/img/resumennuevo.png" alt="notes" />
                                        <div className="bg-white px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                            <h1 tabindex="0" className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider">Etiquetas Código QR</h1>
                                            <p tabindex="0" className="focus:outline-none text-gray-700 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2">Crea etiquetas personalizadas con códigos QR que contienen toda la información relevante.  Simplifica la gestión y el control de stock  con esta solución avanzada.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                                    <div tabindex="0" className="focus:outline-none " aria-label="card 4">
                                        <img tabindex="0" role="img" aria-label="laptop" className="focus:outline-none w-full rounded-ss-xl rounded-t-xl" src="/assets/img/resumen02.png" alt="laptop" />
                                    <div className="bg-white px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                        <h1 tabindex="0" className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider">Impresión</h1>
                                        <p tabindex="0" className="focus:outline-none text-gray-700 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2">Imprime etiquetas con impresora térmica. Gestión eficiente.</p>
                                    </div>
                                </div>
                                <div tabindex="0" className="focus:outline-none" aria-label="card 5">
                                        <img tabindex="0" role="img" aria-label="worker" className="focus:outline-none w-full rounded-ss-xl rounded-t-xl" src="/assets/img/resumen04.png" alt="worker" />
                                    <div className="bg-white px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                        <h1 tabindex="0" className="focus:outline-none  text-lg text-gray-900 font-semibold tracking-wider">Control</h1>
                                        <p tabindex="0" className="focus:outline-none  text-gray-700 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2">Pega cada etiqueta para control de stock. Monitoreo eficiente.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Prevencion