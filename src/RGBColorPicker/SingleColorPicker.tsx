import React from 'react';

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
      return <div>
        <p>I'm a ColorPicker for {this.props.color}</p>
      </div>
    }
  }