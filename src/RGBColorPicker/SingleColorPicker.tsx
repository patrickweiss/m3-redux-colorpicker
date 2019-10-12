import React from 'react';

export enum baseColor {
    r = "red",
    g = "green",
    b = "blue"
}

interface IonIntensityChange{
    (color:baseColor,intensity:number):void
}

interface IProps {
    color: baseColor;
    intensity: number;
    onIntensityChange:IonIntensityChange;
};

interface IState { };

export default class SingleColorPicker extends React.PureComponent<IProps, IState> {

    constructor(props: IProps) {
        console.log("new SingleColorPicker component will be initialized");
        super(props);
        this.callIntensityChangeOfParentComponent = this.callIntensityChangeOfParentComponent.bind(this);
    }

    render() {
        const scpStyle = {
            display: "inline-block",
            width: "20px",
            height: "20px",
            backgroundColor: this.props.color
        }
        let colorSample: string = "";
        switch (this.props.color) {
            case baseColor.r:
                colorSample = `rgb(${this.props.intensity},0,0)`;
                break;
            case baseColor.g:
                colorSample = `rgb(0,${this.props.intensity},0)`;
                break;
            case baseColor.b:
                colorSample = `rgb(0,0,${this.props.intensity})`;
                break;
        }
        const sampleStyle = {
            display: "inline-block",
            width: "20px",
            height: "20px",
            backgroundColor: colorSample
        }
        return <div>
            <div style={scpStyle}></div><div style={sampleStyle}></div><input type="number" value={this.props.intensity} onChange={this.callIntensityChangeOfParentComponent}/>
            I'm a ColorPicker for {this.props.color}
        </div>
    }

    callIntensityChangeOfParentComponent(event:any){
        this.props.onIntensityChange(this.props.color,event.target.value);
    }
}