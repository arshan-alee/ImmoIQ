import React, { useState } from 'react';

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (index) => {
    setRating(index + 1); 
  };

  return (
    <div className="w-11/12 mx-auto">
        <div className="flex gap-2 mt-6 justify-center">
          <img src="/google.svg" alt="google-icon" className="xl:h-6 lg:h-4" />
          <p className="text-primary font-semibold lg:text-xs xl:text-sm">
            Bewertengen
          </p>
          <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`xl:w-6 xl:h-6 lg:w-5 lg:h-5 rounded-sm px-0.5 flex items-center justify-center cursor-pointer ${
                  index < rating ? "bg-mustard" : "bg-slate-300"
                }`}
                onClick={() => handleClick(index)}
              >
                <img src="/star.svg" alt={`star-${index}`} className="h-6" />
              </div>
            ))}
          </div>
        </div>
        <p className="mt-4 text-center lg:text-xss xl:text-xs text-secondary">
          4,6 VON 5 BASIEREND AUF 245 BEWERTUNGEN
        </p>
      </div>
  );
};

export default Rating;
