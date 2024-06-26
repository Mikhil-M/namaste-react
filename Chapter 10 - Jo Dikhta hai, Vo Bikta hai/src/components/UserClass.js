import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    console.log("Child Consructor");
  }

  async componentDidMount() {
    console.log("Child Component Did Mount");

    const data = await fetch("https://api.github.com/users/mikhil-m");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });

    this.trimer = setInterval(() => {
      console.log("Test In");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Child Component Did Update");
  }

  componentWillUnmount() {
    clearInterval(this.trimer);
    console.log("Child Component Will Unmount");
  }

  render() {
    const { name, location } = this.state.userInfo;
    console.log("Child Render");
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: @mikki</h3>
        <h2>Count: {this.state.count}</h2>
        <h2>Count2: {this.state.count}</h2>
      </div>
    );
  }
}

export default UserClass;

/**
 * -----MOUNTING----
 *
 *  Constructor(dummy)
 *  Render(dummy)
 *  <HTML Dummy >
 *  componentDidMount(dummy)
 *    <API Call>
 *    <this.setState> -> Update state variable
 *
 * -----UPDATING----
 *
 *  render(API Data)
 *  <HTML API Data>
 *  componentDidUpdate(API Data)
 *
 * -----UNMOUNTING----
 *
 *  componentWillUnmount()
 */
