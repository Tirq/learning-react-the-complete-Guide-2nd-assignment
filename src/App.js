import React, {Component} from 'react';
import './App.css';
import Instructions from './Instructions/Instructions';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  
  state = {text: ''}

  changedTextHandler = (event) => {
    this.setState({text: event.target.value });
  };

  removeLetterHandler = (index) => {
    const array = this.state.text.split("");
    array.splice(index,1);
    const text = array.join("");
    this.setState({text}); 
  }

  render(){

    const letters = (
       this.state.text.split("").map((a,index) =>{
         return ( <CharComponent 
                    clicked={this.removeLetterHandler.bind(this,index)} 
                    letter={a} 
                    key={index} />) 
       }) 
    );

    return (
      <div className="App">
        <Instructions/>
        <input type='text' 
               value={this.state.text} 
               onChange={this.changedTextHandler} />
        <p>You typed {this.state.text.length} characters!</p>
        <ValidationComponent length={this.state.text.length}/>  
        {letters}
      </div>
    );
  }
  
}

export default App;