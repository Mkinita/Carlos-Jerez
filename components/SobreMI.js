import React from 'react'
import TypingAnimation from '../components/TypingAnimation';


const SobreMI = () => {
    const textToType = "¡Bienvenido a mi portafolio!";
  return (
        <>
            <div className="bg-gray-800 pattern py-12">
                <div className="max-w-5xl px-6 mx-auto text-center">
                    <h2 className="text-2xl font-semibold text-white"><TypingAnimation text={textToType} intervalDuration={100} repeatDelay={2000} /></h2>

                    <p className="text-gray-400 mt-4">Soy un apasionado programador freelance con una sólida formación en informática y desarrollo de sistemas. Egresado de Ingeniería Informática, mi formación académica incluye un título en Técnico en Programación y Análisis de Sistemas de AIEP.</p>
                    <p className='text-gray-400 mt-4'>La programación es mi pasión y estoy emocionado de formar parte de nuevos desafíos y contribuir con mis habilidades para hacerlos realidad. ¡Gracias por visitar mi portafolio y espero que disfrutes explorando mi trabajo!</p>
                </div>
            </div>
        </>
  )
}

export default SobreMI