import React from 'react';
import SingleColorPicker, {baseColor} from './SingleColorPicker'; 
interface IProps{};
interface IState{
    rValue:number;
    gValue:number;
    bValue:number;
};

export default class RGBColorPicker extends React.PureComponent<IProps, IState> {

    constructor(props: IProps) {
      console.log("new App component will be initialized");
      super(props);
      this.state = {
          rValue:5,
          gValue:50,
          bValue:200
      }
    }
  
    render(){
        let colorSample: string = `rgb(${this.state.rValue},${this.state.gValue},${this.state.bValue})`
        const rgbStyle = {
            display: "inline-block",
            width: "20px",
            height: "20px",
            "background-color": colorSample
        }
      return <div>
        <SingleColorPicker color={baseColor.r} intensity={this.state.rValue}/>
        <SingleColorPicker color={baseColor.g} intensity={this.state.gValue}/>
        <SingleColorPicker color={baseColor.b} intensity={this.state.bValue} />
        <div style={rgbStyle}></div>mixed color
      </div>
    }
  }
  