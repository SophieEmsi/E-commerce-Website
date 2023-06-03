import React from 'react';
import ShippingIcon from '@mui/icons-material/LocalShippingRounded';
import RecyclingIcon from '@mui/icons-material/RecyclingRounded';
import ReviewsIcon from '@mui/icons-material/ReviewsRounded';

const stats = [
  {
    id: 1,
    name: 'Customer satisfaction rate of 95% based on feedback and reviews',
    value: 'Satisfied Customers',
    icon: <ReviewsIcon fontSize="large" />,
  },
  {
    id: 2,
    name: 'Offsetting carbon emissions through carbon-neutral packaging for a sustainable future',
    value: 'Commitment to Sustainability',
    icon: <RecyclingIcon fontSize="large" />,
  },
  {
    id: 3,
    name: 'Enjoy the convenience of free returns on all purchases',
    value: 'Hassle-Free Returns',
    icon: <ShippingIcon fontSize="large" />,
  },
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex flex-col items-center">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
              <div className="mt-4">{stat.icon}</div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
