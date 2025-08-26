import React from 'react'
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import author from '../../assets/images/png/SM/author.png'
import book from '../../assets/images/png/SM/book.png'
import vector1 from '../../assets/images/png/SM/vector1.png'
import vector2 from '../../assets/images/png/SM/vector2.png'
import vector3 from '../../assets/images/png/SM/vector3.png'
import vector4 from '../../assets/images/png/SM/vector4.png'
import book1 from '../../assets/images/png/SM/book1.png'
import Reviews from '../../components/Reviews'
import r1 from '../../assets/images/png/MS/r1.png'
import r2 from '../../assets/images/png/MS/r2.png'
import r3 from '../../assets/images/png/MS/r3.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Blogs from '../../components/Blogs'
import blog1 from '../../assets/images/png/MS/blog-1.png'
import blog2 from '../../assets/images/png/MS/blog-2.png'
import blog3 from '../../assets/images/png/MS/blog-3.png'
import comment from '../../assets/images/png/SM/comment.svg'
import Footer from '../../components/Footer'

const SiennaReed = () => {
     const reviewsData = [
        {
          src: r1,
          name: 'Theo Watson',
          designation: 'Technical Expert',
          subject: 'Just listen to him',
          content: 'Suspendisse egestas lacus ac eros euismod, et bibendum mauris placerat. Maecenas eget mauris venenatis, interdum enim sed.',
          rating: 4.5,
        },
        {
          src: r2,
          name: 'Jane Doe',
          designation: 'Designer',
          subject: 'Amazing service',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          rating: 5,
        },
        {
          src: r3,
          name: 'John Smith',
          designation: 'Developer',
          subject: 'Highly recommended',
          content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
          rating: 4,
        },
        {
          src: r1,
          name: 'Alice Johnson',
          designation: 'Manager',
          subject: 'Great experience',
          content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
          rating: 4.7,
        },
      ];
    
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        centerMode: false, // Disable center mode to avoid partial card visibility
        variableWidth: false, // Ensure fixed width for consistency
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true, // Center card on mobile for better UX
              centerPadding: '10px',
            },
          },
        ]
      }

        const blogsData = [
        {
          src: blog1,
          date: "12 Aug, 2025",
          comments: "03 Comments",
          title: "Cras posuere euismod turpis, vitae dignissim urna ante",
          description: "Integevallis arcu sit amet, tempus sem Vlum non maximus nunc."
        },
        {
          src: blog2,
          date: "15 Aug, 2025",
          comments: "05 Comments",
          title: "Suspendisse egestas lacus ac eros euismod",
          description: "Donec dapibus mauris id odio ornare tempus. Ut eget dapibus nunc."
        },
        {
          src: blog3,
          date: "20 Aug, 2025",
          comments: "02 Comments",
          title: "Integer mollis nulla non sapien scelerisque",
          description: "Sed ullamcorper ligula sed risus tincidunt, sit amet pulvinar dui egestas."
        },
        {
          src: blog1,
          date: "25 Aug, 2025",
          comments: "07 Comments",
          title: "Fusce nec eros ut erat facilisis volutpat",
          description: "Cras malesuada dolor sit amet arcu sodales, nec imperdiet ex pretium."
        },
      ];
      const blogSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024, // tablet
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 640, // mobile
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: "10px",
            },
          },
        ],
      };
  return (
    <>
        <Navbar/>

        {/* Hero Section Start */}
            <div className='bg-secondary'>
                <div className='container mx-auto '>
                    <div className='flex flex-col md:flex-row items-center justify-between py-10'>
                        <div className='flex flex-col justify-center px-7 md:px-20'>
                            <h1 className='text-white text-4xl md:text-6xl'>
                                Fuel Your Ambition,<br/> Achieve the Impossible
                            </h1>
                            <div className='mt-5'>
                                <Button label="Buy Now" bgColor="bg-blue"/>
                            </div>
                            <div className='flex justify-between text-white mt-10 md:mt-20 text-xl md:text-2xl border-t-2 py-1'>
                                <h5>Follow Us Now:</h5>
                                <div>
                                    <ul className='flex gap-1 '>
                                        <li>Fb-</li>
                                        <li>In-</li>
                                        <li>Tw-</li>
                                        <li>Yt</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className=' py-6 md:p-14 '>
                            <img src={author} alt="author image" className='h-56 md:h-96'/>
                        </div>
                    </div>
                </div>
            </div>
        {/* Hero Section End */}

        {/* Student Skill Start */}
            <div className="container mx-auto px-5 py-10 md:py-20">
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-14">
                {/* Left Image */}
                <div className="w-full md:w-5/12 flex justify-center">
                <img src={book} alt="Book" className="max-w-xs md:max-w-sm lg:max-w-md w-full h-auto" />
                </div>

                {/* Right Content */}
                <div className="w-full md:w-7/12">
                {/* Heading */}
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
                    Developing Student Skill Sets That Align with the Cognitive, 
                    Emotional, and Technological{" "}
                    <span className="text-[#0000004D]">
                    Demands of an Artificial Intelligence-Infused Global Workforce
                    </span>
                </p>

                {/* Skills Grid */}
                <div className="flex flex-col mt-6 gap-6">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <div className="flex items-center gap-3 border-b py-3">
                        <img src={vector1} alt="image1" className="h-10 sm:h-12" />
                        <h3 className="text-xl sm:text-2xl">Curriculum redesign</h3>
                        </div>
                        <p className="text-sm sm:text-base max-w-[30rem] py-3 font-noto">
                        Nulla maximus lobortis sapien quis finibus. In orci elit, 
                        laoreet eu nunc ac, ultrices tempus sapien.
                        </p>
                    </div>

                    <div>
                        <div className="flex items-center gap-3 border-b py-3">
                        <img src={vector2} alt="image2" className="h-10 sm:h-12" />
                        <h3 className="text-xl sm:text-2xl">AI integration</h3>
                        </div>
                        <p className="text-sm sm:text-base max-w-[30rem] py-3 font-noto">
                        Nulla maximus lobortis sapien quis finibus. In orci elit, 
                        laoreet eu nunc ac, ultrices tempus sapien.
                        </p>
                    </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <div className="flex items-center gap-3 border-b py-3">
                        <img src={vector3} alt="image3" className="h-10 sm:h-12" />
                        <h3 className="text-xl sm:text-2xl">Foundational shift</h3>
                        </div>
                        <p className="text-sm sm:text-base max-w-[30rem] py-3 font-noto">
                        Nulla maximus lobortis sapien quis finibus. In orci elit, 
                        laoreet eu nunc ac, ultrices tempus sapien.
                        </p>
                    </div>

                    <div>
                        <div className="flex items-center gap-3 border-b py-3">
                        <img src={vector4} alt="image4" className="h-10 sm:h-12" />
                        <h3 className="text-xl sm:text-2xl">Critical thinking</h3>
                        </div>
                        <p className="text-sm sm:text-base max-w-[30rem] py-3 font-noto">
                        Nulla maximus lobortis sapien quis finibus. In orci elit, 
                        laoreet eu nunc ac, ultrices tempus sapien.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        {/* Student skill End */}

        {/* More Books Start */}
           <div className="relative">
            <div className='bg-secondary h-[430px] w-full absolute top-0 left-0'></div>
                <div className="container mx-auto pt-6 px-6 sm:pt-10 sm:px-10 relative">
                    {/* Heading */}
                    <p className="text-center text-3xl sm:text-4xl md:text-5xl text-white">
                    More books by Sienna Reed
                    </p>

                    {/* Books Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20  ">
                    {/* Book Card */}
                    <div className="flex flex-col">
                        <img
                        src={book1}
                        alt="book 1"
                        className="border-[12px] sm:border-[16px] border-blue w-full object-contain"
                        />
                        <h5 className="bg-white py-2 text-base sm:text-lg ">
                        Book Title Goes Here
                        </h5>
                        <div className="bg-blue py-2 px-4 flex justify-between font-bold text-white text-sm sm:text-base">
                        <p>Price :</p>
                        <p>$23</p>
                        </div>
                    </div>

                    {/* Repeat other books */}
                    <div className="flex flex-col">
                        <img
                        src={book1}
                        alt="book 1"
                        className="border-[12px] sm:border-[16px] border-blue w-full object-contain"
                        />
                        <h5 className="bg-white py-2 text-base sm:text-lg ">
                        Book Title Goes Here
                        </h5>
                        <div className="bg-blue py-2 px-4 flex justify-between font-bold text-white text-sm sm:text-base">
                        <p>Price :</p>
                        <p>$23</p>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <img
                        src={book1}
                        alt="book 1"
                        className="border-[12px] sm:border-[16px] border-blue w-full object-contain"
                        />
                        <h5 className="bg-white py-2 text-base sm:text-lg">
                        Book Title Goes Here
                        </h5>
                        <div className="bg-blue py-2 px-4 flex justify-between font-bold text-white text-sm sm:text-base">
                        <p>Price :</p>
                        <p>$23</p>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <img
                        src={book1}
                        alt="book 1"
                        className="border-[12px] sm:border-[16px] border-blue w-full object-contain"
                        />
                        <h5 className="bg-white py-2 text-base sm:text-lg ">
                        Book Title Goes Here
                        </h5>
                        <div className="bg-blue py-2 px-4 flex justify-between font-bold text-white text-sm sm:text-base">
                        <p>Price :</p>
                        <p>$23</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        {/* More Books End */}

        {/* Reviews Section Start */}
            <div className='container mx-auto mt-10'>
               <p className="text-center text-3xl sm:text-4xl md:text-5xl ">
                   Client Reviews
                </p> 
                 {/* Review Cards */}
                <div className="container mx-auto py-10 px-2 sm:px-6">
                <Slider {...settings}>
                    {reviewsData.map((review, index) => (
                    <div key={index} className="px-2">
                        <Reviews {...review} />
                    </div>
                    ))}
                </Slider>
                </div>
            </div>
        {/* Reviews Section End */}

        {/* Blogs Section Start */}
            <div className="container mx-auto bg-white px-5 py-10">
                <h3 className="text-3xl md:text-6xl text-black">Our Blogs</h3>
                <p className="text-sm md:text-md text-[#000000B2] font-noto mt-3 max-w-[500px]">
                Orci varius natoque penatibus et magnis dis parturient monteslus mus.
                </p>
                {/* Blog Carousel */}
                    <div className="mt-10">
                    <Slider {...blogSettings}>
                        {blogsData.map((blog, index) => (
                        <div key={index} className="px-3">
                            <Blogs {...blog} commentIcon={comment} readMoreColor="text-blue" />
                        </div>
                        ))}
                    </Slider>
                    </div>
                {/* Blogs End */}
            </div>
        {/* Blog Section End */}
        <Footer/>
    </>
  )
}

export default SiennaReed