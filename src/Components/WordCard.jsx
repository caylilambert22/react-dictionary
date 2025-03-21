import './WordCard.css';
import React, { useState, useEffect } from 'react';

function WordCard({front, back, deleteWord}) { 
  const [isFront, setFront] = React.useState(true);
  useEffect(() =>
  {
    console.log('MOUNT', front);
    return () => {
      console.log('UNMOUNT', front);
    };

  }, []);


  useEffect(() =>
  {
    console.log('UPDATE', front);
  },[front]);

  const cardContent = 
  isFront ?
  <div className='english-card'>English: {front}</div> :
  <div className='german-card'>German: {back}</div>;
  
  const handleClick = () => {
    setFront(!isFront);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation(); 
    deleteWord(front);
  }


  return (
    <div className='word-card' onClick={handleClick}>
      <span className="delete-card" onClick={handleDelete}>X</span>
      {cardContent}
    </div>
  );
}

export default WordCard;