interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const BlogCard = ({ title, description, image, link }: BlogCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href={link}
          className="text-primary hover:text-primary/80 font-medium"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};