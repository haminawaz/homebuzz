import { ArrowRight } from 'lucide-react';

interface TutorialCardProps {
  title: string;
  image: string;
  category: string;
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

const TutorialCard = ({ title, image, category, size = 'medium', color = 'bg-blue-600' }: TutorialCardProps) => {
  const sizeClasses = {
    small: 'h-48',
    medium: 'h-64',
    large: 'h-80'
  };

  return (
    <div className={`group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${sizeClasses[size]}`}>
      <div className="relative h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className={`absolute inset-0 ${color} bg-opacity-80 flex flex-col justify-end p-6 text-white`}>
          <span className="text-sm font-medium mb-2 opacity-90">{category}</span>
          <h3 className="text-lg font-bold mb-3 line-clamp-2">{title}</h3>
          <div className="flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialCard;