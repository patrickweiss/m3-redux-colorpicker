import React from 'react';
import { JSXAttribute } from '@babel/types';

export enum baseColor {
    r="red",
    g="green",
    b="blue"
}
interface IProps{
   color:baseColor
};

interface IState{};

export default class SingleColorPicker extends React.PureComponent<IProps, IState> {

    constructor(props: IProps) {
      console.log("new App component will be initialized");
      super(props);
    }
  
    render(){
        const scpStyle = {
            display:"inline-block",
            width:"20px",
            height:"20px",
            "background-color":this.props.color
       }
      return <div>
          <div style={scpStyle}></div>
       I'm a ColorPicker for {this.props.color}
      </div>
    }
  }