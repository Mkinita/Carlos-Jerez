import React from 'react'
import Link from 'next/link'

const Prevencion = () => {
  return (

    <>
        <div className="bg-white pattern py-12 mt-10">
            <div className="max-w-5xl px-6 mx-auto text-center">
                <h2 className="text-2xl font-semibold text-gray-800">Sistema Órdenes de Compra</h2>
                <p className="text-gray-800 mt-4">Para este proyecto, elegí nuevamente MySQL como base de datos, brindando estabilidad y rendimiento en el manejo de datos críticos de seguridad. Prisma se utilizó como el ORM principal, lo que aceleró el desarrollo y permitió una gestión efectiva de las relaciones entre las tablas de la base de datos.</p>
                <p className="text-gray-800 mt-4">El proyecto se construyo sobre Next.js, lo que garantizó una entrega rápida y una experiencia de usuario fluida. Implementé Node.js para la gestión de notificaciones por correo electrónico. Tailwind CSS se implementó para el estilizado, permitiéndome crear interfaces intuitivas y personalizadas que mejoran la usabilidad y la estética.</p>
                <p className="text-gray-800 mt-4">Te invito a ver el "preview" del proyecto en mi sitio web, donde podrás explorar más detalles. ¡Espero que te guste!</p>
            </div>

        </div>
        

        <div className="bg-gray-800 px-4 xl:px-4 py-4">

        

  
  <div class="bg-white dark:bg-gray-800 px-3 md:px-4 py-6 pb-1 flex flex-col justify-center items-center">
    
  <h1 class="mt-8 md:mt-4 text-3xl lg:text-4xl font-semibold leading-10 text-gray-800 text-center md:w-9/12 lg:w-7/12 dark:text-white">Explorando el Sistema</h1>
    <p class="mt-4 text-base leading-normal text-center text-gray-600 md:w-9/12 lg:w-7/12 dark:text-white">Explora de manera rápida y eficiente cómo opera nuestro sistema de órdenes de compra a través de una serie de videos informativos. En menos de tres minutos, te llevaremos a través de cada paso esencial, desde la creación hasta la autorización de las órdenes.</p>
    
  
</div>
            
        


<div class="md:flex md:justify-center md:space-x-8 md:px-14 pb-5 py-0">

      
      <div class="mt-16 py-2 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
       
        <div class="w-sm">
          
          <div class="mt-4 text-gray-800 text-center">
            
            <h1 class="text-xl font-bold">Solicitud</h1>
            <p class="mt-4 text-gray-600">El proceso es simple: los usuarios crean solicitudes especificando el área de trabajo, la cantidad y los detalles de los productos necesarios.</p>
            
                <Link href="solicitudes" className="">
                    <div className="py-6 px-3 text-center text-lg">
                        <span className="mt-8 mb-4 py-2 px-14 rounded-full bg-gray-800 text-white tracking-widest hover:bg-gray-500 transition duration-200">Ver Video</span>
                    </div>
                </Link>
          </div>
        </div>
      </div>

      
      <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div class="w-sm">
          
          <div class="mt-4 text-gray-800 text-center">
            <h1 class="text-xl font-bold">Órdenes de Compra</h1>
            <p class="mt-4 text-gray-600">El usuario visualiza las solicitudes pendientes, cotiza los productos, selecciona proveedor y genera la O.C a la espera de aprobación por supervisor. </p>
            <Link href="crear-oc" className="">
                    <div className="py-6 px-3 text-center text-lg">
                        <span className="mt-8 mb-4 py-2 px-14 rounded-full bg-gray-800 text-white tracking-widest hover:bg-gray-500 transition duration-200">Ver Video</span>
                    </div>
            </Link>
          </div>
        </div>
      </div>

      
      <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div class="w-sm">
          
          <div class="mt-4 text-gray-800 text-center">
            <h1 class="text-xl font-bold">Aprobación</h1>
            <p class="mt-4 text-gray-600">El supervisor revisa y aprueba la O.C. Una vez aprobada, los usuarios pueden acceder al sistema para visualizar el PDF generado de la Orden de Compra. </p>
            <Link href="solicitudes" className="">
                    <div className="py-6 px-3 text-center text-lg">
                        <span className="mt-8 mb-4 py-2 px-14 rounded-full bg-gray-800 text-white tracking-widest hover:bg-gray-500 transition duration-200">Ver Video</span>
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

export default Prevencion