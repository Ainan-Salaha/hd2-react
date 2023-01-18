import React, { Component } from 'react'
import './App.css';



export default class App extends Component {
  //creating state to store variable
  state = {
    //key:value
    Name: "",
    Department: "",
    Rating: "",
    employees : []
  }
  changeHandler = (e) => {
    // e: represents the synthatic events
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state)
  }

  submitHandler =(e)=>{

    e.preventDefault(); //this will help to keep the data as it is
    const empObj={
      Name : this.state.Name,
      Department : this.state.Department,
      Rating : this.state.Rating
    }
    const arr = this.state.employees;
    arr.push(empObj);
    this.setState({employees : arr})
  }


  render() {
    return (
      <div className="container">
        <div className='left'>
          <h1>EMPLOYEE FEEDBACK FORM</h1>
        </div><br />
        <div className='right'>
          <form>
            <label htmlFor='Name' > Name : </label>
            <input id="input" type="text" name='Name' value={this.state.Name} onChange={this.changeHandler} ></input>
            <br /><br /><br />
            <label >Department : </label>
            <input id="input" type="text" name='Department' value={this.state.Department} onChange={this.changeHandler}></input>
            <br /><br /><br />
            <label>Rating : </label>
            <input id="input" type="number" name='Rating' value={this.state.Rating} onChange={this.changeHandler}></input>
            <br /><br /><br />
            <button id='btn' onClick={this.submitHandler}>Submit</button>
          {/* by default the html button is of type submit once click everythinng is reset */}
          </form>
        </div>
        
        
        <div id="data" style={{visibility: 'hidden'}}>
          {this.state.employees.map((value,index)=>{
            return(
            <span id='data_show' key={index}>Name : {value.Name} | Deparment : {value.Department} | Rating : {value.Rating} </span>
            )
          }

          )}
        </div>
      </div>

    )
  }
}
