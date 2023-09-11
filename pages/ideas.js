import Layout from '@/layout/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Ideas from '@/components/Ideas'
import Link from 'next/link'


const clones = () => {
  return (
    <>
      <Layout pagina={'Ideas'}>
        <div>
          <div class="">
            <Header/>
            <Ideas/>
              <Link href="/creaciones" className="fixed bottom-4 right-4 bg-transparent bg-opacity-50 text-black px-4 py-4 rounded-md animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>
              </Link>
            <Footer/>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default clones