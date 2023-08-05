import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

function Message({ message }) {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    <div
      ref={ref}
      className={`flex gap-[20px] ${
        message.senderId === currentUser.uid ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="flex flex-col mb-[20px]">
        <img
          className="w-[40px] h-[40px] rounded-3xl object-cover "
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span className="text-gray-400">just now</span>
      </div>
      <div
        className={`w-4/5 flex flex-col gap-[10px]  ${
          message.senderId === currentUser.uid ? "items-end" : "items-start"
        }`}
      >
        <p
          className={`bg-white max-w-max pt-[5px] pb-[5px] pl-[20px] pr-[20px] ${
            message.senderId === currentUser.uid
              ? " rounded-bl-md rounded-br-md rounded-tl-md"
              : " rounded-bl-md rounded-br-md rounded-tr-md"
          }`}
        >
          {message.text}
        </p>
        {message.img && <img className="w-1/2" src={message.img} alt="" />}
      </div>
    </div>
  );
}

export default Message;
