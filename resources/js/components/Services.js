import { faChartLine, faLaptop, faRocket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Services = () => {
    return (
        <div className="services" id="services">
            <div className="container">
                <h1 className="text-center">My Offered Services</h1>
                <p className="text-center">Praesent quis luctus turpis, sit amet sagittis mi. Suspendisse imperdiet nunc vitae eros dignissim, eu fermentum dui dictum. Vivamus in sem eget lectus volutpat finibus ac sit amet risus. Donec euismod eros quis varius tempus. Quisque vulputate vel nisl nec porttitor. Donec molestie ligula nibh. Aenean tincidunt id velit vitae bibendum.</p>
            <div className="row">
                <div className="col-md-4">
                    <div className="services-box">
                        <FontAwesomeIcon className="fa" icon={faRocket}/><span>Graphics</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mi dolor, tempus ut convallis a, finibus vitae eros.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="services-box">
                        <FontAwesomeIcon className="fa" icon={faChartLine}/><span>Graphics</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mi dolor, tempus ut convallis a, finibus vitae eros.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="services-box">
                        <FontAwesomeIcon className="fa" icon={faLaptop}/><span>Graphics</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mi dolor, tempus ut convallis a, finibus vitae eros.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Services
