import { Component } from "react";
import PropTypes from "prop-types";


class Body extends Component{
    constructor(props) {
        super(props);
        this.state = {
          showAlert: false,
        };
    }

    handleButtonClick =()=> {
        this.setState({
            showAlert: true 
        });
    };

    render(){
        const { data, buttonText } = this.props;
        const { showAlert } = this.state;

        return (
            <div className="App-body">
                <div className="container">
                    <div className="text">Personajes de la serie</div>
                    <ul className="list-group">
                        {data.map((item) => (
                            <li key={item.id}>
                                ID: {item.id} - Personaje: {item.name}
                            </li>
                        ))}
                    </ul>
                    <button className="btn btn-primary" onClick={this.handleButtonClick}>
                        {buttonText}
                    </button>
                    {showAlert && (
                        <div className="alert">
                            <p>Texto random</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

Body.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    ),
    buttonText: PropTypes.string.isRequired,
  };

Body.defaultProps = {
    data: [0, "a"],
};

export default Body;