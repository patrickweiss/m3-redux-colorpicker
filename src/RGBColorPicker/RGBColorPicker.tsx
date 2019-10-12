import React from 'react';
import SingleColorPicker, {baseColor} from './SingleColorPicker'; 
import {reduxState,dispatch,ActionType} from '../index'


export default class RGBColorPicker extends React.PureComponent {

    constructor(props:any) {
      console.log("new RGBColorPicker component will be initialized");
      super(props);
     
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
        let colorSample: string = `rgb(${reduxState().RGBColorPicker.rValue},${reduxState().RGBColorPicker.gValue},${reduxState().RGBColorPicker.bValue})`
        const rgbStyle = {
            display: "inline-block",
            width: "20px",
            height: "20px",
            backgroundColor: colorSample
        }
      return <div>
        <SingleColorPicker color={baseColor.r} intensity={reduxState().RGBColorPicker.rValue} onIntensityChange={this.onIntensityChange}/>
        <SingleColorPicker color={baseColor.g} intensity={reduxState().RGBColorPicker.gValue} onIntensityChange={this.onIntensityChange}/>
        <SingleColorPicker color={baseColor.b} intensity={reduxState().RGBColorPicker.bValue} onIntensityChange={this.onIntensityChange}/>
        <div style={rgbStyle}></div>mixed color
      </div>
    }
  }
  