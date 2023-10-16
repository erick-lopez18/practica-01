import React from "react";
import PropTypes from "prop-types";


function Footer(props) {
    return(
        <div className="App-footer">
            <i>{props.credits}</i>
        </div>
    )
}

Footer.propTypes = {
    credits: PropTypes.object,
};

export default Footer;