import Layout from '@/layout/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Creaciones from '@/components/Creaciones'
import Link from 'next/link'

const creaciones = () => {
  return (
    <>
        <Layout pagina={'Creaciones-Ideas'}>
            <div>
                <div class="">
                    <Header/>
                    <Creaciones/>
                    
                    <Footer/>
                </div>
            </div>
        </Layout>
    </>
  )
}

export default creaciones