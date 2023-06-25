import React from 'react'
import web from '../src/images/pic3.png';
import Sdata from './Sdata';

function Cards(props) {
  return (
    <div className="col-md-4 col-10 mx-auto">

    <div className="card" >
      <img src={props.imgsrc} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    </div>
    
  )
}

export default Cards