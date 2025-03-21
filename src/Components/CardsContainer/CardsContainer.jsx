import React, {useState} from 'react';
import WordCard from '../WordCard';


function CardsContainer({words, deleteWord}) {
  const cardsList = words.map( word => 
    <WordCard 
    front={word.front} 
    back={word.back} 
    key={word.front}
    deleteWord={deleteWord} />
);
  return (
    <section className="cards-container">
      {cardsList}
    </section>
  )
}
export default CardsContainer;