import '../styles/App.scss'
import NavBar from "./NavBar"
import Home from "./Home"
import { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import AnimalList from "./AnimalList"
import AddNewAnimal from './AddNewAnimal';
/* 
create an instagram for animals
have a nav bar labeled "good bois" "danger noodles" "nopes"
create json for each category
using map make a function that creates cards for each object with a photo, name, and description
*/

function App() {
  const [animals, setAnimals] = useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/animals")
    .then(res=>res.json())
    .then(animalData => setAnimals(animalData))
  },[])

  
  //Function to make navBar disappear and reappear when scrolling
  
  const [visibility, setVisibilty] = useState("")
  // function handleScroll(e){
  //   console.log(e)
  //   // console.log(window.screenY)
  //   // const position = window.scrollX
  //   // setScrollPosition(position)
  //   // console.log(scrollPosition)
  // }
  
  // let lastScrollY = window.scrollY
  // window.addEventListener("scroll",()=>{
  //   if(lastScrollY > window.scrollY){
  //     // going up
  //     setVisibilty("")
  //   }
  //   if(lastScrollY < window.scrollY){
  //     // going down
  //     setVisibilty("--hidden")
  //   }
    
  //   lastScrollY = window.scrollY
  // })
  function handleNewAnimal(newAnimal){
    console.log(newAnimal)
    setAnimals([...animals,newAnimal])
}
/*
create a counter component "creating new component"
link to routes and navLink
within counter component have three buttons
play,reverse, pause
definitely need useEffect and setInterval (increase by one every second) on load
create p tag for counter to display
*/



  return (
    <div className="App">
      <NavBar isVisible={visibility}/>
      <Switch>
        <Route exact path="/">
          <Home animalData={animals}/>
          </Route>
        <Route path="/animalInfo">
          <AnimalList animalData={animals}/>
        </Route>
        <Route path="/addNewAnimal">
          <AddNewAnimal handleNewAnimal={handleNewAnimal}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
