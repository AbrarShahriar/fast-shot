import React from 'react'
import './NavBar.css'

import Cake from './icons/Cake'
import CoffeeCup from './icons/CoffeeCup'
import Hamburger from './icons/Hamburger'
import Milkshake from './icons/Milkshake'
import MineralWater from './icons/MineralWater'
import Pancake from './icons/Pancake'
import PizzaSlice from './icons/PizzaSlice'


function NavBar() {
    return (
        <div className='navbar'>
            <div>
                {/* <img className="icon" src={hamburger} alt=""/> */}

                <Hamburger className='icon'/>
                <span>Hamburger</span>
            </div>
            <div>
                {/* <img className="icon" src={pancake} alt=""/> */}

                <Pancake className='icon'/>
                <span>Pancake</span>
            </div>
            <div>
                {/* <img className="icon" src={sandwich} alt=""/> */}

                <CoffeeCup className='icon'/>
                <span>Coffee</span>
            </div>
            <div>
                {/* <img className="icon" src={coffee} alt=""/> */}

                <Milkshake className='icon'/>
                <span>Shakes</span>
            </div>
            <div>
                {/* <img className="icon" src={cake} alt=""/> */}

                <Cake className='icon'/>
                <span>Dessert</span>
            </div>
            <div>
                {/* <img className="icon" src={bottle} alt=""/> */}

                <MineralWater className='icon'/>
                <span>Drinks</span>
            </div>
            <div>
                {/* <img className="icon" src={pizza} alt=""/> */}

                <PizzaSlice className='icon'/>
                <span>Pizza</span>
            </div>
        </div>
    )
}

export default NavBar
