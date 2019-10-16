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
        <p>Hello I'm a rectangle configurator</p>
        <DimensionConfigurator
          dimension={Dimension.width}
          length={reduxState().RectangleConfigurator.width}
        />
        <DimensionConfigurator
          dimension={Dimension.height}
          length={reduxState().RectangleConfigurator.height}
        />
        <div
          style={{
            height: `${reduxState().RectangleConfigurator.height}px`,
            width: `${reduxState().RectangleConfigurator.width}px`,
            backgroundColor: "red"
          }}
        >
          This is a rectangle div
        </div>
      </div>
    );
  }
}
