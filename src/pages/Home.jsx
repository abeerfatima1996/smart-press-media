import React from 'react'
import '../App.css'
import Navbar from '../components/Navbar'
import banner from '../assets/images/png/banner.png'
import bookCover from '../assets/images/png/bookCover.png'
import Button from '../components/Button'
import explore from '../assets/images/png/explore.png'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <div className='bg-black text-white pb-3 '>
                <Navbar />
                <div className="bg-[url('./assets/images/png/frame.png')] bg-contain bg-no-repeat bg-center">
                {/* Hero Section Start */}
                <div className="container mx-auto">
                    <div className=" hidden lg:flex items-center justify-center py-4 px-24 mt-10 ">
                        {/* Left Section */}
                        <div className="text-center md:text-left">
                            <h1 className="lg:text-[200px] leading-none ">Calyn</h1>
                            <p className="text-lg font-noto tracking-wide max-w-96  mt-5 mx-auto md:mx-0">
                                Lorem ipsum dolor sit amet consectetur. Lacinia etiam elementum
                                senectus ac integer. Elit nisi platea aliquet viverra.
                            </p>
                        </div>

                        {/* Image */}
                        <div className='shrink-0'>
                            <img src={banner} alt="Banner" className="h-full w-[400px] object-contain" />
                        </div>
                        {/* Right Section */}
                        <h1 className="text-[200px] leading-none">Smart</h1>
                    </div>
                </div>
                {/* Hero Section End */}

                {/* Mobile Hero Section Start */}
                <div className="container mx-auto  lg:hidden flex flex-col items-center justify-center py-4 px-5  ">
                    {/* Left Section */}
                    <div className="text-center md:text-left">
                        <h1 className="text-9xl sm:text-9xl leading-none mb-8 ">Calyn</h1>
                    </div>

                    {/* Image */}
                    <img src={banner} alt="Banner" className="h-[400px] w-auto mb-3" />

                    {/* Right Section */}
                    <h1 className="text-9xl sm:text-9xl leading-none">Smart</h1>
                    <p className="text-md font-noto text-center">
                        Lorem ipsum dolor sit amet consectetur. Lacinia etiam elementum
                        senectus ac integer. Elit nisi platea aliquet viverra.
                    </p>
                </div>
                {/*Mobile Hero Section End */}


                {/* Paragraph */}
                <div className='container mx-auto flex justify-center items-center text-center px-5 sm:px-14 lg:px-28 mt-10 lg:mt-16'>
                    <p className='text-2xl md:text-5xl '>
                        Lorem ipsum dolor sit amet consectetur. Elit enim eu rhoncus ultricies.
                        Morbi felis magna purus sit nullam eu dictumst convallis nibh.
                        In habitant quis auctor in augue nulla sed vestibulum quam. Dolor volutpat ac.
                    </p>
                </div>

                {/* Book Cover */}
                <div className="container mx-auto mt-20 px-5 sm:px-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-x-24">
                        {/* Left: Image */}
                        <div className="w-full lg:w-6/12 flex justify-center">
                        <img
                            src={bookCover}
                            alt="bookCover"
                            className="h-auto w-full max-w-sm sm:max-w-md lg:max-w-full object-contain"
                        />
                        </div>

                        {/* Right: Content */}
                        <div className="w-full lg:w-6/12 text-center lg:text-left">
                        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl  leading-tight">
                            Book Title Goes Here
                        </h2>

                        <p className="mt-3 sm:mt-10 font-noto text-base sm:text-lg leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur. Lacinia etiam elementum
                            senectus ac integer. Elit nisi platea aliquet viverra.
                        </p>

                        <div className="mt-3 sm:mt-10 flex justify-center lg:justify-start">
                            <Button label="Purchase Now" />
                        </div>
                        </div>
                    </div>
                </div>



                {/*More Books  */}
                <div className='container mx-auto flex flex-col justify-center items-center mt-12 px-5 text-center'>
                    <h2 className='text-4xl md:text-6xl'>More Books to Read</h2>
                    <p className='mt-5 text-md font-noto max-w-[600px]  md:mx-0'>
                        Lorem ipsum dolor sit amet consectetur. Lacinia etiam elementum senectus ac integer.
                        Elit nisi platea aliquet viverra.
                    </p>
                </div>
                {/* Book Carousel */}
                    <Carousel />
                </div>
                {/* Explore Start */}
                    <div className="container mx-auto flex flex-col justify-center items-center text-center mt-12 md:mt-20">
                        <h3 className='text-6xl  md:text-8xl  max-w-[450px]'>Eplore  Calyn Smart</h3>
                        <img src={explore} alt="explore" className='h-full w-full  mt-10' />
                    </div>
                {/* Explore End */}

                {/*  */}
                <div className='flex flex-col justify-center items-center text-center mt-14 px-5'>
                    <h3 className='text-4xl md:text-6xl max-w-[700px]'>Lorem ipsum dolor sit amet consectetur.</h3>
                    <p className='text-md md:text-lg font-noto max-w-[550px] mt-5'>Lorem ipsum dolor sit amet consectetur. Elit enim eu rhoncus ultricies.
                        Morbi felis magna purus sit nullam eu dictumst convallis nibh.
                    </p>
                    <div className='mt-5'>
                        <Button label="Explore Calyn Smart." />
                    </div>
                </div>

                {/* Footer */}
                <div>
                    <Footer />
                </div>
            </div>
            





        </>
    )
}

export default Home