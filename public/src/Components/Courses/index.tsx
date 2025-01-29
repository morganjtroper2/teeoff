import React from 'react';
import Card from '../Card';

const courses = [
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

const Courses: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {courses.map((course, index) => (
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

export default Courses;