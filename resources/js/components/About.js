import React from 'react'
import img from '../img/foto.png'

const About = () => {
    return (
        <div className="about container" id="about">
                <div className="row">
                        <div className="col-md-6 text-center">
                            <img src={img} className="profile-img"></img>
                        </div>
                        <div className="col-md-6">
                            <h3>WHO AM I ?</h3>
                            <p>
                            Praesent in quam non elit dapibus commodo eget quis eros. Morbi sodales nibh at placerat sollicitudin. Donec consectetur orci ut laoreet luctus. Praesent quis luctus turpis, sit amet sagittis mi. Suspendisse imperdiet nunc vitae eros dignissim, eu fermentum dui dictum. Vivamus in sem eget lectus volutpat finibus ac sit amet risus. Donec euismod eros quis varius tempus. Quisque vulputate vel nisl nec porttitor. Donec molestie ligula nibh. Aenean tincidunt id velit vitae bibendum. Suspendisse at tortor turpis. Aliquam erat volutpat. Fusce elementum neque nec aliquam aliquet. Phasellus vitae rhoncus purus. Donec non mauris nec magna vulputate commodo eu eget risus.
                            </p>
                           <div className="skills-bar">
                            <p>Abobe photoshop</p>
                            <div className="progress">
                            <div className="progress-bar" style={{width: '80%' }}>80%</div>
                            </div>
                            <p>UI Design</p>
                            <div className="progress">
                            <div className="progress-bar" style={{width: '75%' }}>75%</div>
                            </div>
                            <p>React</p>
                            <div className="progress">
                            <div className="progress-bar" style={{width: '85%' }}>85%</div>
                            </div>
                            <p>Laravel</p>
                            <div className="progress">
                            <div className="progress-bar" style={{width: '70%' }}>70%</div>
                            </div>
                           </div>
                            </div>
                        </div>
                </div>

            
    )
}

export default About
