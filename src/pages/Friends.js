import React, { useEffect, useState } from "react";
import FriendListItem from "../components/FriendListItem";

export default function Friends() {
  const [Friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setFriends(json));
  }, []);

  return (
    <div class="content-container">
      <div class="content-fluid">
        <div class="jumbotron">
          {Friends.map((friend) => (
            <FriendListItem friend={friend} />
          ))}
        </div>
      </div>
    </div>
  );
}
