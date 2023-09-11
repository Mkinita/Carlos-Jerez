import React from 'react'
import Layout from '@/layout/Layout'
import Link from 'next/link'

const netflix = () => {
  return (
    <>
        <Layout pagina={'Netflix'}>
            <div class="text-white body-font fixed top-0 bg-gradient-to-b from-black w-full z-50">
                <div class=" px-16 flex flex-wrap p-5 flex-col md:flex-row items-center ">
                    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    
                        <img class="" src="https://assets.nflxext.com/en_us/layout/ecweb/common/logo-shadow2x.png" alt="Logo" />    
                    </a>
                    <nav  class="md:ml-auto hidden  lg:flex flex-wrap space-x-6 items-center text-base justify-center font-semibold">
                        <Link href="/netflix">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                        </svg>
                        </Link>

                        <button class="flex items-center">
                            <img class="" src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABTw7t_oDR-SWh9ddj9kh9AlOqCabZMupMWano7R5wg9x1_KPjvABqKHNeCxcMddK7Ku9HsV6keglPmWPZeh0lKU.png?r=fcc" alt="Logo" />    
                        <svg class="w-5 h-5 stroke-current text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </nav>
                </div>
            </div>  
            <div class="w-full   relative">
            <div class="absolute w-full h-full z-10 ">
                <div class="px-16  h-full flex items-center justify-start "> 
                    <div class="flex lg:flex flex-col w-2/5 space-y-4 py-12 ">
                        <img class="" src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABe_MJtJKPmsSU3pjUiW7bRyT8Hg_kAJPLRj6rNNltpjGgSphvfVGjXLQ-_Ic1FIYJ319RRDnIdqPk9D8Uq2X8oHSGVrwbHfx3j1dW_6GncJ2IKZ3OVRybWHjTMdUVY_CLeo3z2EQotzC1-faA7LSygaF5sxsqoskzrVPj6n-NS80jg.png?r=4af" alt="Logo" />    
                        <h3 class="text-2xl font-semibold text-white "></h3>
                        <p class="text-lg text-white"></p>
                        <div class="flex space-x-4 flex-row w-full">
                            <button class=" px-3 mt-5 items-center shadow-md rounded-lg bg-white  space-x-2 py-2 justify-center flex w-32">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>
                                <span class="text-gray-800 font-semibold">Reproucir</span>
                            </button>
                            <button class=" px-3 mt-5 items-center shadow-md rounded-lg bg-gray-500 bg-opacity-50  space-x-2 py-2 justify-center flex w-auto">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <span class="text-white font-semibold">Mas información</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute w-full h-64 bottom-0 bg-gradient-to-t from-black"></div>
                <img class="" src="https://assets.nflxext.com/ffe/siteui/vlv3/c0a32732-b033-43b3-be2a-8fee037a6146/2fe6e3c0-5613-4625-a0c1-3d605effd10b/IN-en-20210607-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="Logo" />                       
            </div>
            
      </Layout>
    </>
  )
  }

  export default netflix