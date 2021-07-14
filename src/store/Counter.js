// Action Types
const INC = "Increment";
const DEC = "Decrement";
const SET = "Reset";
// Action Creater
export const Increment = () => {
  return {
    type: INC,
  };
};
export const Decrement = () => {
  return {
    type: DEC,
  };
};
export const Reset = () => {
  return {
    type: SET,
  };
};
const initialState = {
  count: 0,
};
// Reducer
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case INC:
      return { ...state, count: state.count + 1 };
    case DEC:
      return { ...state, count: state.count - 1 };
    case SET:
      return { ...state, count: 0 };
    default:
      return state;
  }
};
export default Reducer;
