import React from "react";

const Friends = props => {
  return ( 
  <div>
      <h2>{props.friend.name}</h2> 
      <p>{props.friend.email}</p>
      <p>{props.friend.age}</p>
  </div>
    );

};

export default Friends;
