import React, { Component } from "react";
import { dispatch, ActionType } from "../index";

export enum Dimension {
  width = "width",
  height = "height"
}

interface IProps {
  dimension: Dimension;
  length: number;
}

interface IState {}

export default class DimensionConfigurator extends Component<IProps, IState> {
  render() {
    return (
      <div>
        <div>
          <label htmlFor="setLength">Set the leng of the div </label>
          <input
            type="number"
            name="setLength"
            id="setLength"
            min="25"
            max="500"
            step="25"
            value={this.props.length}
            onChange={e =>
              dispatch({
                type: ActionType.update_square,
                dimension: this.props.dimension,
                value: parseInt(e.target.value)
              })
            }
          />
        </div>
        <div>
          <p>
            The {Dimension[this.props.dimension]} is {this.props.length} pixels
          </p>
          <p
            style={{
              width: `${this.props.length}px`,
              height: "20px",
              backgroundColor: "blue"
            }}
          ></p>
        </div>
      </div>
    );
  }
}
