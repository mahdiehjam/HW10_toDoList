import React,{Component} from 'react';
import "./App.css";

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      orders: []
    }
  }

  submitHandler = (event) =>{
    event.preventDefault();
    const order = {
      firstname:document.getElementsByName("firstname")[0].value,
      lastname:document.getElementsByName("lastname")[0].value,
      username:document.getElementsByName("username")[0].value,
      gender:document.getElementsByName("gender")[0].value
    }
    const {orders} = this.state;
    this.setState({
      orders: [...orders,order]
    });
  }


  render(){
    return(
      <div className="main">
        <form className="firstrow" onSubmit={this.submitHandler}>
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
          <button type="submit">Add</button>
        </div>
        </form>
        <ul className="order-list">
          {this.state.orders.map((order,index)=><li className="order-item" key={index}>
          <span>{order.firstname}</span>
          <span></span>
          <span>{order.lastname}</span>
          <span></span>
          <span>{order.username}</span>
          <span></span>
          <span>{order.gender}</span>
          <button>X</button>
          </li>)}
        </ul>
      </div>
    )
  }
}
