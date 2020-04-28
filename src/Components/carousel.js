import React from 'react'
import '../styles/carousel.css';
import dorao499 from '../img/dorao499.jpg';
import dorao500 from '../img/dorao500.jpg';
import dorao502 from '../img/dorao502.jpg';
import dorao42 from '../img/dorao42.jpg';
import dorao501 from '../img/dorao501.jpg';
import dorao52 from '../img/dorao52.jpg';



function Carousel(){
    return(
        <section className="doraoparty" >
            <div className="container">
                <div className="row">
                    <div className="col-sm-lg">
                        <div id="demo" className="carousel slide"  data-ride="carousel"  >
                            <div className="carousel-inner" >
                               
                                <div className="carousel-item active ">
                                    <img src={dorao499} className="dorao"></img>
                                        <div className="carousel-caption">
                                            <h3></h3>
                                            <p></p>
                                       </div>
                                </div>
                               
                                <div className="carousel-item" > 
                                    <img src={dorao502} className="dorao"></img>
                                    <div className="carousel-caption">
                                        <h3></h3>
                                        <p></p>
                                    </div>
                                </div>
              
                                <div className="carousel-item" > 
                                    <img src={dorao500} className="dorao"></img>
                                        <div className="carousel-caption">
                                            <h3></h3>
                                            <p></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row" >
                    <div className="col ">
                        <div id="demo" className="carousel slide"  data-ride="carousel"  >
                            <div className="carousel-inner" >
                               
                                    <div className="carousel-item active">
                                        <img src={dorao42} className="dorao"></img>
                                            <div className="carousel-caption">
                                                 <h3></h3>
                                                 <p></p>
                                            </div>
                                    </div>
                               
                                    <div className="carousel-item" > 
                                        <img src={dorao501} className="dorao"></img>
                                            <div class="carousel-caption">
                                                 <h3></h3>
                                                 <p></p>
                                            </div>
                                    </div>
              
                                    <div className="carousel-item" > 
                                         <img src={dorao52} className="dorao"></img>
                                            <div className="carousel-caption">
                                                 <h3></h3>
                                                 <p></p>
                                            </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Carousel;