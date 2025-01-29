import React from 'react';
import Card from '../Card';

const hotels = [
  {
    title: 'Course 1',
    description: 'Description for Course 1',
    image: 'path/to/image1.jpg',
  },
  {
    title: 'Course 2',
    description: 'Description for Course 2',
    image: 'path/to/image2.jpg',
  },
];

const Hotels: React.FC = () => {
  return (
    <div className="font-serif grid grid-cols-3 gap-3">
      {hotels.map((course, index) => (
        <Card
          key={index}
          title={course.title}
          description={course.description}
          image={course.image}
        />
      ))}
    </div>
  );
};

export default Hotels;