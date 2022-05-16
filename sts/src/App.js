import React, { Component } from 'react'
import "./App.css"
export default class App extends Component {
  state = {
    fullName : 'Anoir Taktak',
    bio : 'https://www.linkedin.com/in/anoir-taktak-50160b14b/',
    imageSrc : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2F&psig=AOvVaw3lKZYz_N8ye4hcbEH-7PgF&ust=1652545018438000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOjPz4rw3PcCFQAAAAAdAAAAABAD',
    profesion : 'quincaillerie+devoloper',
    shows : false 
  }
      
       
  show =() => {
       this.setState({shows: ! this.state.shows});
     }

  render() {
    return (
      <div className='App'>
        <button onClick={()=>this.show()}>{this.state.shows ? 'hide profile' : 'show profile'}</button>
        {this.state.shows ?
        
        <div>
        <h1> {this.state.fullName}</h1>
        <img src={this.state.imageSrc} height={100} width={100} />
        <h1>{this.state.bio}</h1>
        <h1> {this.state.profesion} </h1>
        </div>
       :
       <h1>if u want me to show u the boss click the button</h1> }
          
        
        
          
      </div>
      

    )
  }
}
