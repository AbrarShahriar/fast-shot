import React from 'react'
import './DrinksMenu.css'

function DrinksMenu() {
    return (
        <div className='drinkmenu'>
            <div className="title">
                <img src={process.env.PUBLIC_URL + 'images/text-bg.png'} alt='bg' />
                <h4>Drinks</h4>
            </div>

            <div className="drink-container">
                <div className="drink">
                    <img src={process.env.PUBLIC_URL + 'images/foods/drink(1).png'} alt='bg' />

                    <span>Drink One</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

                    <div>Buy</div>
                </div>

                <div className="drink">
                    <img src={process.env.PUBLIC_URL + 'images/foods/drink(2).png'} alt='bg' />

                    <span>Drink Two</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

                    <div>Buy</div>
                </div>

                <div className="drink">
                    <img src={process.env.PUBLIC_URL + 'images/foods/drink(3).png'} alt='bg' />

                    <span>Drink Three</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

                    <div>Buy</div>
                </div>
                
                <div className="drink">
                    <img id='subtract' src={process.env.PUBLIC_URL + 'images/foods/drink(4).png'} alt='bg' />

                    <span>Drink Four</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

                    <div>Buy</div>
                </div>

                <div className="drink">
                    <img src={process.env.PUBLIC_URL + 'images/foods/drink(5).png'} alt='bg' />

                    <span>Drink Five</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

                    <div>Buy</div>
                </div>

                <div className="drink">
                    <img src={process.env.PUBLIC_URL + 'images/foods/drink(6).png'} alt='bg' />

                    <span>Drink Six</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

                    <div>Buy</div>
                </div>

            </div>
        </div>
    )
}

export default DrinksMenu
