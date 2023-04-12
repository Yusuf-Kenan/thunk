import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  chatData: [],
  imgData: [],
  isLoading: false,
};

export const chatReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_DATA_START:
      return {
        ...state,
        isLoading: true,
      };

    case ActionTypes.GET_ANSWER:
      return {
        ...state,
        chatData: [...state.chatData, payload],
        isLoading: false,
      };

      case ActionTypes.GET_IMG:
        return{
          ...state,
          imgData:[...state.imgData, payload],
          isLoading: false,
        }
    default:
      return state;
  }
};
