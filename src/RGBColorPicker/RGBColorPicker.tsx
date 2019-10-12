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
        <SingleColorPicker color={baseColor.r} intensity={5}/>
        <SingleColorPicker color={baseColor.g} intensity={100}/>
        <SingleColorPicker color={baseColor.b} intensity={200} />
        <p>mixed color</p>
      </div>
    }
  }
  