import React from "react";
import LoveApi from "./components/apis/LoveApi";
import Pictures from './components/apis/Pictures'
import RandomNumFact from "./components/apis/RandomNumFact";

import Header from "./components/Header";
import "./style/styles.css"



// state = { images: [] };

// onSearchSubmit = async (term) => {
//     const response = await unsplash.get('/search/photos', {
//         params: { query: term }
//     });

//     this.setState({ images: response.data.results });
// }

const title = "Pick a Magic number!"

const App = () => {
  return (
    <>
        <Header title={title}/>
        <RandomNumFact/>
        <LoveApi />
    </>
  );
}

export default App;