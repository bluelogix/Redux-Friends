import React from 'react';
import { connect } from "react-redux";
import { addFriends } from '../actions'

class FriendForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            email: ''   
        }
    
}
   
handleChanges = e => {
    e.preventDefault();
    this.setState({ 
    [e.target.name]: e.target.value
})
}   

addNewFriend = e => {
    e.preventDefault();
    this.props.addFriends({name: this.state.name, age: this.state.age, email: this.state.email});
    this.setState({
      name: '',
      age: '',
      email: ''
    })
  }



render() {
  return (
      <div className="form">
    
   
        <form autoComplete="off" onSubmit={this.addNewFriend} >

            

                <input className="name"
                    value={this.state.name}
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={this.handleChanges}
                />

                <input
                    value={this.state.age}
                    type="text"
                    name="age"
                    placeholder="Age"
                    onChange={this.handleChanges}
                />
                <input
                    value={this.state.email}
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={this.handleChanges}
                />
        
        <div>
        <button  type="submit">Add Friend</button>
        </div>

        </form>
        
    </div>
  );
}
}



const mapStateToProps = state => {
    return {
        addingFriends: state.addingFriends
    }
}

export default connect(
    mapStateToProps,
    {addFriends} 
)(FriendForm)