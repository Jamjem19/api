import React, { Component } from 'react';
import axios from 'axios';

async function getUsers() {
  try{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response);
    return response;
  } catch(error) {
    console.error(error);
  }
}

class UseList extends Component {
  state = {
    users: []
  }
  componentDidMount =()=>{
   getUsers().then(response =>{
    this.setState({users: response.data})
   });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.users.map((user)=>
            <li>{user.username}
            {user.email}
            {user.phone}
            </li>
        
          )}
         
        </ul>

               
      </div>
    );
  }
}

export default UseList;