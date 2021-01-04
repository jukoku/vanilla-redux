import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE,
    id: parseInt(id),
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      const addTextObj = { text: action.text, id: Date.now() };
      return [addTextObj, ...state];
    case DELETE:
      const deleteArry = state.filter((toDo) => toDo.id !== action.id);
      return deleteArry;
    default:
      return state;
  }
};

const store = createStore(reducer);
export const actionCreators = {
  addToDo,
  deleteToDo,
};
export default store;
