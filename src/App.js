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
      orders: [...orders,{text:order,id:new Date().getTime()}],
    });
  }

  changeHandler = (event) =>{
    const{name,value} = event.target;
    this.setState({[name]:value});
  }

  deleteHandler = id => ()=>{
    const {orders} = this.state;
    const idx = orders.findIndex(order=> order.id === id);
    orders.splice(idx,1);
    this.setState({orders});
  }


  render(){
    return(
      <div className="main">
        <form className="firstrow" onSubmit={this.submitHandler}>
        <div className="entrace">
          <h5>First Name</h5>
          <input onChange={this.changeHandler} value={this.state.order} type="text" name="firstname" placeholder="First Name*"/>
        </div>
        <div className="entrace">
          <h5>Last Name</h5>
          <input onChange={this.changeHandler} value={this.state.order} type="text" name="lastname" placeholder="Last Name*"/>
        </div>
        <div className="entrace">
          <h5>Username</h5>
          <input onChange={this.changeHandler} value={this.state.order} type="text" name="username" placeholder="Username*"/>
        </div>
        <div className="entrace">
          <h5>Gender</h5>
          <input onChange={this.changeHandler} value={this.state.order} type="checkbox" name="gender"/>
        </div>
        <div className="entrace">
          <h5>Action</h5>
          <button type="submit">Add</button>
        </div>
        </form>
        <ul className="order-list">
          {this.state.orders.map(order=><li className="order-item" key={order.id}>
          <span>{order.text.firstname}</span>
          <span></span>
          <span>{order.text.lastname}</span>
          <span></span>
          <span>{order.text.username}</span>
          <span></span>
          <span>{order.text.gender}</span>
          <button onClick={this.deleteHandler(order.id)}>X</button>
          </li>)}
        </ul>
      </div>
    )
  }
}
