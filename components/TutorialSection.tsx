import TutorialCard from './TutorialCard';

const tutorials = [
  {
    title: 'Top DIY Storage Ideas',
    category: 'Organization',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'bg-yellow-600',
    size: 'large' as const
  },
  {
    title: '21 Organize Ideas for Rooms',
    category: 'Home Improvement',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'bg-red-600',
    size: 'medium' as const
  },
  {
    title: 'DIY Furniture Renovation',
    category: 'Woodworking',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'bg-green-600',
    size: 'medium' as const
  },
  {
    title: 'Make Your Own DIY Lamp',
    category: 'Electrical',
    image: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'bg-purple-600',
    size: 'small' as const
  },
  {
    title: 'Gardening tips & tricks',
    category: 'Gardening',
    image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'bg-green-500',
    size: 'large' as const
  },
  {
    title: 'Picking perfect paint colors',
    category: 'Painting',
    image: 'https://images.pexels.com/photos/1887946/pexels-photo-1887946.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'bg-blue-500',
    size: 'medium' as const
  },
  {
    title: 'Painting 101 - Getting Started',
    category: 'Painting',
    image: 'https://images.pexels.com/photos/1153895/pexels-photo-1153895.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'bg-pink-500',
    size: 'medium' as const
  }
];

const TutorialSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Inspire Yourself with Tutorials
        </h2>
        
        {/* Desktop Masonry Layout */}
        <div className="hidden lg:grid grid-cols-4 gap-6 h-[800px]">
          <div className="space-y-6">
            <TutorialCard {...tutorials[0]} />
          </div>
          <div className="space-y-6">
            <TutorialCard {...tutorials[1]} />
            <TutorialCard {...tutorials[3]} />
          </div>
          <div className="space-y-6">
            <TutorialCard {...tutorials[2]} />
            <TutorialCard {...tutorials[5]} />
          </div>
          <div className="space-y-6">
            <TutorialCard {...tutorials[4]} />
            <TutorialCard {...tutorials[6]} />
          </div>
        </div>
        
        {/* Mobile/Tablet Grid */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
          {tutorials.map((tutorial, index) => (
            <TutorialCard key={index} {...tutorial} size="medium" />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            View All Ideas
          </button>
        </div>
      </div>
    </section>
  );
};

export default TutorialSection;