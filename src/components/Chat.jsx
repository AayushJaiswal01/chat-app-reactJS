import React, { useContext } from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
function Chat() {
  const { data } = useContext(ChatContext);
  return (
    <div className="basis-2/3">
      <div className="bg-gray-400 flex justify-between h-[50px] p-[10px]">
        <span>{data.user?.displayName}</span>
        <div className="gap-[10px]">
          <VideocamIcon className="mr-[10px] cursor-pointer" />
          <PersonAddAlt1Icon className="mr-[10px] cursor-pointer" />
          <MoreVertIcon className="mr-[10px] cursor-pointer" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

export default Chat;
