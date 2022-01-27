import React from 'react';
import './modal.css'

const modal = ({isModalOpen, setIsModalOpen,title,setTitle,description,setDescription,handleAddCard,titleError,descriptionError}) => {
  return <>
     <div className={isModalOpen ? 'modal_container show-modal' : 'modal_container'}>
       <div className='modal-content'>
        <form onSubmit={(e)=>handleAddCard(e)}>
            <div className="form-group">
              <label htmlfor="Titletext">Ticket Title</label>
              <input type="text" className="form-control" id="Titletext"  placeholder="Enter title" value={title} onChange={(e)=>setTitle(e.target.value)} />
              <small id="error" class="form-text text-danger">{titleError}</small>
            </div>
            <div class="form-group">
              <label htmlfor="description">Description</label>
              <input type="text" className="form-control" id="description" placeholder=" Enter Description" value={description} onChange={(e)=>setDescription(e.target.value)} />
              <small id="error" class="form-text text-danger">{descriptionError}</small>
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
            <button type="button" className="btn btn-danger mx-2" onClick={()=> setIsModalOpen(!isModalOpen)}>Close</button>
          </form>
       </div>
     </div>
  </>;
};

export default modal;
