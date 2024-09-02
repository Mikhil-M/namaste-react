import UserContext from "../Utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h2 className="font-bold">User: {loggedInUser}</h2>
          )}
        </UserContext.Consumer>
        <h2>Namaste Javascript</h2>
        <User name="Mikhil Function" />
        {/* <UserClass name="First" location="Calicut class" /> */}
      </div>
    );
  }
}

export default About;
