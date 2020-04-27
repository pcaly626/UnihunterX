import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getMonstersByRating } from '../../actions/quick_ecounter_actions';
import { connect } from 'react-redux';

import Input from '../UI/Input';

import './QuickEncounter.css';

class QuickEncounter extends Component 
{
    state = {
        quickEncouterForm: {
            challengeRating: {
                type: 'select',
                name: "challengeRating",
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
            numberOfPlayers:{
                type:"text",
                configuration:{

                },
                value: 1,
                label: "Number of Players"
            }
        }
    }

    getMonstersByRate = () =>{
        const rate = this.state.quickEncouterForm.challengeRating.value
        console.log(rate)
        this.props.getMonstersByRating(rate);
    }

    challengeRatingChange = (event) =>{
        const updateQuickEncounterForm = { ...this.state.quickEncouterForm }
        const updateElement = { ...this.state.quickEncouterForm.challengeRating}
        console.log(updateElement)
        updateElement.value = event.target.value
        updateQuickEncounterForm.challengeRating = updateElement
        console.log(updateQuickEncounterForm)
        this.setState({ quickEncouterForm: updateQuickEncounterForm })
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

        const showHideModal =
        [
            'QuickEncounter',
            this.props.show ? 'QuickEncounterOpen' : 'QuickEncounterClose',
        ]

        return( 
            <div className={ showHideModal.join( ' ' )}>
                <button onClick={this.props.closed}>Menu</button>
                <form className="form-block">
                    { formElements.map( element =>( element ) )}

                </form>
                <button id="get-monsters" onClick={this.getMonstersByRate}>get monsters</button>
            </div>
        )
    }

}

const mapStateToProps = (state) =>({
    monsters: state.quickEncounterReducer.monsters
})

export default connect( mapStateToProps, { getMonstersByRating } )(QuickEncounter);