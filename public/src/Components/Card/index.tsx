import React from 'react';

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="font-serif">
      <img src={image} alt={title} className="" />
      <div className="">
        <h2 className="">{title}</h2>
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default Card;