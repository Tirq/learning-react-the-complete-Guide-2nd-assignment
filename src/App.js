import React, {Component} from 'react';
import './App.css';
import Instructions from './Instructions/Instructions';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  
  state = {text: ''}

  splitText = () => this.state.text.split("");

  changedTextHandler = (event) => {
    this.setState({text: event.target.value });
  };

  removeLetterHandler = (index) => {
    const splitText = this.splitText();
    splitText.splice(index,1);
    const text = splitText.join("");
    this.setState({text}); 
  }

  render(){

    const letters = (
      this.splitText().map((a,index) =>{
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