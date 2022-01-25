import React from 'react'

class Operationbutton extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        let str = this.props.str;
        let length = this.props.str.length;
     
        if(length!==0 && (str[length-1] !== '+'  && str[length-1] !== '-' && str[length-1] !== '*' && str[length-1] !== '/' && str[length-1] !== '.'))
        this.props.handleClick(this.props.data);
    }

render(){
    return(
        <>
        <button className="btnOpration" onClick={this.handleClick} >{this.props.data}</button>
        </>
    );
}
}

export default Operationbutton;
