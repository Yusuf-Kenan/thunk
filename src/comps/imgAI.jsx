import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImg, getDataStart } from "../app/actions/chatActions";

const ImgAI = () => {

  const [prompt, setPrompt] = useState("");
  const state = useSelector((state) => state.chatState);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(getDataStart());
    dispatch(getImg(prompt));
    setPrompt("")
  };

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };
console.log(state)
  return (
    <div className="chat">
    <div className="list">
      {state.imgData.map((message) => (
        <>
          <p className="prompt">{message.prompt}</p>
          <img className=" chat-img" src={message.answer[0].url} alt="" />
          <img className=" chat-img" src={message.answer[1].url} alt="" />
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
  )
}

export default ImgAI
