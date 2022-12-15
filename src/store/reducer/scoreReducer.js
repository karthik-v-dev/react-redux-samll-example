const initial = {
  balls: 0,
  score: 0,
  wickets: 0,
  overs: 0,
  extras: {
    lb: 0,
    wd: 0,
    nb: 0,
    by: 0,
  },
};

function scoreReducer(state = initial, action) {
  if(state.wickets<10){
  switch (action.type) {
    case 1:
      return {
        ...state,
        score: state.score + 1,
        overs: state.balls >= 5 ? state.overs + 1 : state.overs,
        balls: state.balls >= 5 ? (state.balls = 0) : state.balls + 1,
      };
    case 2:
      return {
        ...state,
        score: state.score + 2,
        overs: state.balls >= 5 ? state.overs + 1 : state.overs,
        balls: state.balls >= 5 ? (state.balls = 0) : state.balls + 1,
      };
    case 3:
      return {
        ...state,
        score: state.score + 3,
        overs: state.balls >= 5 ? state.overs + 1 : state.overs,
        balls: state.balls >= 5 ? (state.balls = 0) : state.balls + 1,
      };
    case 4:
      return {
        ...state,
        score: state.score + 4,
        overs: state.balls >= 5 ? state.overs + 1 : state.overs,
        balls: state.balls >= 5 ? (state.balls = 0) : state.balls + 1,
      };
    case 6:
      return {
        ...state,
        score: state.score + 6,
        overs: state.balls >= 5 ? state.overs + 1 : state.overs,
        balls: state.balls >= 5 ? (state.balls = 0) : state.balls + 1,
      };
    case "wk":
      return {
        ...state,
        wickets: state.wickets <10?state.wickets + 1:10,
        overs: state.balls >= 5 ? state.overs + 1 : state.overs,
        balls: state.balls >= 5 ? (state.balls = 0) : state.balls + 1,
      };
    case "lb":
      return {
        ...state,
        score: state.score + 1,
        overs: state.balls >= 5 ? state.overs + 1 : state.overs,
        balls: state.balls >= 5 ? (state.balls = 0) : state.balls + 1,
        extras: { ...state.extras, lb: state.extras.lb + 1 },
      };
    case "wd":
      return {
        ...state,
        score: state.score + 1,
        extras: { ...state.extras, wd: state.extras.wd + 1 },
      };
    case "nb":
      return {
        ...state,
        score: state.score + 1,
        extras: { ...state.extras, nb: state.extras.nb + 1 },
      };
    case "by":
      return {
        ...state,
        score: state.score + 1,
        extras: { ...state.extras, by: state.extras.by + 1 },
      };
    default: {
      return state;
    }
  }
  }else{
    window.alert('All wickets are down');
  }
}

export default scoreReducer;
