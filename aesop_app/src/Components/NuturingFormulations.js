import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Styles/NurturingFormulations.css'
import jquery from "jquery";
import { createPopper } from '@popperjs/core';
// import Carousel from "react-bootstrap/Carousel";
import Carousel from 'react-bootstrap/Carousel'
import Parsely from "./images/nurturing_formulations/Parsley-Seed-Facial-Cleanser.png";
import Mandarin from "./images/nurturing_formulations/Mandarin-Facial-Hydrating-Cream.png";
import Fabulous from "./images/nurturing_formulations/Fabulous-Face-Oil.png";
import BnT from "./images/nurturing_formulations/B-Tea-Balancing-Toner.png";
import Intwo from "./images/nurturing_formulations/In-Two-Minds-Facial-Cleanser.png";


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