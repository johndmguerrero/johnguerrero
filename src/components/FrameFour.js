import React from 'react'

const FrameFour = (props) => {
    return (
        <div className={"j-sticky frame-four "+props.isActive}>
            <div className="frame-flex v-center">
                <div className="frame-email">
                    <p>email me at:</p>
                    <a href="mailto:guerrero.johndm@gmail.com"><h1>guerrero.johndm@gmail.com</h1></a>
                </div>
            </div>
        </div>
    )
}

export default FrameFour
