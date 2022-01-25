import React from 'react'
import './App.css'
import Button from './Components/Button'
import Operationbutton from './Components/Opertationbutton'
import Clearbutton from './Components/Clearbutton'
import Display from './Components/Display'
import Result from './Components/Result'

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {str:'',rFlag : 0};
    this.handleClick=this.handleClick.bind(this);
    this.handleResult = this.handleResult.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleFlag = this.handleFlag.bind(this);
  }

  handleClear(){
    this.setState({
      str:'',rFlag:0
    });
  }

  handleClick(val){
    var f=1;
        if(this.state.rFlag === 1)
        {
          if(val !=='+' && val !=='-' && val !=='*' && val !=='/')
            f = 0;
        }
      
      this.setState({
       str:f ? (this.state.str+val) : val,
       rFlag:0  
      },() => this.setState({str:this.state.str.toString()}));
    
  }

  handleResult(val){
    this.setState({
      str:val,
      flag:1
    });
  }
  
  handleFlag(){
    this.setState({
      rFlag : 1
    });
  }

  render(){

    return(
      <div className="MainDiv">
        <div className='Main'>
          <Display data={this.state.str}  />

          <Button handleClick={this.handleClick}  data={1}/>
          <Button handleClick={this.handleClick}  data={2}/>
          <Button handleClick={this.handleClick} data={3}/>

          <Operationbutton handleClick={this.handleClick} str={this.state.str} data={'+'}/>
          
          <Button handleClick={this.handleClick} data={4}/>
          <Button handleClick={this.handleClick} data={5}/>
          <Button handleClick={this.handleClick} data={6}/>

          <Operationbutton handleClick={this.handleClick} str={this.state.str}  data={'-'}/>

          <Button handleClick={this.handleClick} data={7}/>
          <Button handleClick={this.handleClick} data={8}/>
          <Button handleClick={this.handleClick} data={9}/>

          <Operationbutton handleClick={this.handleClick} str={this.state.str} data={'*'}/>

          <Button data={'.'} handleClick={this.handleClick} str = {this.state.str} />

          <Button handleClick={this.handleClick} data={0}/>

          <Result data={'='} handleClick = {this.handleResult} handleFlag = {this.handleFlag} str = {this.state.str} />
          <Operationbutton handleClick={this.handleClick} str={this.state.str}  data={'/'}/>
          <Clearbutton data={'Clear'} handleClear = {this.handleClear}/>
        </div>

      </div>
      );
  }

}

export default App