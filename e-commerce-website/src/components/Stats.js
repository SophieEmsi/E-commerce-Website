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
    value: 'Sustainability Commitment',
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
    <div className="bg-gradient-to-r from-teal-200 to-lime-200 py-3 sm:py-1">
      <div className="mt-3 mb-3 mx-auto max-w-7xl">
        <dl className="grid grid-cols-1 gap-x-14 gap-y-4 sm:gap-y-6 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex flex-col items-center">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="mb-3 order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                {stat.value}
              </dd>
              <div className="mt-1">{stat.icon}</div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

