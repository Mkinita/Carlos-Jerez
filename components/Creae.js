import React from 'react'

const Solicitudes = () => {
  return (
        <>
            
            <div className=" mt-12 lg:mt-24">
                <div  className="grid sm:grid-cols-1 md:grid-cols-1 gap-8">
                    <div tabindex="0" className="" aria-label="card 1">
                    <h2 className="text-2xl font-semibold text-gray-800 max-w-5xl px-6 mx-auto text-center pb-12 py-0">Generación de Órdenes de Compra</h2>
                        <div className="bg-white pb-16 grid grid-cols-1 md:grid-cols-4 px-2 gap-2">
                            <div className="max-w-5xl px-6 mx-auto text-center shadow rounded-lg">
                                <p className="text-gray-800 mt-4 text-lg font-extrabold">Solicitudes Pendientes</p>
                                <p className='text-gray-700 text-sm mt-4 pb-2'>Los usuarios pueden acceder y revisar las solicitudes pendientes de órdenes de compra, donde se detallan las necesidades de productos en diferentes áreas de trabajo.</p>
                            </div>
                            <div className="max-w-5xl px-6 mx-auto text-center shadow rounded-lg">
                                <p className="text-gray-800 mt-4 text-lg font-extrabold">Cotización de Productos</p>
                                <p className='text-gray-700 text-sm mt-4 pb-2'>Para cada solicitud, se realiza una cotización de productos, estableciendo valores y costos según la oferta del mercado.</p>
                            </div>
                            <div className="max-w-5xl px-6 mx-auto text-center shadow rounded-lg">
                                <p className="text-gray-800 mt-4 text-lg font-extrabold">Selección de Proveedor</p>
                                <p className='text-gray-700 text-sm mt-4 pb-2'>Con las cotizaciones en mano, los usuarios pueden seleccionar proveedores basados en factores como precio, calidad y disponibilidad.</p>
                            </div>
                            <div className="max-w-5xl px-6 mx-auto text-center shadow rounded-lg">
                                <p className="text-gray-800 mt-4 text-lg font-extrabold">Aprobación por Supervisores</p>
                                <p className='text-gray-700 text-sm mt-4 pb-2'>Una vez seleccionado el proveedor, la orden de compra se envía para la aprobación de supervisores. El proceso se mantiene transparente y rastreable.</p>
                            </div>
                        </div>
                        <div className="bg-gray-800 px-4 xl:px-4 py-1">

       

  
  <div class="bg-white dark:bg-gray-800 px-3 md:px-4 py-6 pb-1 flex flex-col justify-center items-center">
    
    <h1 class="mt-8 md:mt-4 text-3xl lg:text-xl font-semibold leading-10 text-gray-800 text-center md:w-9/12 lg:w-7/12 dark:text-white">Explorando el Sistema</h1>
    
    
 
  </div></div>
      
                        <div id="blog" className="bg-gray-800 px-4 xl:px-1 py-14 grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div className="mx-auto container">
                                <video className=' w-full rounded-ss-xl rounded-t-xl px-4' controls autoPlay>
                                    <source src="/assets/img/oc.mp4" type="video/mp4" />
                                    Tu navegador no soporta la reproducción de videos.
                                </video>
                            </div>

                            <div className="mx-auto container">
                                <video className=' w-full rounded-ss-xl rounded-t-xl px-4' controls autoPlay>
                                    <source src="/assets/img/oc.mp4" type="video/mp4" />
                                    Tu navegador no soporta la reproducción de videos.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Solicitudes