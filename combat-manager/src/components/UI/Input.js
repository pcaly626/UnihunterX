
import React from 'react';

const input = ( props) =>{
    let inputElement = null;
    switch( props.type ){
        case 'select':
            inputElement =( <select onChange={props.changed}>
                { props.configuration.options.map( option => (
                    <option key={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
                </select>
            )
            break;
        default:
            inputElement = (<input type='text' />)
            break;
    }

    return (
      <div> 
          <label>{props.label}</label>
          { inputElement } 
        </div>
    )
}

export default input;