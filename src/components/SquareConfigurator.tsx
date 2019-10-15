import React, { Component } from "react";
import DimensionConfigurator, { Dimension } from "./DimensionConfigurator";
import { reduxState } from "../index";

interface IProps {
  stateCounter: number;
}

interface IState {}

export default class SquareConfigurator extends Component<IProps, IState> {
  render() {
    return (
      <div>
        <p>Hello I'm a square configurator</p>
        <DimensionConfigurator
          dimension={Dimension.width}
          length={reduxState().square.width}
        />
        <DimensionConfigurator
          dimension={Dimension.height}
          length={reduxState().square.height}
        />
        <div
          style={{
            height: `${reduxState().square.height}px`,
            width: `${reduxState().square.width}px`,
            backgroundColor: "red"
          }}
        >
          This is a square div
        </div>
      </div>
    );
  }
}
