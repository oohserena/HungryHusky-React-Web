import React from "react";

const StarRating = ({ rating }) => {
  const fullStars = Math.max(0, Math.floor(rating));
  const halfStar = rating % 1 >= 0.5;
  const totalStars = halfStar ? fullStars + 1 : fullStars;
  const emptyStars = Math.max(0, 5 - totalStars);

  // Add console log here
  console.log(`Rating: ${rating}, Full Stars: ${fullStars}, Half Star: ${halfStar}, Empty Stars: ${emptyStars}`);

  const starElements = [];
  for (let i = 0; i < fullStars; i++) {
    starElements.push(<span key={`full-${i}`}>&#9733;</span>);
  }

  if (halfStar) {
    starElements.push(<span key="half">&#189;</span>);
  }

  for (let i = 0; i < emptyStars; i++) {
    starElements.push(<span key={`empty-${i}`}>&#9734;</span>);
  }

  return <div style={{ color: 'red' }}>{starElements}</div>;
};

export default StarRating;
