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
                    
                        <div className="flex items-center justify-center h-full relative">
                            <img src="/assets/img/Oops! 404 Error with a broken robot.gif"alt="Error 404"className="mt-4 max-w-full"/>

                            
                        </div>
                        <div className='py-0 pb-40'>
                            <Link href="/error" className="">
                                <div className="px-3 text-center text-sm">
                                    <p className="text-gray-300 text-lg hover:animate-pulse">⏪⚙️⏪</p>
                                </div>
                            </Link>
                        </div>

      
    
                    <Footer/>
                </div>
            </div>
        </Layout>
  )
}

export default agr