import React from "react";

//SASS
import './Modul.scss'

//Images
import Brain_icon from '../../Assets/Imges/brain_icon.svg'
import File_icon from '../../Assets/Imges/file_icon.svg'
import Manager_img from '../../Assets/Imges/manager_img.png'
import Promo from '../../Assets/Imges/Promo.png'
import Review_img from '../../Assets/Imges/review_img.png'



function Modul() {
    return (
        <div className='container'>
            <div className="modul">
                <div className='modul__box'>
                    <div className='modul__creative'>
                        <h2 className='modul__creative--title'>Creative Reviews</h2>
                        <div className='modul__creative--box'>
                            <img className='modul__creative--pic' src={Review_img} alt="Review_img" />
                            <div className='modul__creative--dec'>
                                <h3 className='modul__creative--subtitle'>Reel</h3>
                                <p className='modul__creative--time'>3 hours ago </p>
                            </div>
                            <button type='button' className='modul__creative--reviewBtn'>Needs Review</button>
                        </div>
                        <button type='button' className='modul__creative--btn'>2 more reviews</button>
                    </div>
                    <div className='modul__subbox'>
                        <div className='modul__contact'>
                            <h3 className='modul__contact--title'>Call with The Team</h3>
                            <time className='modul__contact--time'>In 43 min</time>
                            <span className='modul__contact--box'>
                                <button className='modul__contact--zoomBtn'>Join Zoom</button>
                                <button className='modul__contact--detailsBtn'>Details</button>
                            </span>
                            <button className='modul__contact--moreBtn'>7 more events</button>
                        </div>
                        <div className='modul__manager'>
                            <h3 className='modul__manager--title'>Account Manager</h3>
                            <div className='modul__manager--list'>
                                <div className='modul__manager--box'>
                                    <img className='modul__manager--pic' src={Manager_img} alt="Manager_img" />
                                    <p className='modul__manager--name'>Sarah Smith</p>
                                </div>
                                <div className='modul__manager--btnBox'>
                                    <button className='modul__manager--btn'>Slack</button>
                                    <button className='modul__manager--btn'>Email</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='modul__document'>
                    <h2 className='modul__document--title'>Recent Documents</h2>
                    <ul className='modul__document--list'>
                        <li className='modul__document--item'>
                            <div className='modul__document--imgbox'>
                                <img className='modul__document--img' src={File_icon} alt="File_icon" />
                            </div>
                            <div className='modul__document--namebox'>
                                <h3 className='modul__document--subtitle'>Service Agreement</h3>
                                <p className='modul__document--time'>32 mins ago </p>
                            </div>
                            <button className='modul__document--btn modul__document--btn--final'>Final</button>
                        </li>
                        <li className='modul__document--item'>
                            <div className='modul__document--imgbox modul__document--imgbox--brain'>
                                <img className='modul__document--img' src={Brain_icon} alt="Brain_icon" />
                            </div>
                            <div className='modul__document--namebox'>
                                <h3 className='modul__document--subtitle'>Brand Strategy</h3>
                                <p className='modul__document--time'>2 Hours ago </p>
                            </div>
                            <button className='modul__document--btn'>Draft</button>
                        </li>
                        <li className='modul__document--item'>
                            <div className='modul__document--imgbox'>
                                <img className='modul__document--img' src={File_icon} alt="File_icon" />
                            </div>
                            <div className='modul__document--namebox'>
                                <h3 className='modul__document--subtitle'>Service Agreement</h3>
                                <p className='modul__document--time'>5 Hours ago </p>
                            </div>
                            <button className='modul__document--btn'>Draft</button>
                        </li>
                    </ul>
                    <button className='modul__document--moreBtn'>7 more documents</button>
                </div>
                <div className='modul__promo'>
                    <img className='modul__promo--img' src={Promo} alt="Promo" />
                </div>
            </div>
        </div>
    )
}


export default Modul