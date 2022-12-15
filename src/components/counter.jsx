import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
function Counter(props) {
  const dispatch = useDispatch();
  console.log(props.mscore);
  return (
    <div>
      <h1>Counter :{props.count.counter}</h1>
      <Button variant="primary" onClick={() => dispatch({ type: "increment" })}>
        Increment
      </Button>
      <Button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "decrement" })}
        disabled={props.count.counter === 0 ? true : false}
      >
        Decrement
      </Button>
      <Button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "reset" })}
        disabled={props.count.counter === 0 ? true : false}
      >
        Reset
      </Button>
    </div>
  );
}
export default connect((state) => state)(Counter);
