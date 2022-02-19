import Head from 'next/head';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';
import Baby from '../public/child.jpg';


export default function Home() {
  return (
    <>
      <Head>
        <title>Love</title>
      </Head>
      <div className="flex m-10 shadow flex-col-reverse max-w-[200px] md:flex-row p-6 relative md:max-w-[540px] mx-auto  overflow-hidden rounded-md">
        <Sidebar />
        <img className='md:object-cover h-[90px] mx-auto max-w-[90px] md:max-w-[200px] rounded-[50%] md:rounded-none md:absolute md:top-0 md:right-0 md:h-full ' src="/child.jpg" alt="baby" width={100} height={100}/>
      </div>
    </>
    
    
  )
}


