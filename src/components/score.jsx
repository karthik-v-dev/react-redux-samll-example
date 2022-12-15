import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";

function Score(props) {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        Score:{props.mscore.score}-{props.mscore.wickets} &nbsp;
        {props.mscore.overs}.
        {props.mscore.balls !== 6 ? props.mscore.balls : ""}
        &nbsp;Extras:&nbsp;nb:{props.mscore.extras.nb},&nbsp;wd:
        {props.mscore.extras.wd},&nbsp;lb:{props.mscore.extras.lb},&nbsp;by:
        {props.mscore.extras.by}
      </h1>
      <Button className="btn btn-danger"
        onClick={() => {
          dispatch({ type: 1 });
        }}
      >
        1
      </Button>
      &nbsp;
      <Button className="btn btn-danger"
        onClick={() => {
          dispatch({ type: 2 });
        }}
      >
        2
      </Button>
      &nbsp;
      <Button className="btn btn-danger"
        onClick={() => {
          dispatch({ type: 3 });
        }}
      >
        3
      </Button>
      &nbsp;
      <Button className="btn btn-danger"
        onClick={() => {
          dispatch({ type: 4 });
        }}
      >
        4
      </Button>
      &nbsp;
      <Button className="btn btn-danger"
        onClick={() => {
          dispatch({ type: 6 });
        }}
      >
        6
      </Button>
      &nbsp;
      <Button className="btn btn-danger"
        onClick={() => {
          dispatch({ type: "wk" });
        }}
      >
        Wicket
      </Button>
      &nbsp;
      <Button className="btn btn-danger"
        onClick={() => {
          dispatch({ type: "lb" });
        }}
      >
        Lb
      </Button>
      &nbsp;
      <Button className="btn btn-danger"
        onClick={() => {
          dispatch({ type: "wd" });
        }}
      >
        Wide
      </Button>
      &nbsp;
      <Button className="btn btn-danger"
        onClick={() => {
          dispatch({ type: "nb" });
        }}
      >
        Nb
      </Button>
      &nbsp;
      <Button className="btn btn-danger"
        onClick={() => {
          dispatch({ type: "by" });
        }}
      >
        By
      </Button>
      &nbsp;
    </div>
  );
}
export default connect((state) => state)(Score);
