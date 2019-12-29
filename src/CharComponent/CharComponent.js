import React from 'react';

const charComponent = (props) => {

    const [letter,clicked] = [props.letter,props.clicked]; 
    const style = {
        display: 'inline-block', 
        padding: '16px', 
        textAlign: 'center', 
        margin: '16px', 
        border: '1px solid black'
    }
    
    return(
    <div style={style} onClick={clicked}>{letter}</div>
    )

};

export default charComponent;