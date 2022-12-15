const initialState = {
  stoped: null,
};

const timerreduce = (state = initialState, action) => {
  switch (action.type) {
    case "clearInter":
      return (state.stoped = action.stops);

    default:
      return state;
  }
};
export default timerreduce;
