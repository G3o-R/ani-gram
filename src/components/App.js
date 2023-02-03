import '../styles/App.scss'
import Header from "./Header"
import Home from "./Home"
import { useEffect, useState } from 'react';
// import { Route, Switch } from "react-router-dom";

/* 
create an instagram for animals
have a nav bar labeled "good bois" "danger noodles" "nopes"
create json for each category
using map make a function that creates cards for each object with a photo, name, and description
*/

function App() {
  const [animals, setAnimals] = useState(null)
  useEffect(()=>{
    fetch("  http://localhost:3000/animals")
    .then(res=>res.json())
    .then(animalData => setAnimals(animalData))
  },[])
  console.log(animals)
  return (
    <div className="App">
      <Header />
      <Home animalData = {animals}/>
      {/* <Switch>
        <Route path="/">
          <Home />
          <Switch>
        <Route path="/dangerHuggers">
          <DangerHuggers />
        </Route>
        <Route path="/dangerNoodles">
          <DangerNoodles />
        </Route>
        <Route path="/nopes">
          <Nopes />
        </Route>
      </Switch> */}
    </div>
  );
}

export default App;
