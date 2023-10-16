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
        alert("¡Saludos desde el ITT!");
        this.setState({
            showAlert: true 
        });
    };

    render(){
        const { data, buttonText } = this.props;
        const { showAlert } = this.state;

        console.log(this.props);

        return (
            <div className="App-body">
                <div className="container">
                    <div className="text">Personajes de la serie</div>
                    <ul className="Body-list list-group">
                        {data.map((item) => (
                            <li className= "list-group-item" key={item.id}>
                                ID: {item.id} - Personaje: {item.name}
                            </li>
                        ))}
                    </ul>
                    <button className="btn btn-primary Body-button" onClick={this.handleButtonClick}>
                        {buttonText}
                    </button>
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
    data: [
        { id: 0, name: '🎨' },
        // Otros elementos por defecto
      ],
};

export default Body;