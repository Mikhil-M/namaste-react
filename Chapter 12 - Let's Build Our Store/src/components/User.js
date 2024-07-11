import { useEffect, useState } from "react";
const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Hello");
    }, 1000);

    console.log("use effect");

    return () => {
      clearInterval(timer);
      console.log("use effect return");
    };
  }, []);

  console.log("render");
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>Count: {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Calicut</h3>
      <h3>Contact: @mikki</h3>
    </div>
  );
};

export default User;
