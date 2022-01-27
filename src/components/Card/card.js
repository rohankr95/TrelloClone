import React from 'react';
import './card.css'

const card = ({HandleDelete,card}) => {
  
  return <>
      <div className='card'>
        <h4 className='card_title px-3 py-3 '>{card.title} </h4>
        <p className='card_description  px-3'>{card.description}</p>
        <div className='button_container'>
          <button type='button' className='btn btn-danger mx-3' onClick={()=> HandleDelete(card.cardId)}>Delete</button>
        </div>
      </div>
  </>;
};

export default card;
