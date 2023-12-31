import Layout from '@/layout/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Efectos from '@/components/Efectos'


const proyectos = () => {
  return (
    <>
      <Layout pagina={'Proyectos'}>
        <div>
          <div class="">
            <Header/>
            <Efectos/>
            <Footer/>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default proyectos