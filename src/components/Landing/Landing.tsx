import { Link } from "react-router-dom";

import { chatRooms } from "../../data/chatRooms";

import styles from "./Landing.module.css";

function Landing() {
  return (
    <>
      <h2>Choose a Chat Room</h2>
      {/* <ul className="chat-room-list"> */}
      <ul className={styles.chatRoomList}>
        {chatRooms.map((room) => (
          <li key={room.id}>
            <Link to={`/room/${room.id}`}>{room.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export { Landing };
