import Head from 'next/head';
import { Feed, Sidebar } from '../components';


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


