import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

export const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

export const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      const addTextObj = { text: action.text, id: Date.now() };
      return [addTextObj, ...state];
    case DELETE:
      const deleteArry = state.filter((toDo) => toDo !== action.id);
      return deleteArry;
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
