import React, {Component} from "react";

//importing components
import {CardList} from "./components/CardList/CardList";
import {SearchBox} from './components/searchBox/searchbox';

//importing css file
import "./App.css"


class App extends Component {

  constructor(){

    super();

    this.state = {
      monsters: [],
      SearchField: ""
    };
  }

    componentDidMount (){
      fetch ('https://jsonplaceholder.typicode.com/users')
      .then(Response => Response.json())
      .then(users=> this.setState({monsters: users}))
      
    }
  render(){


      //creating state
      const {monsters, SearchField} = this.state;
      const filteredMonsters = monsters.filter(monster=> monster.name.toLowerCase().includes(SearchField.toLowerCase()))
     
    return (
      <div className= "App">
        <h1>Robo Corp Inc</h1>
        
        <SearchBox 
        placeholder= "search monsters"
        handlechange= {e=> this.setState({SearchField: e.target.value})}
        />

        <CardList monsters = {filteredMonsters}/>
          
       

      </div>
    )

  }
}
export default App;