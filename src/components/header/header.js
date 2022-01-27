import React from 'react';
import logo from './../../assets/relevel.jpeg'
import './header.css'
import './../Modal/modal'

const header = ({setIsModalOpen,HandleSubmit,value,setValue}) => {
  return <>
    <nav className="navbar navbar-dark bg-dark">
      <div className="title_container">
        <div>
        <img src={logo} alt="" width="70" height="70" className=" mx-3 " />
        </div>
        <div className='header_title px-3'>
          <h3 className='text-primary '>Relevel Trello Clone</h3>
          <p className='text-primary px-5'>By Unacademy</p>
        </div>
      </div>

      <div className='feature_container'>
        <div className='searchbar_container px-5'>
        <form className="d-flex" onSubmit={(e)=>HandleSubmit(e)}>
          <input className="form-control me-2 px-5" type="text" placeholder="Search" aria-label="Search" value={value} onChange={(e)=>setValue(e.target.value)} />
          <button className="btn btn-primary" type="submit">Search</button>
        </form>
        </div>
        <div className='Add_button_container px-5'>
          <button className='btn-primary border rounded py-2' type='button'  onClick={()=>setIsModalOpen(true)}>ADD TICKET</button>
        </div>
      </div>
    </nav>
  </>;
};

export default header;
