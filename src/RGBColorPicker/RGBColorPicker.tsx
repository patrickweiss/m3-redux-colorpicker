import React from 'react';
import SingleColorPicker from './SingleColorPicker'; 
interface IProps{};
interface IState{};

export default class RGBColorPicker extends React.PureComponent<IProps, IState> {

    constructor(props: IProps) {
      console.log("new App component will be initialized");
      super(props);
    }
  
    render(){
      return <div>
        <SingleColorPicker/>
        <SingleColorPicker/>
        <SingleColorPicker/>
        <p>mixed color</p>
      </div>
    }
  }
  