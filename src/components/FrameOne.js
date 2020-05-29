import React from 'react'



const FrameOne = () => {
    return (
        <div className="j-frame frame-one">
            <div className="wrapper">
                <div className="frame-content">
                    <div className="info-meta">
                        <p className="info-metatag">INTRO</p>
                        <div className="frame-height">
                            <h1 className="info-meta-heading line"><span>John Guerrero</span></h1>
                        </div>
                        <div className="info-dialog">
                            <p className="info-meta-position line"><span>Web developer</span></p>
                        </div>
                        <p className="info-meta-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, cumque quibusdam. Ipsam distinctio explicabo corporis. Repudiandae quasi in soluta voluptatibus.
                        </p>
                    </div>
                    <div className="frame-meta-image">
                        <div className="info-image">
                            <div className="image-clip">
                                <img src={require('../assets/images/nppl.jpg')} alt="Sagada Mt."/>
                            </div>
                        </div>
                        <div className="frame-meta-data-image">
                            <div className="frame-meta-location">
                                <p>SAGADA</p>
                                <p>02/25/19</p>
                            </div>
                            <div className="frame-meta-camera">
                                <p>f/10 55</p>
                                <p>ISO 320</p>
                                <p>XT10</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="frame-background-lines">
                <div className="frame-square"></div>
                <div className="frame-square"></div>
                <div className="frame-square"></div>
                <div className="frame-square"></div>
            </div>
            <div className="frame-bg-mobile">
                <div className="frame-bg-overlay-trans">
                    <div className="bg-wrapper">
                        <img src={require('../assets/images/nppl.jpg')} alt="background-img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrameOne
