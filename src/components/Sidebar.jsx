import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

function Sidebar() {
  return (
    <div className="bg-slate-100 basis-1/3 border-r-2 border-slate-600">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
}

export default Sidebar;
