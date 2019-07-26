import React,{Component} from 'react';
import "./App.css";

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstname: [],
      lastname: [],
      username: []
    }
  }

  clickHandler = () =>{
    this.setState();
  }


  render(){
    return(
      <div className="main">
        <div className="firstrow">
        <div className="entrace">
          <h5>First Name</h5>
          <input type="text" name="firstname" placeholder="First Name*"/>
        </div>
        <div className="entrace">
          <h5>Last Name</h5>
          <input type="text" name="lastname" placeholder="Last Name*"/>
        </div>
        <div className="entrace">
          <h5>Username</h5>
          <input type="text" name="username" placeholder="Username*"/>
        </div>
        <div className="entrace">
          <h5>Gender</h5>
          <input type="checkbox" name="gender"/>
        </div>
        <div className="entrace">
          <h5>Action</h5>
          <button onClick={this.clickHandler}>Add</button>
        </div>
        </div>
        <ul className="order-list">
          {/* {this.state.orders.map((order,index)=><li className="order-item" key={index}>
          <span>{firstname}</span>
          <span>{lastname}</span>
          <span>{username}</span>
          
          <button>X</button>
          </li>)} */}
        </ul>
      </div>
    )
  }
}
