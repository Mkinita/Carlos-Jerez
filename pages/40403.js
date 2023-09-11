import React from 'react'
import Layout from '@/layout/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Errores from '../components/Errores';

const agr = () => {
    const textToType = "Oops, parece que te perdiste!";
  return (

    <Layout pagina={'Carlos-Jerez'}>
        <div>
            <div class="">
                <Header/>
                    <div className="flex flex-col items-center justify-center h-screen bg-white px-4">
                        <h1><Errores text={textToType} intervalDuration={100} repeatDelay={2000} /></h1>
                        <p className="text-center">La página que estás buscando no existe. ¡Vamos a explorar juntos!</p>
                        <img
                            src="https://i.ibb.co/G9DC8S0/404-2.png"
                            alt="Error 404"
                            className="mt-8 max-w-full animate-pulse"
                        />
                    <Link
                        href="/error"
                        className="mt-8 text-indigo-600 hover:underline text-lg"
                    >
                        Segir Explorando
                    </Link>
                    </div>

                   
                <Footer/>
            </div>
        </div>
    </Layout>
  )
}

export default agr