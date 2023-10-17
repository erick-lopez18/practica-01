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

    ];

    const alertButton = () => {
      alert("¡Saludos desde el ITT!");
    };

    const buttonTag = "";

    const footerCredits = "Derechos reservados © prj-mario-api-react - 2023";

    return (
      <div className="App App-container">
        <Banner title={bannerTop} />
        <Header />
        <Banner title={bannerBottom} />
        <Body data={charData} buttonText={buttonTag} showAlert={alertButton} />
        <Footer credits={<footer>{footerCredits}</footer>} />
      </div>
  );}
}

export default App;
