import React from 'react'
import '../App.css'
import Navbar from '../components/Navbar'
import banner from '../assets/images/png/Calyn.png'
import bookCover from '../assets/images/png/bookCover.png'
import Button from '../components/Button'
import explore from '../assets/images/png/explore.png'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <Navbar/>

         {/* Hero Section Start */}
              <div className=" flex flex-col lg:flex-row items-center justify-center py-4 px-24 mt-16 ">
                      {/* Left Section */}
                      <div className="text-center md:text-left">
                        <h1 className="text-[200px] leading-none ">Calyn</h1>
                        <p className="text-lg font-noto tracking-wide mt-65  max-w-[400px] mx-auto md:mx-0">
                          Lorem ipsum dolor sit amet consectetur. Lacinia etiam elementum 
                          senectus ac integer. Elit nisi platea aliquet viverra.
                        </p>
                      </div>
        
                      {/* Image */}
                      <img src={banner} alt="Banner" className="h-[500px] w-auto" />
        
                      {/* Right Section */}
                      <h1 className="text-[200px] leading-none">Smart</h1>
              </div>
         {/* Hero Section End */}

        {/* Paragraph */}
            <div className='flex justify-center items-center  text-center px-28 mt-24'>
                <p className='text-4xl   md:mx-0'>
                Lorem ipsum dolor sit amet consectetur. Elit enim eu rhoncus ultricies. 
                Morbi felis magna purus sit nullam eu dictumst convallis nibh.
                In habitant quis auctor in augue nulla sed vestibulum quam. Dolor volutpat ac.
                </p>
            </div>
        {/* Book Cover */}
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center mt-20  ">
                {/* Left: Image */}
                <img src={bookCover} alt="bookCover" className="h-[800px] " />
                {/* Right: Text */}
                <div className="max-w-[500px] flex flex-col md:items-start  md:text-left">
                    <h2 className="text-5xl ">Book Title Goes Here</h2>
                    <p className="mt-10 font-noto text-lg ">
                    Lorem ipsum dolor sit amet consectetur. Lacinia etiam elementum
                    senectus ac integer. Elit nisi platea aliquet viverra.
                    </p>
                <div className="mt-10">
                    <Button label="Purchase Now" />
                </div>
                </div>
            </div>
        {/*More Books  */}
            <div className='flex flex-col justify-center items-center mt-10 text-center'>
            <h2 className='text-5xl'>More Books to Read</h2>
                <p className='mt-10 text-lg max-w-[600px]  md:mx-0'>
                Lorem ipsum dolor sit amet consectetur. Lacinia etiam elementum senectus ac integer.
                Elit nisi platea aliquet viverra.
                </p>
            </div>
        {/* Book Carousel */}
            <Carousel/>

        {/* Explore Start */}
            <div className='flex flex-col justify-center items-center text-center mt-28'>
                <h3 className='text-7xl  max-w-[350px]'>Eplore  Calyn Smart</h3>
                <img src={explore} alt="explore" className='h-96  mt-14'/>
            </div>
        {/* Explore End */}

        {/*  */}
        <div className='flex flex-col justify-center items-center text-center mt-24'>
            <h3 className='text-7xl max-w-[600px]'>Lorem ipsum dolor sit amet consectetur.</h3>
            <p className='text-lg font-noto max-w-[550px] mt-3'>Lorem ipsum dolor sit amet consectetur. Elit enim eu rhoncus ultricies. 
                Morbi felis magna purus sit nullam eu dictumst convallis nibh. 
                </p>
            <div className='mt-3'>
                <Button label="Explore Calyn Smart."/>
            </div>
        </div>
        
        {/* Footer */}
        <div>
            <Footer/>
        </div>

        
        
        
        
    </>
  )
}

export default Home