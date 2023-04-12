import axios from "axios";
import { ActionTypes } from "../constants/actionTypes";

export const getDataStart = () => ({
  type: ActionTypes.GET_DATA_START,
  payload: true,
});

export const getAnswer = (prompt) => async (dispatch) => {
  const options = {
    method: "POST",
    url: "https://openai80.p.rapidapi.com/chat/completions",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "f9584f5b9emshf1a494f169c33d7p137511jsn6eff7433d54e",
      "X-RapidAPI-Host": "openai80.p.rapidapi.com",
    },
    data: `{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"${prompt}"}]}`,
  };
  const res = await axios.request(options);

  dispatch({
    type: ActionTypes.GET_ANSWER,
    payload: { prompt, answer: res.data.choices[0].message.content },
  });
};

//resim verisi

export const getImg = (prompt) => async (dispatch) => {
  const options = {
    method: "POST",
    url: "https://openai80.p.rapidapi.com/images/generations",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "f9584f5b9emshf1a494f169c33d7p137511jsn6eff7433d54e",
      "X-RapidAPI-Host": "openai80.p.rapidapi.com",
    },
    data: `{"prompt":"${prompt}","n":2,"size":"1024x1024"}`,
  };

  const res = await axios.request(options);
  console.log(res);
  dispatch({
    type: ActionTypes.GET_IMG,
    payload: { prompt, answer: res.data.data},
  });
};

// export const getAnswer = () =>
//   async function fetchData(dispatch) {
//     const res = await axios.get('https://jsonplaceholder.typicode.com/todos/');

//     dispatch({
//       type: ActionTypes.GET_ANSWER,
//       payload: res.data,
//     });
//   };
