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
      console.log("new RGBColorPicker component will be initialized");
      super(props);
      this.state = {
          rValue:5,
          gValue:50,
          bValue:200
      }
      this.onIntensityChange = this.onIntensityChange.bind(this);
    }

    onIntensityChange(color:baseColor,intensity:number){
        switch (color){
            case (baseColor.r):
                this.setState({rValue:intensity});
                break;
            case (baseColor.g):
                this.setState({gValue:intensity});
                break;
            case (baseColor.b):
                this.setState({bValue:intensity});
                break;
        }
    }
  
    render(){
        let colorSample: string = `rgb(${this.state.rValue},${this.state.gValue},${this.state.bValue})`
        const rgbStyle = {
            display: "inline-block",
            width: "20px",
            height: "20px",
            backgroundColor: colorSample
        }
      return <div>
        <SingleColorPicker color={baseColor.r} intensity={this.state.rValue} onIntensityChange={this.onIntensityChange}/>
        <SingleColorPicker color={baseColor.g} intensity={this.state.gValue} onIntensityChange={this.onIntensityChange}/>
        <SingleColorPicker color={baseColor.b} intensity={this.state.bValue} onIntensityChange={this.onIntensityChange}/>
        <div style={rgbStyle}></div>mixed color
      </div>
    }
  }
  