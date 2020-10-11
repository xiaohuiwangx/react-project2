import React from "react";
import classes from "./App.css";
import "./Person/Person";

class App extends React.Component {

  state = {
    persons : [
      {"id":123, "name":"max1", "age":23},
      {"id":234, "name":"max2", "age":234},
      {"id":5566, "name":"max3", "age":24}
    ],
    otherState : "Other state",
    showPersons : false
  }

  nameChangeHandler = (event,id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id == id;
    });

    const person = {...persons[personIndex]};
    person.name = event.target.value;
    persons = {...this.state.persons };
    this.retState({persons:persons});

  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons});

  };

  togglePersonHandler = ()=>{
    const doesShow= this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  render(){
    const style= {
      backgroundColor: "white",
      front:"inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;
    if (this.state.showPersons){
      persons =(
        <div> 
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
      <h1>Hi I am react app</h1>
      <p>this is really working! </p>
      <button 
        stype={style} 
        onClick={this.togglePersonHandler}
       >
        Toggle Persons
      </button> 
      {persons}
      </div>
      );
    }
}

export default App;
