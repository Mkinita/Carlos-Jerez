import Layout from '@/layout/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Error from '@/components/Error'


const creaciones = () => {
  return (
    <>
        <Layout pagina={'Creaciones-Ideas'}>
            <div>
                <div class="">
                    <Header/>
                    <Error/>
                    <Footer/>
                </div>
            </div>
        </Layout>
    </>
  )
}

export default creaciones