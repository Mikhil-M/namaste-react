import React from "react";
import ReactDOM from "react-dom/client";

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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
