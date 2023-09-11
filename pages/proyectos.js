import Layout from '@/layout/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Proyectos from '@/components/Proyectos'


const proyectos = () => {
  return (
    <>
      <Layout pagina={'Proyectos'}>
        <div>
          <div class="">
            <Header/>
            <Proyectos/>
            <Footer/>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default proyectos