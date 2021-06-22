import React from 'react'

const FullScreenLoader = (props) => {

    return (
        <div class="full-screen-loader-wrapper">
            <div className="full-screen-child" style={{ margin: "15px auto", width: "100%" }}>
            <div className="loader" style={{ margin: "15px auto" }}></div>
           {props.percent &&<h4 style={{ margin: " 0 auto", textAlign: "center" }}>{props.percent}</h4>}
            <h4 style={{ margin: " 0 auto", textAlign: "center" }}>Loading...</h4>
        </div>
        </div>
    )
}

export default FullScreenLoader
