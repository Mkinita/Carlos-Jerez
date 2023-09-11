import React from 'react'
import Header from '@/components/Header'
import Layout from '@/layout/Layout'
import Link from 'next/link'

const google = () => {
  return (
    <>
      <Layout pagina={'Google'}>
        <Header/>
        <div className="flex h-screen flex-col items-center justify-center bg-white">
        
          <div>
            <img className="h-[89px] w-[273px]" src="https://ppc.co/wp-content/uploads/2021/01/Google.png" alt="google Logo" />
          </div>
          <div className="md:w-[584px] mx-auto mt-7 flex w-[92%] items-center rounded-full border hover:shadow-md">
            <div className="pl-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input type="text" className="w-full bg-transparent rounded-full py-[14px] pl-4 outline-none" />
            <div className="pr-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
          </div>
          <div className="mt-3 flex space-x-12">
            <div className="bg-[#f8f9fa] px-2 py-1">Buscar con Google</div>
            <div className="bg-[#f8f9fa] px-2 py-1">Voy a tener suerte</div>
          </div>
          <p className='py-8 text-xs'>Ofrecido por Google en: <button className='text-blue-700'>Español (Latinoamérica)</button></p>
          
        </div>
        <Link href="/clones" className="fixed bottom-4 right-4 bg-transparent bg-opacity-50 text-black px-4 py-4 rounded-md animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>
              </Link>
      </Layout>
    </>
  )
}

export default google