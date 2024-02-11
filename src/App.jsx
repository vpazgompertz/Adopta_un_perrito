import React from "react";
import "./App.css";
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header tittle="Adopta un perrito" />
      <div className="container">
        <MyCard
          imagen="https://cdn.pixabay.com/photo/2016/01/05/17/51/maltese-1123016_1280.jpg"
          name="Kala"
          description="extremadamente amable, al principio tímida luego se va mostrando más juguetona y gentil."
          text="Maltés"
          color="secondary"
        />

        <MyCard
          imagen="https://cdn.pixabay.com/photo/2017/09/11/14/56/spitz-puppies-2739234_1280.jpg"
          name="Baloo"
          description=" Le encantan los paseos, es muy obediente y tiene un carácter tranquilo,"
          text="Spitzwelpen"
          color="info"
        />

        <MyCard
          imagen="https://cdn.pixabay.com/photo/2017/09/25/13/14/dog-2785077_1280.jpg"
          name="Percy"
          description="Sociable con perros, juguetón. Es importante enriquecerle el ambiente a diario si quedará solo."
          text="Shih TZU"
          color="success"
        />

        <MyCard
          imagen="https://cdn.pixabay.com/photo/2018/03/18/18/06/australian-shepherd-3237735_1280.jpg"
          name="Slinky"
          description="Se considera un perrito temperamental. Es valiente, inteligente y muy atento"
          text="Pastor Australiano"
          color="warning"
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
