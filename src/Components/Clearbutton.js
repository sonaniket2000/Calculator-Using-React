import React from 'react'

class Clearbutton extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this); 
    }

    handleClick(){
        this.props.handleClear();
    }

render(){
    return(
        <>
        <button className="btnClear" onClick = {this.handleClick}>{this.props.data}</button>
        </>
    );
}
}

export default Clearbutton;
