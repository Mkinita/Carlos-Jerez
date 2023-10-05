import Layout from '@/layout/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import IdeasEfectos from '@/components/IdeasEfectos'
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
                <IdeasEfectos/>
            </div>
            <Footer/>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default proyectos