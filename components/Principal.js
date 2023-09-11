import React from 'react'
import Image from 'next/image'
import TypingAnimation from '../components/TypingAnimation';


const Principal = () => 
{

    const textToType = "Carlos Jerez";
   

    return (

        <>
           <div className="bg-white mt-5">
                <div className="max-w-2xl px-6 text-center mx-auto p-2">
                    <div className="flex items-end justify-center mt-2">
                        <Image
                            src="/assets/img/carlos.png" alt="imagen"
                            width={1300}
                            height={500}
                            className="w-52 rounded-full"
                            
                        />
                    </div>
                    <p className="text-2xl">Carlos Jerez</p>
                    
                    <p className="text-gray-800">Tecnico en Programacion y Analisis de Sistemas</p>
                    <p className="text-sm text-gray-700">Desarrollador Freelance</p>
                </div>
            </div> 
            
        </>
    )
}

export default Principal