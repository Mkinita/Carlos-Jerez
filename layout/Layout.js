import Head from "next/head"
import Sidebar from "../components/Sidebar"



export default function Layout({children, pagina}) {

    return (
        <>
            <Head>
                <title>Portafolio - {pagina}</title>
                <meta name="description" content="Portafolio"/>
            </Head>

            <div className="">
                

                <main className="">
                    <div className="h-full font-sans bg-white">
                    
                    {children}
                    </div>
                    
                </main>
            </div>

        
        </>
    )
  }