const FullStar = () => {
  return (
    <svg viewBox="0 0 20 20" className="w-3 h-3 text-yellow-400" fill="currentColor">
      <path d="M10 15l-5.878 3.09 1.123-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.757 4.635 1.123 6.545z"></path>
    </svg>
  )
};

const EmptyStar = () => {
  return (
    <svg viewBox="0 0 20 20" className="w-3 h-3 text-yellow-400" fill="none">
      <path 
        d="M10 15l-5.878 3.09 1.123-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.757 4.635 1.123 6.545z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"  
      ></path>
    </svg>
  )  
}

const HalfStar = () => {
  return (
    <svg viewBox="0 0 20 20" className="w-3 h-3 text-yellow-400" fill="currentColor">
      <defs>
        <linearGradient id="halfGrad">
          <stop offset="50%" stopColor="currentColor"></stop>
          <stop offset="50%" stopColor="transparent"></stop>
        </linearGradient>
      </defs>
      <path 
        d="M10 15l-5.878 3.09 1.123-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.757 4.635 1.123 6.545z"
        fill="url(#halfGrad)"
        stroke="currentColor"
        strokeWidth="1.5"
      ></path>
    </svg>
  )    
}

interface IRatingStarsProps {
  rating: number;
};

export function RatingStars(props: IRatingStarsProps) {
  const rounded = Math.round(props.rating * 2) / 2;
  const full = Math.floor(rounded);
  const half = (rounded != full ? 1 : 0);
  const empty = 5 - full - half;

  return (
    <div className="flex">
      {Array(full).fill(0).map((_, i) => (
        <FullStar key={`full-${i}`}></FullStar>
      ))}
      {half == 1 && <HalfStar/>}
      {Array(empty).fill(0).map((_, i) => (
        <EmptyStar key={`empty-${i}`}></EmptyStar>
      ))}
    </div>
  )
}