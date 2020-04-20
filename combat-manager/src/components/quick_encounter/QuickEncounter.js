import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getMonstersByRating } from '../../actions/quick_ecounter_actions';
import { connect } from 'react-redux';

import Input from '../UI/Input';

class QuickEncounter extends Component 
{
    state = {
        quickEncouterForm: {
            challengeRating: {
                type: 'select',
                configuration:
                {
                    options:[
                        {displayValue: 1},
                        {displayValue: 2},
                        {displayValue: 3},
                        {displayValue: 4},
                        {displayValue: 5},
                        {displayValue: 6},
                        {displayValue: 7},
                        {displayValue: 8},
                        {displayValue: 9},
                        {displayValue: 11},
                        {displayValue: 12},
                        {displayValue: 13},
                        {displayValue: 14},
                        {displayValue: 15},
                        {displayValue: 16},
                        {displayValue: 17},
                        {displayValue: 18},
                        {displayValue: 19},
                        {displayValue: 20},
                    ]
                },
                value: 1,
                label: "Challenge Rating"
            },
        }
    }

    challengeRatingChange = (event) =>{
        console.log(event.target.value);
        this.props.getMonstersByRating( event.target.value );
    }

    render() 
    {
        const formElements = []
        const encounterForm = { ...this.state.quickEncouterForm }

        for( let element in encounterForm )
        {
            formElements.push( <Input label={encounterForm[element].label} 
                                      type={encounterForm[element].type} 
                                      configuration={encounterForm[element].configuration}
                                      changed={(event) => this.challengeRatingChange(event)}
                                />)
        }


        return( 
            <div>
                <Link to="/">Menu</Link>
                <form className="form-block">
                    { formElements.map( element =>( element ) )}
                </form>
            </div>
        )
    }

}

const mapStateToProps = (state) =>({
    monsters: state.quickEncounterReducer.monsters
})

export default connect( mapStateToProps, { getMonstersByRating } )(QuickEncounter);