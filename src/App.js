import './App.css';
import React, { Component } from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';


class App extends Component {
  render(){
    const bannerTop = "Mario API en React";
    const bannerBottom = "Detalles de la API";

    const charData = [
      { id: 0, name: "🎈" },
      { id: 1, name: "Mario" },
      { id: 2, name: "Luigi" },
      { id: 3, name: "Peach" },
      { id: 4, name: "Toad" },
      { id: 5, name: "Bowser" }
    ];

    const alertButton = () => {
      alert("¡Saludos desde el ITT!");
    };

    const footerCredits = "Derechos reservados © prj-mario-api-react - 2023";

    return (
      <div className="App">
        <Banner title={bannerTop} />
        <Header />
        <Banner title={bannerBottom} />
        <Body data={charData} buttonText="Botón sorpresa" showAlert={alertButton} />
        <Footer credits={<footer>{footerCredits}</footer>} />
      </div>
  );}
}

export default App;
