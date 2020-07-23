import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import odyssey from './images/odyssey.png';


export default class AllGifts extends Component {
    render() {
        return (
            <div>
                <div class="container">
                <div class="row">
                    <div class="col-sm" className="allGiftsDesc">
                    <h4 className="giftOdyssey">An odyssey of gifts, for generous and</h4> 
                    <h4 className="giftOdyssey">inspired giving</h4>
                    <p>Seasonal Gift Kits</p> <br/><br/> 
                    <p>Aesop favourites</p> <br/><br/> 
                    <p>Small gestures</p> <br/><br/> 
                    <p>Generous offerings</p> <br/><br/> 
                    <p>Fragrant formulations</p> <br/><br/> 
                    <p>Treats for self</p> <br/><br/> 
                    <p>All gifts</p> <br/><br/> 
                    </div>
                    <div class="col-sm">
                        <br/> <br/> <br/>
                    <img src={odyssey} alt="An abstract  of stairs and shapes."/>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
