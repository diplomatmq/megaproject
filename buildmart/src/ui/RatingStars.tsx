/*
  DAY 2 - MORNING (09:00-12:00)
  PHASE 4: UI components - Rating stars display
  Developer 1 uploads this file
  Star rating component with 5-star display and half-star support
*/
import { Star, StarHalf } from 'lucide-react';

type RatingStarsProps = {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
};

const sizeMap = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
} as const;

export function RatingStars({ rating, size = 'md' }: RatingStarsProps) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
  const sizeClass = sizeMap[size];

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: fullStars }).map((_, idx) => (
        <Star
          key={`filled-${idx}`}
          className={`${sizeClass} fill-yellow-400 text-yellow-400`}
        />
      ))}

      {hasHalf && (
        <StarHalf className={`${sizeClass} fill-yellow-400 text-yellow-400`} />
      )}

      {Array.from({ length: emptyStars }).map((_, idx) => (
        <Star key={`empty-${idx}`} className={`${sizeClass} text-gray-300`} />
      ))}

      <span className="ml-2 text-sm text-gray-600">({rating.toFixed(1)})</span>
    </div>
  );
}
