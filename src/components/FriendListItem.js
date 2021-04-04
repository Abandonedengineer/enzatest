import React from "react";

export default function FriendListItem({ friend }) {
  return (
    <div class="friend-list-item">
      <p>{friend.name}</p>
    </div>
  );
}
