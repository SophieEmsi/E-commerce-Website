import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const callouts = [
  {
    name: 'Womens Clothing',
    description: 'Timeless Fashion for Women',
    imageSrc: 'https://i.postimg.cc/Jz2tqwMm/Womens-Fashion.jpg',
    category: "women's clothing",
  },
  {
    name: 'Mens Clothing',
    description: 'Stylish Apparel for Men',
    imageSrc: 'https://i.postimg.cc/MKzcZb9k/Mens-Fashion.jpg',
    category: "men's clothing",
  },
  {
    name: 'Jewellery',
    description: 'Elegant Accessories',
    imageSrc: 'https://i.postimg.cc/Hs3rrcNr/Jewellery.jpg',
    category: 'jewelery',
  },
  {
    name: 'Electronics',
    description: 'Cutting-Edge Gadgets',
    imageSrc: 'https://i.postimg.cc/6qfyLy51/Electronics.jpg',
    category: 'electronics',
  },
];

  
  export default function Collections() {
    const [data, setData] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    const handleCategoryClick = (category) => {
      navigate(`/results/${category}`);
    };
  
    const handleMouseEnter = (index) => {
      setHoveredIndex(index);
    };
  
    const handleMouseLeave = () => {
      setHoveredIndex(null);
    };
  
    return (
    <div className="bg-white mb-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-5 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Collections</h2>

          <div className="space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
            {data &&
              callouts.map((callout, index) => (
                <div
                  key={index}
                  className="drop-shadow-2xl group relative"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={`/results/${callout.category}`}
                    onClick={() => handleCategoryClick(callout.category)}
                  >
                    <div
                      className="relative overflow-hidden rounded-lg bg-white"
                      style={{ height: '400px', width: '100%' }}
                    >
                      <img
                        src={callout.imageSrc}
                        alt={callout.name}
                        className="h-full w-full object-cover object-center"
                      />
                      {hoveredIndex === index && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <h3 className="text-center text-lg text-black bg-white p-2 font-medium">
                            {callout.name}
                          </h3>
                          <p className="text-lg text-black bg-white p-2 mt-2 font-medium">
                            {callout.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}