import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore, compose } from "redux";
import {
  IIntensityAction,
  baseColor
} from "./RGBColorPicker/SingleColorPicker";


import { Dimension, IDimensionAction } from "./components/DimensionConfigurator";

export enum ActionType {
  INIT = "@@INIT",
  redux_test = "redux_test",
  update_color_intensity = "update_color_intensity",
  update_square = "update_square"
}
export interface IAction {
  type: ActionType;
}

interface IRGBColorPicker {
  rValue: number;
  gValue: number;
  bValue: number;
}

interface IRectangleConfigurator {
  width: number;
  height: number;
}

interface IState {
  stateCounter: number;
  RGBColorPicker: IRGBColorPicker;
  RectangleConfigurator: IRectangleConfigurator;
}

const initialState: IState = {
  stateCounter: 0,
  RGBColorPicker: {
    rValue: 40,
    gValue: 100,
    bValue: 50
  },
  RectangleConfigurator: {
    width: 100,
    height: 100
  }
};

const reducer = (state = initialState, action: IAction) => {
  console.log(
    "REDUCER CALLED, stateCounter:" +
      state.stateCounter +
      " ACTION:" +
      action.type
  );
  let newState: IState = state;
  newState = JSON.parse(JSON.stringify(state)) as IState;
  newState.stateCounter++;
  switch (action.type) {
    case ActionType.INIT:
      return newState;
    case ActionType.update_color_intensity:
      const intensityAction = action as IIntensityAction;
      const color = intensityAction.color;
      console.log(color);
      switch (color) {
        case baseColor.r:
          console.log("update red");
          newState.RGBColorPicker.rValue = intensityAction.intensity;
          break;
        case baseColor.g:
          newState.RGBColorPicker.gValue = intensityAction.intensity;
          break;
        case baseColor.b:
          newState.RGBColorPicker.bValue = intensityAction.intensity;
          break;
      }
      return newState;
    case ActionType.update_square:
      const dimensionAction = action as IDimensionAction;
      switch (dimensionAction.dimension) {
        case Dimension.width:
          if (dimensionAction.value) newState.RectangleConfigurator.width = dimensionAction.value;
          break;
        case Dimension.height:
          if (dimensionAction.value) newState.RectangleConfigurator.height = dimensionAction.value;
          break;
        default:
          break;
      }
      return newState;
    default:
      console.log("Error!!!!! no reducer defined");
      return newState;
  }
};

export interface IWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION__: any;
}
declare let window: IWindow;

let reduxMiddleware: any;
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  reduxMiddleware = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

const store = createStore(reducer, reduxMiddleware);

export function reduxState() {
  return store.getState();
}

ReactDOM.render(
  <App stateCounter={reduxState().stateCounter} />,
  document.getElementById("root")
);

store.subscribe(() => {
  ReactDOM.render(
    <App stateCounter={reduxState().stateCounter} />,
    document.getElementById("root")
  );
});

export function dispatch(action: IAction) {
  store.dispatch(action);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
