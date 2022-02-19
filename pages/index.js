import Head from 'next/head';
// import Image from 'next/image';
import Sidebar from '../components/Sidebar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function Home() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <>
      <Head>
        <title>Love</title>
      </Head>
      <Slider {...settings}>
        <Sidebar/>
        <Sidebar/>
        <Sidebar/>
        <Sidebar/>
        <Sidebar/>
        <Sidebar/>
      </Slider>
      
    </>
    
    
  )
}


