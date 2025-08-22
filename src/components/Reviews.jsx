import star from '../assets/images/png/MS/star.png';


const Reviews = ({ src, name, designation, subject, content, rating = 5 }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img key={i} src={star} alt="full star" className="w-4 h-4 sm:w-5 sm:h-5" />);
      } else if (i - 0.5 === rating) {
        stars.push(<img key={i} src={star} alt="half star" className="w-4 h-4 sm:w-5 sm:h-5 opacity-70" />);
      } else {
        stars.push(<img key={i} src={star} alt="empty star" className="w-4 h-4 sm:w-5 sm:h-5 opacity-30" />);
      }
    }
    return stars;
  };

  return (
    <div className="flex flex-col border border-black bg-white text-black px-4 py-4 
                    w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] 
                    h-auto min-h-[280px] rounded-lg shadow-md mx-auto">
      <div className="flex items-center py-3 gap-3 border-b border-black">
        <img src={src} alt="profile img" className="w-10 h-10 rounded-full object-cover" />
        <div className="flex flex-col gap-1 font-noto">
          <h3 className="text-base sm:text-lg font-semibold">{name}</h3>
          <p className="text-xs sm:text-sm text-gray-600">{designation}</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-4 flex-1">
        <div className="flex gap-1" aria-label={`Rating ${rating} out of 5`}>{renderStars()}</div>
        <h3 className="text-base sm:text-lg font-bold">{subject}</h3>
        <p className="text-sm sm:text-md line-clamp-3">{content}</p>
      </div>
    </div>
  );
};

export default Reviews;