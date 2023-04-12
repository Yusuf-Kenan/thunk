import React from "react";
import { useState } from "react";
import ChatAI from "../comps/chatAI";
import ImgAI from "../comps/imgAI";

const Main = () => {
  const [isChat, setIsChat] = useState(true);

  const handleClick = () => {
    setIsChat(!isChat);
  };

  return (
    <div className="chat-bot">
      <h1>DREAM YOUR FUTURE</h1>
      <button onClick={handleClick}>
        {isChat ? "Go to Image" : "Go to Chat"}
      </button>
      {isChat ? <ChatAI /> : <ImgAI />}
    </div>
  );
};

export default Main;
