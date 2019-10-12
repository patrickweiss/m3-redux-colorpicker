import React from 'react';
import './App.css';
import RGBColorPicker from './RGBColorPicker/RGBColorPicker'

interface IProps { };
interface IState { };

export default class App extends React.PureComponent<IProps, IState> {

  constructor(props: IProps) {
    console.log("new App component will be initialized");
    super(props);
  }

  render() {
    return <div>
      <p>Hello TypeScript world</p>
      <RGBColorPicker />


    </div>
  }
}
