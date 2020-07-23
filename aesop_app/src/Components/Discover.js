import React from 'react';
import './Styles/Discover.css'


class Discover extends React.Component {
        render() { 
            return (
            <div className="parent">

                <div className="image">
                    <img src='../src/assets/staple_products/Aesop-Hand-Resurrection-Aromatique-Hand-Wash-500mL-large.png' alt='Handwash'></img>
                </div>

                <div className="column1">
                    <h1>Discover More</h1>

                    <h3>Kits & Duets</h3>
                    <ul>
                        <li>
                            <a href='##'>Travel</a>
                        </li>

                        <li>
                            <a href='##'>Gift Kits</a>
                        </li>

                        <li>
                            <a href='##'>Skin</a>
                        </li>

                        <li>
                            <a href='##'>Hand & Body</a>
                        </li>

                    </ul>
                </div>

                <div className="column2">
                <h3>Hair care</h3>
                    <ul>
                        <li>
                            <a src='##'>Cleanse</a>
                        </li>
                        <li>
                            <a src='##'>Condition</a>
                        </li>
                        <li>
                            <a src='##'>Treat</a>
                        </li>
                        <li>
                            <a src='##'>Groom</a>
                        </li>
                    </ul>
                </div>

                <div className="row">
   
                    <h1>'And your very flesh shall be a great poem'</h1> <br />
                    <h3>-Walt Whitman</h3>
                </div>     

            </div>
        );
    }
}
     
    


export default Discover;