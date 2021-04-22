import { faInternetExplorer } from '@fortawesome/free-brands-svg-icons'
import { faDownload, faEnvelope, faHeart, faPhone, faRocket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="container text-center">
                <h1>Contact Me</h1>
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="row">
                    <div className="col-md-4">
                        <FontAwesomeIcon className="fa" icon={faPhone}/>
                        <p>+1 0123456789</p>
                    </div>
                    <div className="col-md-4">
                        <FontAwesomeIcon className="fa" icon={faEnvelope}/>
                        <p>john123@gmail.com</p>
                    </div>
                    <div className="col-md-4">
                        <FontAwesomeIcon className="fa" icon={faInternetExplorer}/>
                        <p>www.johnsm.com</p>
                    </div>
                </div>
                <button type="button" className="btn btn-primary"><FontAwesomeIcon className="fa" icon={faDownload}/>Resume</button>
                <button type="button" className="btn btn-primary"><FontAwesomeIcon className="fa" icon={faRocket}/>Hire Me</button>
            </div>
            <div className="footer text-center"><p>Made with <FontAwesomeIcon className="fa" icon={faHeart}/> by Kolli M</p></div>
        </div>
    )
}

export default Contact
