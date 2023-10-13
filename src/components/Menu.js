import React from'react';

import offer from './offer.jpg';
import mobile from './mobile.jpg';

import appliances from './appliance.jpg';
import fashion from './fashion.jpg';
import beauty from './beauty.jpg';
import home from './decor.jpg';
import furniture from './furniture.jpg';
import flights from './flights.jpg';
import grocery from './grocery.jpg';
function Menu(){
    return(
        <>
        <div className='row mt-2 com'>
        <div className='col-md-1 '>
              <br></br>
        </div>
        <div className='col-md-1 '>
            <img src={offer}/>  
            <p>Top Offers</p>
        </div>
        <div className='col-md-1 '>
            <img src={mobile}/>  
            <p>Mobile </p>
        </div>
        <div className='col-md-1'>
            <img src={appliances}/>  
            <p>TVs App</p> 
        </div>
        <div className='col-md-1 '>
        <img src={fashion}/>  
            <p>Fashion</p> 
        </div>
        <div className='col-md-1 '>
        <img src={beauty}/>  
            <p>Beauty</p> 
        </div>
        <div className='col-md-1'>
        <img src={home}/>  
            <p>Kitchen</p> 
        </div>
        <div className='col-md-1 '>
        <img src={furniture}/>  
            <p>Furniture</p> 
        </div>
        <div className='col-md-1'>
        <img src={flights}/>  
            <p>Flights</p> 
        </div>
        <div className='col-md-1 '>
        <img src={grocery}/>  
            <p>Grocery</p> 
        </div>
        <div className='col-md-1 '>
              <br></br>
        </div>
    </div>
    </>
        );
    }
    
    
    export default Menu;