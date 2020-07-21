import React from "react";
import "./styles/AesopEssentials";
import Aesop1 from "../assets/images/staple_products/Aesop-Hand-Resurrection-Aromatique-Hand-Wash-500mL-large.png";
import Aesop2 from "../assets/images/staple_products/Aesop-Body-Resurrection-Aromatique-Hand-Balm-75mL-large.png";
import Aesop3 from "../assets/images/staple_products/Large-PNG-Aesop-Personal-Deodorant-50mL-large.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
<Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div className="wrapper1">
    <div className="wrapper1-child">
      <p>Aesop essentials</p>
      <h2>A selection of staples</h2>
      <p>
        From beloved formulations first created decades ago to personal care
        necessities.
      </p>
    </div>

    <img
      className=""
      src={Aesop1}
      alt="Aesop-Hand-Resurrection-Aromatique-Hand-Wash-500mL-large"
    />
    <img
      className=""
      src={Aesop2}
      alt="Aesop-Body-Resurrection-Aromatique-Hand-Balm-75mL-large"
    />
    <img
      className=""
      src={Aesop3}
      alt="Large-PNG-Aesop-Personal-Deodorant-50mL-large"
    />
  </div>

  <div className="wrapper2">
    <div className="wrapper2-child"></div>
    <div className="wrapper2-child">
      <h5>Resurrection Aromatique Hand Wash</h5>
      <p>Gentle cleansing for hard-working hands</p>
    </div>

    <div className="wrapper2-child">
      <h5>Resurrection Aromatique Hand Balm</h5>
      <p>Richly hydrating, greaseless finish</p>
    </div>

    <div className="wrapper2-child">
      <h5>Deodorant</h5>
      <p>Woody, herbaceous, earthy aromatique</p>
    </div>
  </div>
</Carousel>;

export default AesopEssentials;

{
  /*TO DO
1. Input text for all items
2. Get images for all items
-make photo asset folder
3. Rename carousel if possible
4. Link this aesopEssentials.js with the rest of the group project
-Carousel:https://www.npmjs.com/package/react-multi-carousel
*/
}

{
  /*TO DO
1. Input text for all items
2. Get images for all items
-make photo asset folder
3. Rename carousel if possible
4. Link this aesopEssentials.js with the rest of the group project
-Carousel:https://www.npmjs.com/package/react-multi-carousel

*/
}
