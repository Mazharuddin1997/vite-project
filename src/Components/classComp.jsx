import React, { Component } from "react";

class ClassComp extends Component {
  constructor(prop) {
    super();
    this.state = {
      name: "rahul",
      age: 12,
      city: "Mumbai",
    };
  }
  changeState() {
    this.setState(
      prev => {
        return { ...prev, age: prev.age + 1 };
      },
      prev => {}
    );
  }

  render() {
    if (this.state.age == 20) {
      throw new Error("not a hero");
    }
    return (
      <div className="classComp">
        <h3>
          {this.state.name} = {this.state.age}
        </h3>
        <button
          onClick={() => {
            this.changeState();
          }}
        >
          Change age
        </button>
      </div>
    );
  }
}

export default ClassComp;
