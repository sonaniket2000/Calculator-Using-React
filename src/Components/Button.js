import React from 'react'

class Button extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        if(this.props.data === '.')
        {
            const str = this.props.str;
            if(str[str.length-1] !== '.')
                this.props.handleClick(this.props.data);
        }
        else
        this.props.handleClick(this.props.data);
    }

render(){
    return(
        <>
        <button className="btn" onClick={this.handleClick}>{this.props.data}</button>
        </>
    );
}
}

export default Button;
