import React from "react";
 import Friends from './Friends'

const FriendList = props => {
  return (
    <ul className="cards">
      {props.friends.map(friend => {
        return <Friends  key={friend.id} friend={friend} deleteFriend={props.deleteFriend} />;
      })}
    </ul>
  );
};

export default FriendList;
