import React from "react";
import PropTypes from "prop-types";


function Footer(props) {
    return(
        <div className="App-footer">
            <p>{props.credits}</p>
        </div>
    )
}

Footer.propTypes = {
    credits: PropTypes.node,
};

export default Footer;