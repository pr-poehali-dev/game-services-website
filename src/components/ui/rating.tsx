import Icon from './icon';

interface RatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
  showValue?: boolean;
  className?: string;
}

export function Rating({ 
  rating, 
  maxRating = 5, 
  size = 16, 
  showValue = false,
  className = "" 
}: RatingProps) {
  const stars = [];
  
  for (let i = 1; i <= maxRating; i++) {
    const isFilled = i <= rating;
    const isHalfFilled = i - 0.5 === rating;
    
    stars.push(
      <div key={i} className="relative">
        <Icon
          name="Star"
          size={size}
          className={`${isFilled ? 'text-primary fill-primary' : isHalfFilled ? 'text-primary fill-primary/50' : 'text-muted stroke-muted-foreground'} transition-colors`}
        />
      </div>
    );
  }
  
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="flex items-center gap-0.5">
        {stars}
      </div>
      {showValue && (
        <span className="text-sm font-medium text-foreground ml-2">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}