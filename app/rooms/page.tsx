import Image from "next/image";

const Rooms: React.FC = () => {
  return (
    <div className="room">
      <div className="room__users user">
        <div className="user__block">
          <Image
            className="user__avatar"
            src="/avatar.jpg"
            alt="User Avatar"
            height={120}
            width={100}
          />
          <div className="user__bottomPanel">
            <div className="user__nickname">broke.oli</div>
            <Image
              className="user__micro"
              src="/microphone.svg"
              alt="Microphone"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
      <div className="room__chat chat">
        <ul className="chat__messageList">
          <li className="chat__message">
            <p>Hey There!</p>
          </li>
        </ul>
        <div className="chat__input">
          <input type="text" placeholder="Input your message..." />
        </div>
      </div>
    </div>
  );
};

export default Rooms;
