import '../styles/App.scss'
import NavBar from "./NavBar"
import Home from "./Home"
import { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import DangerHuggers from './DangerHugger';
import DangerNoodles from './DangerNoodles';
import Nopes from './Nopes';

/* 
create an instagram for animals
have a nav bar labeled "good bois" "danger noodles" "nopes"
create json for each category
using map make a function that creates cards for each object with a photo, name, and description
*/

function App() {
  const [animals, setAnimals] = useState([])
  useEffect(()=>{
    fetch("  http://localhost:4000/animals")
    .then(res=>res.json())
    .then(animalData => setAnimals(animalData))
  },[])

  const huggers = animals.filter( animal => animal.family === "hugger")
  const sneks = animals.filter( animal => animal.family === "snek")
  const nopes = animals.filter( animal => animal.family === "nope")

  //Function to make navBar disappear and reappear when scrolling

  const [visibility, setVisibilty] = useState(true)

  let lastScrollY = window.scrollY
  window.addEventListener("scroll",()=>{
    if(lastScrollY > window.scrollY){
      // going up
      setVisibilty(true)
    }
    if(lastScrollY < window.scrollY){
      // going down
      setVisibilty(false)
    }
    
    lastScrollY = window.scrollY
  })

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home animalData={animals} setAnimals={setAnimals}/>
          </Route>
        <Route path="/dangerHuggers">
          <DangerHuggers animalData={huggers}/>
        </Route>
        <Route path="/dangerNoodles">
          <DangerNoodles animalData={sneks}/>
        </Route>
        <Route path="/nopes">
          <Nopes animalData={nopes}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
