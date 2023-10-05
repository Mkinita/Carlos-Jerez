import Layout from '@/layout/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Spinner from '@/components/Spinner'
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
                <Spinner/>
            </div>
            <Footer/>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default proyectos