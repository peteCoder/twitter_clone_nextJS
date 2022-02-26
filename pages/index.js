import Head from 'next/head';
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';


export default function Home() {
  return (
    <>
      <Head>
        <title>Twitter Build</title>
      </Head>
      
      <main className='bg-black min-h-screen flex max-w-[1500px] mx-auto'>
        {/* Sidebar */}
        <Sidebar/>

        {/* Feed */}
        <Feed/>


        {/* Widgets */}

        {/* Modal */}
      </main>
    </>
    
  )
}


