import React from "react";

//SASS
import './Header.scss'

//Images
import Bitmap_circle from '../../Assets/Imges/Bitmap_circle.png'
import Bitmap from '../../Assets/Imges/Bitmap.png'
import Profile from '../../Assets/Imges/Profile.png'


function Header() {
    return (<header className='header'>
        <nav className='header__nav'>
            <ul className='header__list'>
                <li className='header__item header__item--active'><div className='header__box'><img className='header__img' src={Bitmap} alt="Bitmap" /></div></li>
                <li className='header__item'><div className='header__box'><img className='header__img' src={Bitmap_circle} alt="Bitmap_circle" /></div></li>
                <li className='header__item'>+</li>
            </ul>
            <img className='header__profile' src={Profile} alt="Profile" />
        </nav>
    </header>)
}

export default Header