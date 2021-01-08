import React from "react";
import LoveApi from "./components/apis/LoveApi";
import Pictures from './components/apis/Pictures'
import RandomNumFact from "./components/apis/RandomNumFact";
import Landingpage from './components/Landingpage';

import Header from "./components/Header";
import "./style/styles.css"



// state = { images: [] };

// onSearchSubmit = async (term) => {
//     const response = await unsplash.get('/search/photos', {
//         params: { query: term }
//     });

//     this.setState({ images: response.data.results });
// }

const title = "Gutenberg's API Central"

const App = () => {
  return (
    <>
      <Header title={title} />
      <Landingpage />
      <RandomNumFact />
      <LoveApi />
    </>
  );
}

export default App;