import React from 'react'

const Extra = () => {
  return (
    <>
        <div className='container mx-auto'>
      {/* Hero Section Start */}
      <div className="mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 py-4 mt-7 ">
              {/* Left Section */}
              <div className="text-center md:text-left">
                <h1 className="text-[250px] leading-none">Calyn</h1>
                <p className="text-xs mt-2 max-w-[250px] mx-auto md:mx-0">
                  Lorem ipsum dolor sit amet consectetur. Lacinia etiam elementum 
                  senectus ac integer. Elit nisi platea aliquet viverra.
                </p>
              </div>

              {/* Image */}
              <img src={banner} alt="Banner" className="h-96 w-auto" />

              {/* Right Section */}
              <h1 className="text-[15.625rem] leading-none">Smart</h1>
      </div>
      {/* Hero Section End */}

      {/* Paragraph */}
      <div className='flex justify-center items-center mt-20 text-center'>
        <p className='text-2xl max-w-6xl  md:mx-0'>
          Lorem ipsum dolor sit amet consectetur. Elit enim eu rhoncus ultricies. 
          Morbi felis magna purus sit nullam eu dictumst convallis nibh.
          In habitant quis auctor in augue nulla sed vestibulum quam. Dolor volutpat ac.
        </p>
      </div>

      {/* Book Cover */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-10  md:px-0">

        {/* Left: Image */}
        <img src={bookCover} alt="bookCover" className="h-[600px] object-contain" />
        {/* Right: Text */}
        <div className="max-w-[500px] flex flex-col md:items-start  md:text-left">
            <h2 className="text-3xl md:text-4xl max-w-[250px]">Book Title Goes Here</h2>
            <p className="mt-3 max-w-[400px] text-sm ">
            Lorem ipsum dolor sit amet consectetur. Lacinia etiam elementum
            senectus ac integer. Elit nisi platea aliquet viverra.
            </p>
            <div className="mt-4">
            <Button />
            </div>
        </div>
      </div>

    {/*More Books  */}
     <div className='flex flex-col justify-center items-center mt-10 text-center'>
      <h2 className='text-4xl'>More Books to Read</h2>
        <p className='mt-3 max-w-[400px]  md:mx-0'>
         Lorem ipsum dolor sit amet consectetur. Lacinia etiam elementum senectus ac integer.
          Elit nisi platea aliquet viverra.
        </p>
     </div>


    {/*  */}
   <div className="container mx-auto overflow-x-auto">
      {/* Horizontal scroll with snap */}
      <div className="flex gap-6 snap-x snap-mandatory overflow-x-scroll scrollbar-hide">
        {books.map((b) => (
          <div
            key={b.id}
            className="
              flex-shrink-0 snap-center flex flex-col justify-center items-center text-center
              min-w-[80%] sm:min-w-[45%] md:min-w-[30%] lg:min-w-[22%]
            "
          >
            <img src={b.image} alt={b.title} className="h-80" />
            <h3 className="text-2xl">{b.title}</h3>
            <p className="text-sm max-w-[300px] mt-2">{b.description}</p>
            <div className="mt-2">
              <Button />
            </div>
          </div>
        ))}
      </div>
    </div>
 
    <div className='flex flex-col justify-center items-center text-center mt-24'>
      <h3 className='text-6xl max-w-[300px]'>Eplore<br/> Calyn Smart</h3>
      <img src={explore} alt="explore" className='h-64 mt-10'/>
    </div>

    <div className='flex flex-col justify-center items-center text-center mt-24'>
      <h3 className='text-4xl max-w-[450px]'>Lorem ipsum dolor sit amet consectetur.</h3>
      <p className='text-sm max-w-[400px] mt-3'>Lorem ipsum dolor sit amet consectetur. Elit enim eu rhoncus ultricies. 
        Morbi felis magna purus sit nullam eu dictumst convallis nibh. 
        </p>
      <div className='mt-3'>
        <Button/>
      </div>
    </div>
    
    {/*  */}
     <div className='flex flex-col justify-center items-center mt-24 text-center'>
        <h2 className='text-7xl'>Want To Get In <br/>Touch?</h2>
      </div>
  
      </div>

<Footer/>

    </>
  )
}

export default Extra