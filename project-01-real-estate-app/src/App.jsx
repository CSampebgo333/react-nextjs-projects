import React from "react";
import { Fragment } from "react";
import Header from './components/Header/Header.jsx';
import Title from './components/Title/Title.jsx';
import PropertyList from './components/PropertyList/PropertyList.jsx';
import properties from "./data/properties.js";

import Property from './components/PropertyList/Property/Property.jsx';
import PropertyImage from './components/PropertyList/Property/PropertyImage/PropertyImage.jsx';
import PropertyAttribute from "./components/PropertyList/Property/PropertyAttribute/PropertyAttribute.jsx";
import PropertyTypeLabel from "./components/PropertyList/Property/PropertyImage/PropertyTypeLabel/PropertyTypeLabel.jsx";
import PropertyBanner from "./components/PropertyList/Property/PropertyImage/PropertyBanner/PropertyBanner.jsx";
import IconWithText from "./components/PropertyList/Property/PropertyImage/IconWithText/IconWithText.jsx";


import Footer from './components/Footer/Footer.jsx';
import './App.css';



const App = () => {

  return (
    <div className="app">
      <Header />
      <main>
        <Title />
        <PropertyList properties = {properties} />
      </main>
      <Footer />
    </div>
  )
};

export default App;