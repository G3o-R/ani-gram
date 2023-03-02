# Ani-Gram Phase 2 Project

###    A *highly* informative animal platform.

Ani-Gram is a React single page application built with the intention of providing *highly* educational information of various animals. Ani-Gram bears a navbar which allows clients to navigate to the Home, About the animals, and Add Animal routes. This site contains basic tools like a navbar, a filter, and form which allows the user to post a new animal along with its respective information. 

## General Information

State involved with "animals", acting as the collection of animal objects, is held within the App component. "Animals" is only affected via a callback passed as a prop to the AddNewAnimal component, in which all formData is handled. 

Home serves to display a brief summary of each animal bearing only the name, family, image, and description. Upon clicking on the animalInfo route additional information is displayed in the about section of a greater card. At the top of the animalInfo route a filter is present to allow clients to only display the animal family of their choosing. Lastly in the addNewAnimal route a form along with a preview card is presented to allow users to see a preview of the card they are about to post. 

## Technologies Used:

* Javascript/React
* CSS/SASS
* HTML
