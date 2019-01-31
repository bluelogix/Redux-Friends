import React from "react";
 import Friends from './Friends'

const FriendList = props => {
  return (
    <ul>
      {props.friends.map(friend => {
        return <Friends key={friend.id} friend={friend} />;
      })}
    </ul>
  );
};

export default FriendList;
