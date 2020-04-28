import React from 'react'
import '../styles/main.css';

import video from '../img/dorao5.mp4';





function Main(){
    return(
        
        <section className="contenedor">
                    
                    <div className="sobre-nosotros">
                        
                            <video className="video-about-us"  autoplay  controls loop audio>
                              <source src={video} type="video/mp4"></source>
                            </video>
                    </div>

                        <div className="contenido-textos">
                            <div className="contenido-texto">
                                <h3>Dorao</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis illo blanditiis incidunt mollitia repudiandae recusandae beatae, itaque modi pariatur repellat eos, laborum facilis architecto quo, fugit voluptatum fuga vitae eveniet.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis illo blanditiis incidunt mollitia repudiandae recusandae beatae, itaque modi pariatur repellat eos, laborum facilis architecto quo, fugit voluptatum fuga vitae eveniet.</p>
                            </div>
                        </div>
                </section>
                

        
                  
    )
}
export default Main;





/*












*/
