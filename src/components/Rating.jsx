import React, { useState } from 'react';

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (index) => {
    setRating(index + 1); 
  };

  return (
    <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`xl:w-6 xl:h-6 lg:w-5 lg:h-5 rounded-sm px-0.5 flex items-center justify-center cursor-pointer ${
              index < rating ? 'bg-mustard' : 'bg-slate-300'
            }`}
            onClick={() => handleClick(index)}
          >
            <img src="/star.svg" alt={`star-${index}`} className="h-6" />
          </div>
        ))}
      </div>
  );
};

export default Rating;
