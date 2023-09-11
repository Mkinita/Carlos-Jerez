import Layout from '@/layout/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Prevencion from '@/components/Prevencion'

const prevencion = () => {
  return (
    
    <>
        <Layout pagina={'Proyectos'}>
            <div>
                <div class="">
                    <Header/>
                    <Prevencion/>
                    <Footer/>
                </div>
            </div>
        </Layout>
    </>
  )
}

export default prevencion