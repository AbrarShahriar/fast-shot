import React from 'react'
import './FoodMenu.css'

function FoodMenu() {
    return (
        <div className='foodmenu'>


            {/* pizza */}
            <div className="title">
                <img src={process.env.PUBLIC_URL + 'images/text-bg.png'} alt='bg' />
                <h4>Fast Foods</h4>
            </div>

            <div className="item-container">
                <div className="item">
                    <img src={process.env.PUBLIC_URL + 'images/pizza1.png'} alt='bg' />

                    <span>Pizza One</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

                    <div>Buy</div>
                </div>

                <div className="item">
                    <img src={process.env.PUBLIC_URL + 'images/pizza2.png'} alt='bg' />

                    <span>Pizza Two</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

                    <div>Buy</div>
                </div>

                <div className="item">
                    <img src={process.env.PUBLIC_URL + 'images/pizza3.png'} alt='bg' />

                    <span>Pizza Three</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

                    <div>Buy</div>
                </div>
                
                <div className="item">
                    <img src={process.env.PUBLIC_URL + 'images/pizza4.png'} alt='bg' />

                    <span>Pizza Four</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

                    <div>Buy</div>
                </div>

                <div className="item">
                    <img src={process.env.PUBLIC_URL + 'images/pizza5.png'} alt='bg' />

                    <span>Pizza Five</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

                    <div>Buy</div>
                </div>

                <div className="item">
                    <img src={process.env.PUBLIC_URL + 'images/pizza6.png'} alt='bg' />

                    <span>Pizza Six</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

                    <div>Buy</div>
                </div>
            </div>


            {/* other */}
            <div className="title salad">
                <img src={process.env.PUBLIC_URL + 'images/text-bg.png'} alt='bg' />
                <h4>other</h4>
            </div>

            <div className="item-container">

                <div className="item">
                    <img id='make-straight' src={process.env.PUBLIC_URL + 'images/foods/salad(1).png'} alt='bg' />

                    <span>Salad One</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

                    <div>Buy</div>
                </div>

                <div className="item">
                    <img src={process.env.PUBLIC_URL + 'images/foods/salad(2).png'} alt='bg' />

                    <span>Salad Two</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

                    <div>Buy</div>
                </div>

                <div className="item">
                    <img id='salad-3' src={process.env.PUBLIC_URL + 'images/foods/salad(3).png'} alt='bg' />

                    <span>Salad Three</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

                    <div>Buy</div>
                </div>

                <div className="item">
                    <img id='decrease-gap' src={process.env.PUBLIC_URL + 'images/foods/salad(4).png'} alt='bg' />

                    <span>Salad Four</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

                    <div>Buy</div>
                </div>

                <div className="item">
                    <img id='cake1' src={process.env.PUBLIC_URL + 'images/foods/dessert(1).png'} alt='bg' />

                    <span>Dessert One</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

                    <div>Buy</div>
                </div>

                <div className="item">
                    <img src={process.env.PUBLIC_URL + 'images/foods/dessert(1).png'} alt='bg' />

                    <span>Dessert Two</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

                    <div>Buy</div>
                </div>
               
            </div>
        </div>
    )
}

export default FoodMenu
