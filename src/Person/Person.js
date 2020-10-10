import React from "React";
import "./Person.css";
import Radium from "radium";
const person = (props) => {
  return (
    <div className="Person" >
      <p onClick={props.click}>I'm {props.name} and I'm {props.age} </p>
      <p>props.children</p>
      <input type="text" value={props.name} />
    </div>
  );
};

export default Radium(person);