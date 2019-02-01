import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import FriendList from './components/FriendList'
import FriendForm from './components/FriendForm'
import { fetchFriends} from './actions';





class App extends Component {
  constructor(props){
    super(props); 
    this.state = {
      name: '',
      age: '',
      email: ''
    }
  }

    componentDidMount() {
      this.props.fetchFriends();
      // console.log(this.props.fetchFriends())
    }




  render() {
    return (
      <div className="App">
      <h1 className="header">Friends</h1>
      


       <FriendForm />
        <FriendList friends={this.props.friends} />
      </div>
    );
  }
}

const mapStateToProps = state =>  ({
    friends: state.friends,
    fetchingFriends: state.fetchingFriends,
    
   
  });



export default connect(
  mapStateToProps,
   { fetchFriends }
 )(App);
 
