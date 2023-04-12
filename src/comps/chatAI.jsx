import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnswer, getDataStart } from "../app/actions/chatActions";

const ChatAI = () => {
  const [prompt, setPrompt] = useState("");
  const state = useSelector((state) => state.chatState);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(getDataStart());
    dispatch(getAnswer(prompt));
    setPrompt("")
  };

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };
  
  console.log(state);
  return (
    <div className="chat">
      <div className="list">
        {state.chatData.map((message) => (
          <>
            <p className="prompt">{message.prompt}</p>
            <p className="answer">{message.answer}</p>
          </>
        ))}
        {state.isLoading && "Loading..."}
      </div>
      <div className="form">
        <input
          value={prompt}
          onChange={handleChange}
          type="text"
          placeholder="ask to AI"
        />
        <button onClick={handleSubmit}>Send</button>
      </div>
    </div>
  );
};

export default ChatAI;
