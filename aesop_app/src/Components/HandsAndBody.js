import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import { createPopper } from '@popperjs/core';
import rosebody from './images/rosebody.png';
import redemption from './images/redemption.png';
import geraniumbody from './images/geraniumbody.png';
import bodyslab from './images/bodyslab.png';
import geraniumscrub from './images/geraniumscrub.png';
export default class HandsAndBody extends Component {
    render() {
        return (
            <div class = "container">
                 <div class="row">
                <div class="col-sm">
                <div className="HandsAndBodyHeading">
                    <p>For hands and body</p>
                    <h2>Daily cleansing</h2>
                    <p>Ensure impeccable hygiene with out range of mild yet efficacious formulations.</p>
                </div>
            </div>
            <div class="col-sm">
                <div id="handBodyCarousel" className="carousel slide" data-ride="carousel"
                class='col-sm'>
                <ol class="carousel-indicators">
                    <li data-target="#handBodyCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#handBodyCarousel" data-slide-to="1"></li>
                    <li data-target="#handBodyCarousel" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={rosebody} class="d-block w-100" alt="A Rose By Any Other Name Body Cleanser"/>
                    <br/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>A Rose By Any Other Name Body Cleanser</h5>
                        <p>Gentle yet thorough cleansing with botanical extracts</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={redemption} class="d-block w-100" alt="Redemption Body Scrub"/>
                    <br/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Redemption Body Scrub</h5>
                        <p>Bamboo Stem and Pumice, to polish skin</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={bodyslab} class="d-block w-100" alt="Body Cleansing Slab"/>
                    <br/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Body Cleansing Slab</h5>
                        <p>Enriched with Bergamot Rind, Tahitian Lime</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={geraniumbody} class="d-block w-100" alt="Geranium Leaf Body Cleanser"/>
                    <br/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Geranium Leaf Body Cleanser</h5>
                        <p>Mandarin and Bergamot Rind refresh skin</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={geraniumscrub} class="d-block w-100" alt="Geranium Leaf Body Scrub"/>
                    <br/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Geranium Leaf Body Scrub</h5>
                        <p>Purifying oils cleanse and smooth skin</p>
                    </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#handBodyCarousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#handBodyCarousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                </div>
        </div>
        </div>
        </div>
        )
    }
}