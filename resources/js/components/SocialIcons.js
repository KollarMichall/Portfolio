import { faBehance, faGithub, faLinkedin, faMedium, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SocialIcons = () => {
    return (
        <div className="social-icons">
            <ul>
                <a><li><FontAwesomeIcon icon={faLinkedin}/></li></a>
                <a><li><FontAwesomeIcon icon={faTwitter}/></li></a>
                <a><li><FontAwesomeIcon icon={faMedium}/></li></a>
                <a><li><FontAwesomeIcon icon={faGithub}/></li></a>
                <a><li><FontAwesomeIcon icon={faBehance}/></li></a>
            </ul>
        </div>
    )
}

export default SocialIcons
