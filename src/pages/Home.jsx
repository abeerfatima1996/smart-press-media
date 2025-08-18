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
            <Navbar />

            {/* Hero Section Start */}
            <div className="container mx-auto">
                <div className=" hidden lg:flex items-center justify-center py-4 px-24 mt-14 ">
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
            <div className="container mx-auto  lg:hidden flex flex-col items-center justify-center py-4 px-24 mt-5 ">
                {/* Left Section */}
                <div className="text-center md:text-left">
                    <h1 className="text-9xl sm:text-9xl leading-none mb-12 ">Calyn</h1>
                </div>

                {/* Image */}
                <img src={banner} alt="Banner" className="h-[400px] w-auto" />

                {/* Right Section */}
                <h1 className="text-9xl sm:text-9xl leading-none">Smart</h1>
                <p className="text-lg  font-noto tracking-wide    mx-auto md:mx-0">
                    Lorem ipsum dolor sit amet consectetur. Lacinia etiam elementum
                    senectus ac integer. Elit nisi platea aliquet viverra.
                </p>
            </div>
            {/*Mobile Hero Section End */}


            {/* Paragraph */}
            <div className='conatiner mx-auto flex justify-center items-center text-center px-10 sm:px-14 lg:px-28 mt-24'>
                <p className='text-3xl md:text-5xl '>
                    Lorem ipsum dolor sit amet consectetur. Elit enim eu rhoncus ultricies.
                    Morbi felis magna purus sit nullam eu dictumst convallis nibh.
                    In habitant quis auctor in augue nulla sed vestibulum quam. Dolor volutpat ac.
                </p>
            </div>

            {/* Book Cover */}
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center mt-20  ">
                {/* Left: Image */}
                <img src={bookCover} alt="bookCover" className="h-[500px] md:h-[700px] " />
                {/* Right: Text */}
                <div className="max-w-[500px] flex flex-col items-center lg:items-start px-5 sm:px-10  md:px-0  ">
                    <h2 className="text-4xl md:text-7xl ">Book Title Goes Here</h2>
                    <p className="mt-10 text-center lg:text-start font-noto text-md md:text-lg ">
                        Lorem ipsum dolor sit amet consectetur. Lacinia etiam elementum
                        senectus ac integer. Elit nisi platea aliquet viverra.
                    </p>
                    <div className="mt-10">
                        <Button label="Purchase Now" />
                    </div>
                </div>
            </div>

            {/*More Books  */}
            <div className='container mx-auto flex flex-col justify-center items-center mt-10 text-center'>
                <h2 className='text-4xl md:text-6xl'>More Books to Read</h2>
                <p className='mt-10 text-lg font-noto max-w-[600px]  md:mx-0'>
                    Lorem ipsum dolor sit amet consectetur. Lacinia etiam elementum senectus ac integer.
                    Elit nisi platea aliquet viverra.
                </p>
            </div>
            {/* Book Carousel */}
            <Carousel />

            {/* Explore Start */}
            <div className='flex flex-col justify-center items-center text-center mt-36'>
                <h3 className='text-6xl  md:text-8xl  max-w-[450px]'>Eplore  Calyn Smart</h3>
                <img src={explore} alt="explore" className='h-72 md:h-96  mt-14' />
            </div>
            {/* Explore End */}

            {/*  */}
            <div className='flex flex-col justify-center items-center text-center mt-24'>
                <h3 className='text-4xl md:text-6xl max-w-[700px]'>Lorem ipsum dolor sit amet consectetur.</h3>
                <p className='text-md md:text-lg font-noto max-w-[550px] mt-7'>Lorem ipsum dolor sit amet consectetur. Elit enim eu rhoncus ultricies.
                    Morbi felis magna purus sit nullam eu dictumst convallis nibh.
                </p>
                <div className='mt-7'>
                    <Button label="Explore Calyn Smart." />
                </div>
            </div>

            {/* Footer */}
            <div>
                <Footer />
            </div>





        </>
    )
}

export default Home