import React from 'react'
import { BallTriangle } from "react-loader-spinner"

const Loader = () => {
    return (
        <div className="jais-port__loader">
            <div className="inner">
                <BallTriangle
                    heigth="200"
                    width="200"
                    color="#d90429"
                    ariaLabel="loading-indicator"
                />
            </div>
        </div>
    )
}

export default Loader