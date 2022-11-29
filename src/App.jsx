import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
  state={
   profil :{ fullName: " oumaima chaari",
              bio : "cool life "  , 
              imgSrc: "https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg",
              profession :" develloper"
            },
    show : false,
    conter:0 
  }
  
 

inc= () => this.setState({conter: this.state.conter+1})     

componentDidMount(){setInterval(this.inc, 1000)}



handleShow = () => this.setState({show: !this.state.show})

  render() {
    return (
      <div className='App'>
     
      <button onClick={this.handleShow} style={{"height":100, "width":100 , backgroundColor : "orange" , textDecorationStyle:"double" , textAlign:"center"}}> HIDE/SHOW </button>
      <h2> {this.state.conter} </h2>
      { this.state.show &&
      <div>
      <h2 style={{color :"blue" , textDecoration:"gras"}}>  {this.state.profil.fullName} </h2> 
     
      <h2 style={{color :"purple"}}>  {this.state.profil.bio} </h2>
      <h2 style={{color :"orange"}}>  I'm a {this.state.profil.profession}</h2>
      <img src={"https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg"}alt="image"  width="600" height="500" />
      </div>
      }
      </div>
    )
  }
}