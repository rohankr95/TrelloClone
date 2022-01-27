import React, { useState } from 'react';
import Header from './components/header/header'
import Card from './components/Card/card'
import Modal from './components/Modal/modal'
import cardData from './cardData'
import './index.css'
import { v4 as uuidv4 } from 'uuid';


const TrelloBoard = () => {
  const [isModalOpen,setIsModalOpen] = useState(false);
  const [cards,setCards] = useState(cardData);
  const [value, setValue] = useState('')
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [titleError,setTitleError] = useState('')
  const [descriptionError,setDescriptionError] = useState('')


  const HandleDelete =(cardId)=> {
    let newCards = cards.filter((card)=>{
      return card.cardId !== cardId;
    })
    setCards(newCards)
  }

  const HandleSubmit = (e) => {
    e.preventDefault();
    // let query = e.target.value;
    console.log(value);
    let newCards = cards.filter((card)=>{
      return card.title.includes(value);
    })
    setCards(newCards);
    setValue('')

  }

  const handleAddCard =(e) =>{
    e.preventDefault();
    console.log(title,description)
    if(title.length===0 || title.length>30){
      setTitleError('title length should not exceed 30 and should not be empty');
      return
    }
    if(description.length===0 || description.length>150){
      setDescriptionError('description length should not exceed 150 and should not be empty');
      return
    }
    setCards([...cards,
      {
        title:title,
        description:description,
        cardId:uuidv4()
      }]);
    setTitle('')
    setDescription('')
    setIsModalOpen(!isModalOpen)
    setTitleError('')
    setDescriptionError('')
    
  }
  return <div>
    <Header setIsModalOpen={setIsModalOpen} HandleSubmit={HandleSubmit} value={value} setValue={setValue}/>
    {isModalOpen && 
    <Modal 
    isModalOpen={isModalOpen}
     setIsModalOpen={setIsModalOpen} 
     title={title} setTitle={setTitle} 
     description={description} 
     setDescription={setDescription} 
     handleAddCard={handleAddCard}
     titleError={titleError} 
     descriptionError={descriptionError}/>}
    <div className='main-container'>
      {cards.map((card)=>{
        return <Card  key ={card.cardId} card={card}  HandleDelete={HandleDelete}/>
      })}
    </div>
    
  </div>;
};

export default TrelloBoard;
