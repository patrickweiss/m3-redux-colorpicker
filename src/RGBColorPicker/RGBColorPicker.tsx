import React from 'react';
interface IProps{};
interface IState{};

export default class App extends React.PureComponent<IProps, IState> {

    constructor(props: IProps) {
      console.log("new App component will be initialized");
      super(props);
    }
  
    render(){
      return <div>
        <p>Hello from ColorPicker</p>
       
  
      </div>
    }
  }
  