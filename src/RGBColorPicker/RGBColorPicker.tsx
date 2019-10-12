import React from 'react';
import SingleColorPicker, {baseColor} from './SingleColorPicker'; 
interface IProps{};
interface IState{};

export default class RGBColorPicker extends React.PureComponent<IProps, IState> {

    constructor(props: IProps) {
      console.log("new App component will be initialized");
      super(props);
    }
  
    render(){
      return <div>
        <SingleColorPicker color={baseColor.r}/>
        <SingleColorPicker color={baseColor.g}/>
        <SingleColorPicker color={baseColor.b}/>
        <p>mixed color</p>
      </div>
    }
  }
  