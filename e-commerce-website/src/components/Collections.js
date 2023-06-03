import React from 'react';

const callouts = [
  {
    name: 'Womens Clothing',
    description: 'Timeless Fashion for Women',
    imageSrc: 'https://i.postimg.cc/Jz2tqwMm/Womens-Fashion.jpg',
    href: '#',
  },
  {
    name: 'Mens Clothing',
    description: 'Stylish Apparel for Men',
    imageSrc: 'https://i.postimg.cc/MKzcZb9k/Mens-Fashion.jpg',
    href: '#',
  },
  {
    name: 'Jewellery',
    description: 'Elegant Accessories',
    imageSrc: 'https://i.postimg.cc/Hs3rrcNr/Jewellery.jpg',
    href: '#',
  },
  {
    name: 'Electronics',
    description: 'Cutting-Edge Gadgets',
    imageSrc: 'https://i.postimg.cc/6qfyLy51/Electronics.jpg',
    href: '#',
  },
];

export default function Example() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-5 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div
                  className="relative overflow-hidden rounded-lg bg-white"
                  style={{ height: '400px', width: '100%' }}
                >
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
