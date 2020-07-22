import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import jquery from "jquery";
import "popper.js";
import Carousel from "react-bootstrap/Carousel";

import Parsely from "./assets/nurturing_formulations/Parsley-Seed-Facial-Cleanser.png";
import Mandarin from "./assets/nurturing_formulations/Mandarin-Facial-Hydrating-Cream.png";
import Fabulous from "./assets/nurturing_formulations/Fabulous-Face-Oil.png";
import BnT from "./assets/nurturing_formulations/B-Tea-Balancing-Toner.png";
import Intwo from "./assets/nurturing_formulations/In-Two-Minds-Facial-Cleanser.png";

export default class NurturingFormulations extends Component {
  render() {
    return (
      <div class="container-sm">
        <div className="NFHeading">
          <h5>Nurturing formulations</h5>
          <h2>For all ages, genders and skin types</h2>
          <p>
            Healthy skin is the product of careful cleansing, nourishing
            hydration and protection against environmental factors
          </p>
        </div>

        <div id="NFCarousel" className="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#NFCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#NFCarousel" data-slide-to="1"></li>
            <li data-target="#NFCarousel" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={Parsely}
                class="d-block w-100"
                alt="Parsley Seed Anti-Oxidant Serum"
              />
              <br />
              <div class="carousel-caption d-none d-md-block">
                <h2>Parsley Seed Anti-Oxidant Serum</h2>
                <p>Concentrated serum in an Aloe Vera base</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={Mandarin}
                class="d-block w-100"
                alt="Mandarin Facial Hydrating Cream"
              />
              <br />
              <div class="carousel-caption d-none d-md-block">
                <h2>Mandarin Facial Hydrating Cream</h2>
                <p>Rapidly absorbed, lightly hydrating</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={Fabulous}
                class="d-block w-100"
                alt="Fabulous Face Oil"
              />
              <br />
              <div class="carousel-caption d-none d-md-block">
                <h2>Fabulous Face Oil</h2>
                <p>Botanically based hydration boost</p>>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={BnT}
                class="d-block w-100"
                alt="B and Tea Balancing Toner"
              />
              <br />
              <div class="carousel-caption d-none d-md-block">
                <h2>B and Tea Balancing Toner</h2>
                <p>Particularly suited to sensitive skin</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={Intwo} class="d-block w-100" alt="In Two Minds" />
              <br />
              <div class="carousel-caption d-none d-md-block">
                <h5>Geranium Leaf Body Scrub</h5>
                <p>Purifying oils cleanse and smooth skin</p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#NFCarousel"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#NFCarousel"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

{
  /*const responsive = {
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
class NurturingFormulations extends Component {
  _isMounted = false;
  }

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
  <div>
    <h5>Nurturing formulations</h5>
    <h2>For all ages, genders and skin types</h2>
    <p>
      Healthy skin is the roduct of careful cleansing, nourishing hydration and
      protection against environmental factors
    </p>
  </div>
  <div>
    <img className="" src={Logo} alt="Parsley Seed Anti-Oxidant Serum" />
    <h2>Parsley Seed Anti-Oxidant Serum</h2>
    <p>Concentrated serum in an Aloe Vera base</p>
  </div>

  <div>
    <img className="" src={Logo1} alt="Mandarin Facial Hydrating Cream" />
    <h2>Mandarin Facial Hydrating Cream</h2>
    <p>Rapidly absorbed, lightly hydrating</p>
  </div>

  <div>
    <img className="" src={Logo2} alt="Fabulous Face Oil" />
    <h2>Fabulous Face Oil</h2>
    <p>Botanically based hydration boost</p>
  </div>

  <div>
    <img className="" src={Logo3} alt="Parsely Seed Facial Cleanser" />
    <h2>Parsely Seed Facial Cleanser</h2>
    <p>For those in polluted urban environments</p>
  </div>

  <div>
    <img className="" src={Logo4} alt="BandTea Balancing Toner" />
    <h2>B and Tea Balancing Toner</h2>
    <p>Particularly suited to sensitive skin</p>
  </div>

  <div>
  <img className=""
      src={Logo5} alt="Fabulous Face Cleanser" />
    <h2>Fabulous Face Cleanser</h2>
    <p>Mild Olive-derived cleansing gel</p>
  </div>

  <div>
    <img src="" alt="Bitter Orange Astringent Toner" />
    <h2>Bitter Orange Astringent Toner</h2>
    <p>Removes excess sebum from the skin</p>
  </div> 
</Carousel>;

export default NurturingFormulations;*/
}
