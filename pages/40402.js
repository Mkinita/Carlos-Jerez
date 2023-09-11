import React from 'react'
import Layout from '@/layout/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

const agr = () => {
  return (

<Layout pagina={'Carlos-Jerez'}>
            <div>
                <div class="">
                    <Header/>
                    
<div class="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
	<h1 class="text-9xl font-extrabold text-white tracking-widest animate-bounce">404</h1>
	<div class="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        Página no encontrada
	</div>
	<div class="mt-5">
      <div
        class="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
      >
        <span
          class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>

        <div class="relative block px-8 py-3 bg-[#1A2238] border border-current">
          <Link href="/error">Seguir Explorando</Link>
        </div>
      </div>
    </div>
</div>
                    <Footer/>
                </div>
            </div>
        </Layout>
  )
}

export default agr