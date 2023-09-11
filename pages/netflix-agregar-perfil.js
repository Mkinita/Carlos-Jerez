import React from 'react'
import Layout from '@/layout/Layout'
import Header from '@/components/Header'
import Link from 'next/link'

const netflix = () => {
  return (
    <>
      <Layout pagina={'Carlos-Jerez'}>
        <Header/>
        <div class='flex items-center justify-center py-32 pb-72 text-gray-800 via-greeen-300'style={{ backgroundColor: '#141414' }}>
          <div class='w-full max-w-lg px-8 py-2 mx-auto' style={{ backgroundColor: '#141414' }}>
            <div class='max-w-md mx-auto space-y-6'>
              <div class="py-4 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-left">
                  <h1 className="text-gray-200 text-4xl md:text-6xl text-left pb-5">Agregar perfil</h1>
                  <p className='text-gray-500 text-xs md:text-sm pb-2'>Agrega un perfil para otra persona que ve Netflix.</p>
                  <div style={{ borderBottom: '1px solid #666' }}></div>
                  <div className='grid grid-cols-3 py-3 pb-3'>
                    <div>
                      <img
                        className="rounded border-2 border-transparent group-hover:border-2 group-hover:border-gray-300"
                        src="https://occ-0-2210-2433.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229"
                        width="120"
                        height="120"
                        alt="Imagen"
                      />
                  </div>
                  <div className='py-12'>
                    <form>
                      <input
                        type="text"
                        className="p-1 w-full bg-gray-500 px-4 text-white"
                        placeholder="Nombre"
                      />
                    </form>
                  </div>
                  <div>
                    <button className=" font-bold py-14 px-1 rounded text-white">
                      ¿Niños?
                    </button>
                  </div>
                </div>
                <div style={{ borderBottom: '1px solid #666' }}></div>
              </div>   
              <div className="flex justify-left items-center space-x-4 py-5">
                <Link href="/netflix-play" className="bg-white hover:bg-red-600 hover:text-white text-black font-bold py-1 px-4">
                  Continuar
                </Link>
                <Link href="/netflix" className="hover:bg-blue-600 text-gray-500 hover:border-white hover:text-white font-bold py-1 px-4 border border-gray-500" style={{ backgroundColor: '#141414' }}>
                  Cancelar
                </Link>
              </div>
            </div>
          </div>
        </div>
            </div>
      </Layout>
    </>
  )
  }

  export default netflix