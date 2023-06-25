import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/pic2.png'

function Common(props) {
  return (
    <section id="header" className='d-flex align-items-center'>
    <div className="container_fluid nav_bg">
        <div className="row">
            <div className="col-10 mx-auto">
                < div className="row">
                    <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1>{props.name} <strong className='brand-name'> Asian </strong></h1>
                        <h2 className='my-3'>We are talented developer making websites</h2>
                        <div className="mt-3">
                            
                                <NavLink className="btn-get-started" to={props.visit}> {props.btname}</NavLink>
                           
                        </div>

                    </div>
            
                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                    <img src={props.imgsrc} className="img-fluid animated " style={{'margin':'4rem'}} alt="home img" />

                </div>
            </div>
        </div>
        </div>
    </div>
</section>
  )
}

export default Common