import Layout from '@/layout/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Formulario01 from '@/components/Formulario01'
import Image from 'next/image'
import Link from 'next/link'

const proyectos = () => {
  return (
    <>
      <Layout pagina={'Proyectos'}>
        <div>
          <div class="">
            <Header/>
            <div className=''>
                <Formulario01/>
            </div>
            <Footer/>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default proyectos