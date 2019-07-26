import React from "react";
import ReactDOM from "react-dom";

class ContactList extends React.Component{
  render() {
    const people = [
      {name: 'Malika'},
      {name: 'Stephen'},
      {name: 'Jordan'}
    ]

    return <ol>
      {people.map((person) => (
        <li key= {person.name}>{person.name}</li>
      ))}
    </ol>
  }
}




ReactDOM.render(
  <ContactList />,
  document.getElementById("root"));
