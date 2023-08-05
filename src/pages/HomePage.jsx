import React from "react";
import Sidebar from "../components/Sidebar";
import Search from "../components/Search";
import Chat from "../components/Chat";

function HomePage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="border-2 border-gray-500 rounded-lg w-4/6 h-4/5 flex overflow-hidden">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default HomePage;
