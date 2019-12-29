import React  from 'react';

const validationComponent = (props) => {

    const text = (props.length > 5) ? 'Text long enough!': 'Text too short!' ;

    return(
        <div>Result of validations:  {text}</div> 
    )

};

export default validationComponent;