
import React from 'react';

const input = ( props) =>{
    let inputElement = null;
    switch( props.type ){
        case ('select'):
            inputElement =( <select className={props.class} onChange={props.changed}>
                { props.configuration.options.map( option => (
                    <option key={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
                </select>
            )
            break;
        case ('input'):
            inputElement = <input className="form-control w-100" {...props.configuration} value={props.value} onChange={props.changed}/>;
            break;
        case('textarea' ):
            inputElement = <textarea {...props.elementConfig} onChange={props.changed}/>;
            break;
        case ( 'url' ):
            inputElement = (
                inputElement = <input className="form-control w-100" {...props.elementConfig} value={props.value} onChange={props.changed}/>
            )
            break;
        case ( 'email' ):
            inputElement = (
                inputElement = <input className="form-control w-100" {...props.elementConfig} value={props.value} onChange={props.changed}/>
            )
            break;
        case ( 'tel' ):
            inputElement = (
                inputElement = <input className="form-control w-100" {...props.elementConfig} value={props.value} onChange={props.changed}/>
            )
            break;
        default:
            inputElement = (<input className={props.class} type='text' />)
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