import React from 'react'
import book from '../assets/images/png/cover-1.png'
import Button from './Button';

const Carousel = () => {
    const books = [
          {
            id: 1,
            title: "Title 1",
            description: "Lorem ipsum dolor sit amet consectetur...",
            image: book
          },
          {
            id: 2,
            title: "Title 2",
            description: "Lorem ipsum dolor sit amet consectetur...",
            image: book
          },
          {
            id: 3,
            title: "Title 3",
            description: "Lorem ipsum dolor sit amet consectetur...",
            image: book
          },
          {
            id: 4,
            title: "Title 4",
            description: "Lorem ipsum dolor sit amet consectetur...",
            image: book
          },
        ];
  return (
    <>
        {/*Books carousel  */}
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
                    <h3 className="text-4xl">{b.title}</h3>
                    <p className="text-md  mt-7 font-noto">{b.description}</p>
                    <div className="mt-7">
                        <Button label="Purchase Now" />
                    </div>
                </div>
                ))}
            </div>
            </div> 
    </>
  )
}

export default Carousel