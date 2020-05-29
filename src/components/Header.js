import React from 'react'

const Header = () => {
    return (
        <header className="frame-nav">
            <div className="item-logo">
                <p className="logo-tag">JDMG</p>
            </div>
            <div className="item-email">
                <a href="mailto:guerrero.johndm@gmail.com">guerrero.johndm@gmail.com</a>
            </div>
            <div className="nav-items">
                <ul>
                    <li><a href="/">intro</a></li>
                    <li><a href="/">about</a></li>
                    <li><a href="/">works</a></li>
                    <li><a href="/">hire me</a></li>
                </ul>
                <div className="nav-ham">
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    )
}

export default Header
