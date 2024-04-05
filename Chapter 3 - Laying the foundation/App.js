import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.jpg"

const Title = () => (    
    <h1 className="head" tabIndex="2">
      Namste React using JSX
    </h1>
  )

const HeadingComponent = () => (
  <div>
    {Title()}
    <Title/>
    <Title></Title>
    <h1 className="heading">Namaste React Functional Compoents</h1>
  </div>    
)

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />);

// ---------------------------------------------------------------------- //

// Assignment 1

// React Element using React.createElement()
const title = React.createElement('div', { class: 'title'}, [
  React.createElement('h1', {}, 'Namaste React🚀'),
  React.createElement('h2', {}, 'Namaste React🚀'),
  React.createElement('h3', {}, 'Namaste React🚀')
])

// React Element using JSX
const titleJSX = (  
  <div className="title">
    <h1>Namaste React🚀</h1>
    <h2>Namaste React🚀</h2>
    <h3>Namaste React🚀</h3>
  </div>
)

// React Functional Component using JSX
const TitleComponent = () => (  
  <div className="title">
    <h1 tempname="h1">Namaste React🚀</h1>
    <h2 tempname="h2">Namaste React🚀</h2>
    <h3 tempname="h3">Namaste React🚀</h3>
  </div>
)

// Component Composition and difference between  {TitleComponent()}, {<TitleComponent/>}, {<TitleComponent></TitleComponent>)}}
const HeaderComponent = () => (
  <div>
    {console.log(TitleComponent())}
    {console.log(<TitleComponent/>)}
    {console.log(<TitleComponent></TitleComponent>)}
  </div>
)

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeaderComponent/>)

// ---------------------------------------------------------------------- //

// Assignment 2

const Header = () => (
  <header style={{display: "flex", justifyContent: "space-between"}}>    
    <img src={logo} width="20px" height="20px"></img>
    <input type="text"></input>
    <lable>User</lable>
  </header>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header/>)