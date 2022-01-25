import React from 'react'

class Display extends React.Component{

    render(){

        return(
            <>
            <div className='Display' >{this.props.data}</div>
            </>
        );
    }
}

export default Display;