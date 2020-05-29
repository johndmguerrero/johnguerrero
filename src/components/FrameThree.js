import React from 'react'

const projdata = [
    {
        id: 1,
        img: "perpetual-help",
        title: "PHMC",
        platform: "Wordpress"
    },
    {
        id: 2,
        img: "tomoe",
        title: "TOMOE",
        platform: "Wordpress"
    }
]

const FrameThree = () => {
    return (
        <div className="j-frame frame-three">
            <div className="wrapper">
                <div className="frame-content v-center">
                    <div className="info-meta-l">
                        <p className="info-metatag">WORKS</p>
                        <p className="info-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laboriosam corporis laudantium repellendus veritatis.</p>
                    </div>
                    <div className="frame-work-r">
                        <div className="proj-force">
                            {projdata.map(projitem => (
                                <a href="/" className="proj-linked proj-shadow" key={projitem.id} >
                                    <div className="proj-frame">
                                        <div className="project-in">
                                            <img 
                                                src={require(`../assets/images/${projitem.img}.jpg`)}
                                                alt={projitem.title}
                                                />
                                        </div>
                                        <div className="project-de">
                                            <h3>{projitem.title}</h3>
                                            <p>
                                                <span>{projitem.platform}</span>
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            ))}
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
        </div>
    )
}

export default FrameThree
