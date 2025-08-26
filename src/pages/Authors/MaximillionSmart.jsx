import React from 'react'
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import heroSec from '../../assets/images/png/MS/hero.png' 
import icon from '../../assets/images/png/MS/icon-1.png'
import Button from '../../components/Button'
import theVeil from '../../assets/images/png/MS/theVeil.png'
import veil from '../../assets/images/png/MS/veil.png'
import code from '../../assets/images/png/MS/code.png'
import shape1 from '../../assets/images/png/MS/shape-1.png'
import shape2 from '../../assets/images/png/MS/shape-2.png'
import shape3 from '../../assets/images/png/MS/shape-3.png'
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
import Footer from '../../components/Footer'
import comment from '../../assets/images/png/MS/comment.svg'


const MaximillionSmart = () => {
   const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    topic: "",
    xyz: "",
    message: "",
  });
   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

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

  // Slick settings for responsive carousel
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
      {/* Hero section start */}
      <div className=' bg-gradient-to-b from-[#15202433] via-[#152024] to-[#060B0F]'>
        <div className='container mx-auto'>
          <div className='flex flex-col justify-center items-center text-white gap-11 py-12 md:py-24 px-6 '>
            <div>
              <img src={heroSec} alt='img' className='h-64 md:h-80 '/>
            </div>
            <div className='flex flex-col md:flex-row gap-4 md:gap-12 '>
              <div className='flex gap-2'>
                <img src={icon} alt='icon' className='h-5'/>
                <p className='text-md'>BUSINESS TRUSTS</p>
              </div>
              <div className='flex gap-2'>
                <img src={icon} alt='icon' className='h-5'/>
                <p className='text-md'>LEGAL STRATEGIES</p>
              </div>
              <div className='flex gap-2'>
                <img src={icon} alt='icon' className='h-5'/>
                <p className='text-md'>ASSET PROTECTION</p>
              </div>
            </div>
            <div>
              <Button label="Buy Now"/>
            </div>
          </div>
        </div>
      </div>
      {/* Hero section End */}

      {/* The veil start */}
        <div className='container mx-auto bg-white text-black py-10 md:py-20 px-7 md:px-14'>
          <div className='flex flex-col gap-10 lg:flex-row'>
            <div className='w-full lg:w-4/12'>
              <h3 className='text-5xl'>
                Business Trusts,
                Legal Strategies, And Assets protection
              </h3>
              <p className='text-md font-noto mt-6  '>
                This is not a book about secrecy.
                This is the operating manual for legal sovereignty, dynastic endurance,
                and strategic invisibility—engineered for the age of algorithmic exposure.
                Every page is designed to outlast change, defeat litigation, and perpetuate control.
                This book is for founders, family office architects, next-generation heirs, global 
                advisors, and every operator who refuses to be vulnerable.
                You are not simply reading a treatise. You are deploying an operating system.
              </p>
              <h3 className='text-4xl text-primary rotate-[-11.087deg] mt-3'>Maximillion</h3>
              <h3 className='text-2xl mt-8'>Maximillion Smart</h3>
              <p className='text-lg mt-2'>Founder</p>
          </div>
          <div className=' w-full lg:w-4/12'>
            <img src={theVeil} alt='book' className='h-full object-contain'/>
          </div>
          <div className='w-full lg:w-4/12 flex flex-col justify-center  items-center gap-10 md:gap-20  '>
            <div className='flex  items-center gap-4 '>
              <img src={shape1} alt='shape 1' className='h-16'/>
              <p className='text-md font-noto '>This is the operating manual for legal sovereignty, dynastic endurance, 
                and strategic invisibility—engineered for the age of algorithmic exposure.</p>
            </div> 
             <div className='flex items-center ms-9  gap-4 '>
              <img src={shape2} alt='shape 2' className='h-16'/>
              <p className='text-md font-noto max-w-[500px]'>Every page is designed to outlast change, 
                defeat litigation,and perpetuate control.</p>
            </div> 
             <div className='flex items-center gap-5'>
              <img src={shape3} alt='shape 3' className='h-16'/>
              <p className='text-md font-noto max-w-[800px]'>This book is for founders, 
                family office architects, next-generation heirs, global advisors, 
                and every operator who refuses to be vulnerable.</p>
            </div>  
         </div>
         </div>
        </div>
      {/* The veil end */}

      {/* More books Start */}
      <div className='bg-gradient-to-b text-white  from-[#15202433] via-[#152024] to-[#060B0F]'>
        <div className='container mx-auto'>
          <div className='flex justify-center text-center pt-10 md:pt-20'>
            <p className='text-5xl '>More book by Maximillion Smart</p>
          </div>
          <div className='flex flex-col md:flex-row justify-between gap-10 px-20 py-10'>    
              <div className='flex flex-col gap-8 text-center md:p-3'>
                  <img src={veil} alt="book 1" />
                  <p className='text-2xl font-noto'>The Veil</p>
              </div>
              <div className='border border-r-2'>

              </div>
              <div className='flex flex-col gap-8 text-center md:p-3 '>
                <img src={code} alt="book 2" />
                <p className='text-2xl font-noto'>Code And Concrete</p>
              </div>
          </div>
          
          <div className="container mx-auto px-4 py-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {/* Stat 1 */}
              <div className="relative inline-block">
                <h2 className="text-5xl sm:text-6xl md:text-7xl text-primary opacity-30">
                  15K
                </h2>
                <span
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  bg-gray text-xs sm:text-sm md:text-base text-black px-3 sm:px-6
                  tracking-wider uppercase whitespace-nowrap rounded"
                >
                  Transformations
                </span>
              </div>

              {/* Stat 2 */}
              <div className="relative inline-block">
                <h2 className="text-5xl sm:text-6xl md:text-7xl text-primary opacity-30">
                  96%
                </h2>
                <span
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  bg-gray text-xs sm:text-sm md:text-base text-black px-3 sm:px-6
                  tracking-wider uppercase whitespace-nowrap rounded"
                >
                  Progress Tracking
                </span>
              </div>

              {/* Stat 3 */}
              <div className="relative inline-block">
                <h2 className="text-5xl sm:text-6xl md:text-7xl text-primary opacity-30">
                  8M
                </h2>
                <span
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  bg-gray text-xs sm:text-sm md:text-base text-black px-3 sm:px-6
                  tracking-wider uppercase whitespace-nowrap rounded"
                >
                  Workshops
                </span>
              </div>

              {/* Stat 4 */}
              <div className="relative inline-block">
                <h2 className="text-5xl sm:text-6xl md:text-7xl text-primary opacity-30">
                  4.7
                </h2>
                <span
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  bg-gray text-xs sm:text-sm md:text-base text-black px-3 sm:px-6
                  tracking-wider uppercase whitespace-nowrap rounded"
                >
                  Client Reviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* More books end */}

      {/* Contact Now start */}
        <div className='flex flex-col gap-12 justify-center bg-white text-black py-12 md:py-16 px-7 '>
          <div className='flex flex-col text-center '>
            <p className='text-primary opacity-70 text-5xl md:text-7xl'>Contact Now</p>
            <h3 className='text-2xl md:text-3xl font-noto'>Book Your Consultation</h3>
          </div>
          <div className="max-w-8xl sm:mx-12 md:mx-32 ">
            <form onSubmit={handleSubmit} className="space-y-6 text-gray">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border-b border-black p-2 focus:outline-none bg-transparent"
                />
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="border-b border-black p-2 focus:outline-none bg-transparent"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-b border-black p-2 focus:outline-none bg-transparent"
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <select
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  className="border-b  border-black p-2 focus:outline-none bg-transparent"
                >
                  <option value="">Select Type of Topic</option>
                  <option value="Design">Design</option>
                  <option value="Development">Development</option>
                  <option value="Marketing">Marketing</option>
                </select>

                <select
                  name="xyz"
                  value={formData.xyz}
                  onChange={handleChange}
                  className="border-b border-black p-2 focus:outline-none bg-transparent"
                >
                  <option value="">Select XYZ</option>
                  <option value="Option-1">Option 1</option>
                  <option value="Option-2">Option 2</option>
                  <option value="Option-3">Option 3</option>
                </select>
              </div>

              {/* Row 3 */}
              <div>
                <textarea
                  name="message"
                  placeholder="Additional Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full border-b border-black p-2 focus:outline-none bg-transparent resize-none"
                />
              </div>

              {/* Row 4 */}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full py-3 bg-primary font-noto text-black  hover:bg-[#D1B275] transition"
                >
                  Submit Now
                </button>
              </div>
            </form>
          </div>
          </div>
      {/* Contact now end */}

      {/* Reviews Start */}
      <div className="bg-[url('./assets/images/png/MS/bgreview.png')] bg-cover bg-center">

      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-10 relative ">
          <div className="flex flex-col lg:flex-row justify-between text-white gap-6">
            <h3 className="text-3xl md:text-6xl">What They Say</h3>
            <p className="font-noto max-w-[400px] border-t border-[#FFFFFF63] pt-4 md:pt-6 text-sm md:text-base">
              Nulla maximus lobortis sapien quis finibus. In orci elit,
              laoreet eu nunc ac, ultrices tempus sapien.
            </p>
          </div>

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
      </div>
      {/* Reviews End */}

      {/* Blogs Start */}
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
                    <Blogs {...blog} commentIcon={comment} />
                  </div>
                ))}
              </Slider>
            </div>
          
        {/* Blogs End */}
      </div>
      <Footer/> 
    </>
  )
}

export default MaximillionSmart