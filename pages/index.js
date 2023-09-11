import React from 'react'
import Principal from '@/components/Principal'
import Layout from '@/layout/Layout'
import SobreMI from '@/components/SobreMI'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'


const index = () => {
  return (
    <>
        <Layout pagina={'Carlos-Jerez'}>
            <div>
                <div class="">
                    <Header/>
                    <Principal/>
                    <SobreMI/>
                    
                    {/* <InformacionPersonal/> */}
                    {/* <Suscribetex/> */}
                    {/* <Creaciones/>
                    <Proyectos/> */}
                    
                    <Footer/>
                </div>
            </div>
        </Layout>
    </>
  )
}

export default index