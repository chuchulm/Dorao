import React from 'react'
import '../styles/portafolio.css';
import logo from '../img/logo.png';
import dorao1 from '../img/dorao1.jpg';
import dorao2 from '../img/dorao2.jpg';
import dorao20 from '../img/dorao20.jpg';
import dorao19 from '../img/dorao19.jpg';
import dorao10 from '../img/dorao10.jpg';
import dorao47 from '../img/dorao47.jpg';
import dorao46 from '../img/dorao46.jpg';
import dorao8 from '../img/dorao8.jpg';
import dorao18 from '../img/dorao18.jpg';



function Portafolio(){
   return(
      <section className="portafolio">
        <div className="contenedor1">
          <img src={logo} alt="" className="logo2"></img>
            
               <div class="galeria-port">
               <div className="imagen-port">
                     <img src={dorao1} alt=""></img>
                      <div className="hover-galeria">
                         <img src={""} alt=""></img>
                         <p></p>
                      </div>
                  </div>

                  <div className="imagen-port">
                     <img src={dorao2} alt=""></img>
                        <div className="hover-galeria">
                           <img src="img/iconmonstr-marketing-4-64.png" alt=""></img>
                           <p></p>
                     </div>
                  </div>

                   

                   <div className="imagen-port">
                     <img src={dorao20} alt=""></img>
                       <div className="hover-galeria">
                          <img src="img/iconmonstr-marketing-4-64.png" alt=""></img>
                            <p></p>
                       </div>
                   </div>

                  <div className="imagen-port">
                    <img src={dorao19} alt=""></img>
                      <div className="hover-galeria">
                        <img src="img/iconmonstr-marketing-4-64.png" alt=""></img>
                          <p></p>
                     </div>
                  </div>

                  <div className="imagen-port">
                     <img src={dorao10} alt=""></img>
                      <div className="hover-galeria">
                         <img src="img/iconmonstr-marketing-4-64.png" alt=""></img>
                         <p></p>
                      </div>
                  </div>

                  <div className="imagen-port">
                     <img src={dorao47} alt=""></img>
                        <div className="hover-galeria">
                           <img src="img/iconmonstr-marketing-4-64.png" alt=""></img>
                           <p></p>
                     </div>
                  </div>

                  <div className="imagen-port">
                      <img src={dorao46} alt=""></img>
                         <div className="hover-galeria">
                            <img src="img/iconmonstr-marketing-4-64.png" alt=""></img>
                           <p></p>
                         </div>
                  </div>

                  <div className="imagen-port">
                     <img src={dorao8} alt=""></img>
                        <div className="hover-galeria">
                           <img src="img/iconmonstr-marketing-4-64.png" alt=""></img>
                           <p></p>
                       </div>
                  </div>

     
           </div>
      </div>




      
        
</section>




      

      
       
    )
}
export default Portafolio;





/*

<Card
hoverable
style={{ width: 600 }}
cover={<img alt="example" src={Bandana1} alt="logo" />}>
<Meta title="LEMOM.ACCESORIOS" description="www.instagram.com" />
</Card>




</section>


       <section class="about-services">
           <div class="contenedor">
             <h2 class="Nuestros servicios"></h2>
             <div class="servicio-cont">

               <div class="servicio-ind">
                 <img src="img/ilustracion1.png" alt="">
                 <h3>Name</h3>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, dolore?</p>

               </div>
               <div class="servicio-ind">
                <img src="img/ilustracion2.png" alt="">
                <h3>Name</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, dolore?</p>
                
              </div>
              <div class="servicio-ind">
                <img src="img/ilustracion3.png" alt="">
                <h3>Name</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, dolore?</p>
                
              </div>
             </div>
           </div>
       </section>

       */