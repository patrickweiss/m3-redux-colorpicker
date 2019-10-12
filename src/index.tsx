import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, compose } from 'redux';

interface IWindow extends Window {
    store: any;
    __REDUX_DEVTOOLS_EXTENSION__: any;
}
declare let window: IWindow;

export enum ActionType {
    INIT = "@@INIT",
    update_color_intensity = "update_color_intensity"

}
export interface IAction {
    type: ActionType;
}


interface IRGBColorPicker {
    rValue: number;
    gValue: number;
    bValue: number;
}

interface IState {
    stateCounter: number,
    RGBColorPicker: IRGBColorPicker;
}

const initialState: IState = {
    stateCounter: 1,
    RGBColorPicker: {
        rValue: 40,
        gValue: 100,
        bValue: 50
    }
};


const reducer = (state = initialState, action: IAction) => {
    console.log("2. ACTION:" + action.type);
    let newState: IState = state;
    newState = JSON.parse(JSON.stringify(state)) as IState;
    newState.stateCounter++;
    switch (action.type) {
        case ActionType.INIT:
            return newState;
        default:
            console.log("1. Error!!!!! no reducer defined");
            return newState;
    }
}



let reduxMiddleware: any;
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    reduxMiddleware = compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}

window.store = createStore(
    reducer,
    reduxMiddleware
);


ReactDOM.render(<App stateCounter={window.store.getState().counter} />, document.getElementById('root'));

window.store.subscribe(() => {
    console.log("3. before render ---------------------------------------------");
    ReactDOM.render(<App stateCounter={window.getUIState().counter} />, document.getElementById('root'));
    console.log("3. after render ---------------------------------------------");
  });


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
