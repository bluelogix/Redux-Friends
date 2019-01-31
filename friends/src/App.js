import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import FriendList from './components/FriendList'
import { fetchFriends } from './actions';





class App extends Component {
    // constructor() {
    //   super();
    // }


    componentDidMount() {
      this.props.fetchFriends();
      // console.log(this.props.fetchFriends())
    }


  render() {
    return (
      <div className="App">
        {/* <FriendForm /> */}
        <FriendList friends={this.props.friends} />
      </div>
    );
  }
}

const mapStateToProps = state =>  ({
    friends: state.friends,
    fetchingFriends: state.fetchingFriends,
    // error: state.friendReducer.error
   
  });



export default connect(
  mapStateToProps,
   { fetchFriends}
 )(App);
 
