import { useRef } from 'react'
import React from 'react'


//Data
import { percent } from '../../Context/percentData/percent'

//SASS
import './Intro.scss'

// Images
import Ring from '../../Assets/Imges/Rings.svg'


function Intro() {

    let elpercent = useRef()
    let closeArea = useRef()
    let percentArea = useRef()


    return (
        <div className='intro'>
            <div className='container'>
                <div className='intro__list'>
                    <div ref={closeArea} className='intro__wrapper'>
                        <h1 className="intro__title">Happy Tuesday, Lily. </h1>
                        <p className="intro__text">Lorem ipsum dolor sit amet, dicam diceret molestiae in his. Eum putent possit ea. Ex mei <a href="#/" className="intro__link">discere</a> feugiat, pri ex nisl delicata sapientem, quod bonorum appetere te per. Offendit dissentiunt at nam, <a href='#/' className="intro__link">ea has</a> illud dolore deseruisse.</p>
                    </div>
                    <div ref={percentArea} className='intro__percent'>
                        <img src={Ring} alt="Ring" />
                        <button className='intro__btn' onClick={() => {
                            closeArea.current.classList.toggle('intro__wrapper--close')
                            percentArea.current.classList.toggle('intro__percent--open')
                        }}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <ul className="intro-stats">
                            {
                                percent.map((obj, i) => {
                                    let r = 98
                                    let c = Math.PI * r * 2;
                                    let pct = ((100 - obj.count) / 100) * c;
                                    return (
                                        <li key={i}>
                                            <div className="progressCircle">
                                                <div id="svgWrapper">
                                                    <svg ref={elpercent} className="svg" width="220" height="220" viewport="0 0 110 110" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                        <circle id="bar-bg" r="98" cx="110" cy="110" fill="transparent" strokeDasharray="615.752" strokeDashoffset="615.752"></circle>
                                                        <circle id="bar" style={{stroke: obj.color}} r="98" cx="110" cy="110" fill="transparent" strokeDasharray="615.752" strokeDashoffset={pct}></circle>
                                                    </svg>
                                                </div>
                                                <div className="quality-block">
                                                    <p className="quality">{obj.day}</p>
                                                    <p className="quality__text">
                                                        days left<br />
                                                        <span>before launch</span>
                                                    </p>
                                                </div>

                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div >
        </div >
    )
}


export default Intro