import React from "react";
import "./App.css";

class FormList extends React.Component{
    constructor(props){
    super(props)
   this.state={
     name:"",
     age:"",
     salary:"",
     employee:[],
   };
   this.handleChange=this.handleChange.bind(this);
   this.handleSubmit=this.handleSubmit.bind(this)
  }
    handleChange(event){
      this.setState({ [event.target.name]:event.target.value})
    }
    handleSubmit(event){
      event.preventDefault()
      const tempObj={
        name:this.state.name,
        age:this.state.age,
        salary:this.state.salary,
      }
    const tempArr=this.state.employee;
    tempArr.push(tempObj)
    console.log(tempArr);
    this.setState({user:tempArr, })

    }
   render(){
    
     return(
          <div>
          <h1>DETAILS OF THE EMPLOYEES</h1>
       <form onSubmit={this.handleSubmit}>
       <label>name:</label> 
       <input type="text" id="name" name="name"  value={this.state.name} onChange={this.handleChange}/><br />
       <label >age:</label>
       <input type="number" id="name" name="age" value={this.state.age} onChange={this.handleChange} /><br />
       <label >salary:</label>
       <input type="number" id="name" name="salary" value={this.state.salary} onChange={this.handleChange}/><br />
        <input type="submit" value="submit"/>
        
       </form>
       <div className="container">
       {this.state.employee.map((value,index) => 
            {
                return (
                  
                    <div key={index}>
                        <div> Name : {value.name} </div>
                        <div>Age: {value.age} </div>
                        <div>Salary: {value.salary} </div>
                    </div>
                    
                )
            }
            )}
       </div>
       </div>
     )
   }
}

export default FormList