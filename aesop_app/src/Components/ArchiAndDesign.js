import React from 'react';
import Bleecker from './images/aesop_essentials/Aesop-Bleecker-Street-Carousel-1-Desktop-2560x1440px.jpg';
import './Styles/ArchiAndDesign.css'


function ArchiAndDesign() {
  return(
      <div className="parent">
          
          <div className="slides"></div>
          <div className="row">
              
              <div className="col-sm-5">
                  <p id="sub-title">Architecture and Design</p>
                  <p>Spaces of distinction</p>
              </div>

              <div className="col-sm-7 find-store">
                  <p id="sub-title" >Aesop stores are informed by the history, fabric and context of their local environments, yet retain an aesthetic consistency.</p>
                  <buton id="find-btn">Find a nearby store &nbsp; &nbsp; &nbsp; &#8594;</buton>
              </div>
          </div>

          <div className="down"></div>

          
              <div>
                  <img id="bleecker" src={Bleecker} alt="Bleecker Street Location"></img>
              </div>
          

          <div>

              <div>
                  <p className="pic-num">1 of 5</p>
              </div>

              <div>
                  <p className="address"><strong>Aesop Bleecker Street </strong><br></br>341 Bleecker St, New York, NY, 10014</p>
                  
              </div>

          </div>

      </div>
  );
}


export default ArchiAndDesign();


















 
// class ArchiAndDesign extends React.Component {
//     render() {
//         return (
//             <div>
//             <Carousel>
//             <Carousel.Item>
//               <img
//                 className="slide1"
//                 src= {Pic1}
//                 alt="First slide"
//               />
//               <Carousel.Caption>
//                 <h3>Bleecker Street Location</h3>
//               </Carousel.Caption>
//             </Carousel.Item>

//             <Carousel.Item>
//               <img
//                 className="slide2"
//                 src= {Pic2}
//                 alt="Second slide"
//               />
          
//               <Carousel.Caption>
//                 <h3> Downtown LA </h3>
//               </Carousel.Caption>
//             </Carousel.Item>

//             <Carousel.Item>
//               <img
//                 className="slide3"
//                 src= {Pic3}
//                 alt="Third slide"
//               />
          
//               <Carousel.Caption>
//                 <h3> Fashion Valley </h3>
//               </Carousel.Caption>
//             </Carousel.Item>

//           </Carousel>
//           </div>
//         );
//     }
// }

    

// export default ArchiAndDesign;
