import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Heading from"./heading";
import AboutMe from './AboutMe';
import Projects from './Projects';
import Footer from './Footer';

class App extends React.Component {

  render() {
    return (
      <div id="main_page">
        <Heading />
        <AboutMe />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
