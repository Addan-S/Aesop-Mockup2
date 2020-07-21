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
<div>
    <h5>Nurturing formulations</h5>
    <h2>For all ages, genders and skin types</h2>
    <p>Healthy skin is the roduct of careful cleansing, 
        nourishing hydration and protection against environmental factors</p>
  </div>
  <div>
    <img src="" alt="Parsley Seed Anti-Oxidant Serum" />
    <h2>Parsley Seed Anti-Oxidant Serum</h2>
    <p>Concentrated serum in an Aloe Vera base</p>
  </div>

  <div>
    <img src="" alt="Mandarin Facial Hydrating Cream" />
    <h2>Mandarin Facial Hydrating Cream</h2>
    <p>Rapidly absorbed, lightly hydrating</p>
  </div>

  <div>
    <img src="" alt="Fabulous Face Oil" />
    <h2>Fabulous Face Oil</h2>
    <p>Botanically based hydration boost</p>
  </div>

  <div>
    <img src="" alt="Parsely Seed Facial Cleanser" />
    <h2>Parsely Seed Facial Cleanser</h2>
    <p>For those in polluted urban environments</p>
  </div>

  <div>
    <img src="" alt="BandTea Balancing Toner" />
    <h2>B and Tea Balancing Toner</h2>
    <p>Particularly suited to sensitive skin</p>
  </div>

  <div>
    <img src="" alt="Fabulous Face Cleanser" />
    <h2>Fabulous Face Cleanser</h2>
    <p>Mild Olive-derived cleansing gel</p>
  </div>

  <div>
    <img src="" alt="Bitter Orange Astringent Toner" />
    <h2>Bitter Orange Astringent Toner</h2>
    <p>Removes excess sebum from the skin</p>
  </div>
</Carousel>;

export default NurturingFormulations;