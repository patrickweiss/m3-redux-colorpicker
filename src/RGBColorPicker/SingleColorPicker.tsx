import React from 'react';
import { JSXAttribute } from '@babel/types';

export enum baseColor {
    r = "red",
    g = "green",
    b = "blue"
}
interface IProps {
    color: baseColor
    intensity: number
};

interface IState { };

export default class SingleColorPicker extends React.PureComponent<IProps, IState> {

    constructor(props: IProps) {
        console.log("new App component will be initialized");
        super(props);
    }

    render() {
        const scpStyle = {
            display: "inline-block",
            width: "20px",
            height: "20px",
            "background-color": this.props.color
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
            "background-color": colorSample
        }
        return <div>
            <div style={scpStyle}></div><div style={sampleStyle}></div><input type="number" value={this.props.intensity} />
            I'm a ColorPicker for {this.props.color}
        </div>
    }
}