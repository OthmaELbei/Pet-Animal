import "./App.css";
import Header from "./header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./navPet/nav";
import Swiber from "./swiber/Swiber";
import Birds from "./compAnimals/1Cbirds/Birds";
import Cats from "./compAnimals/2CompCats/Cats";
import Dogs from "./compAnimals/3ComDogs/Dogs";
import Raybet from "./compAnimals/4CombRaibet/Raybet";
import Fishs from "./compAnimals/5ComFish/Fishs";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Swiber />
      <Birds />
      <Cats />
      <Dogs />
      <Raybet />
      <Fishs />
    </>
  );
}

export default App;
