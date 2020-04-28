import React from 'react'
import '../styles/carousel1.css';
import dorao15 from '../img/dorao15.jpg';
import dorao499 from '../img/dorao499.jpg';
import dorao502 from '../img/dorao502.jpg';
import dorao504 from '../img/dorao504.jpg';
import dorao500 from '../img/dorao500.jpg';
import dorao52 from '../img/dorao52.jpg';
import dorao7 from '../img/dorao7.jpg';
import dorao19 from '../img/dorao19.jpg';



function Carousel1(){
    return(
        <div className="todo">
            <div class="containerD">
    
                <div className="box">
                  <img src={dorao15}></img>
                  <span>titulo1</span>
                </div>
    
                <div className="box">
                   <img src={dorao499}></img>
                   <span>titulo1</span>
                </div>
    
                 <div className="box">
                    <img src={dorao502}></img>
                    <span>titulo1</span>
                 </div>
    
                 <div className="box">
                     <img src={dorao504}></img>
                     <span>titulo1</span>
                </div>
            </div>
    
            
     
        </div>     
    )
}
export default Carousel1;