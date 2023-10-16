import React from "react";
import PropTypes from "prop-types";


const Banner =(props)=> {
    return (
        <div className="App-banner">
            <h1>{props.title}</h1>
        </div>
    );
}

Banner.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Banner;