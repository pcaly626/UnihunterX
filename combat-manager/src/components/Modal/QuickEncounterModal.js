import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getPlayers, getPlayer, getMonstersByRating } from '../../actions/quick_ecounter_actions';
import { connect } from 'react-redux';

import Input from '../UI/Input';

import './QuickEncounterModal.css';

class QuickEncounterModal extends Component 
{
    state = {
        quickEncouterForm: {
            challengeRating: {
                type: 'select',
                name: "challengeRating",
                configuration:
                {
                    options:[
                        {displayValue: "Select Challenge Rating"},
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
            terrain: {
                type: 'select',
                name: "terrain",
                configuration:
                {
                    options:[
                        {displayValue: 'Select Terrain'},
                        {displayValue:'wetlands'},
                        {displayValue:'swamp'},
                        {displayValue:'desert'},
                        {displayValue:'jungle'},
                        {displayValue:'forest'},
                    ]
                },
                value: 1,
                label: "Terrain Type"
            },
            encounterPlayer:{
                type:"select",
                configuration:{
                    options:[]
                },
                value: 0,
                label: "Select Player"
            },

        },
    }

    componentDidMount(){
        this.props.getPlayers()
    }

    getMonstersByRate = (event) =>{
        const updateQuickEncounterForm = { ...this.state.quickEncouterForm }
        const updateElement = { ...this.state.quickEncouterForm.challengeRating}
        updateElement.value = event.target.value
        updateQuickEncounterForm.challengeRating = updateElement
        this.props.getMonstersByRating(updateElement.value)
        this.setState({ quickEncouterForm: updateQuickEncounterForm })        
    }

    updateEncounterForm = (event, element) =>{
        console.log( element )
        const updateQuickEncounterForm = { ...this.state.quickEncouterForm }
        const updateElement = { ...this.state.quickEncouterForm[element]}
        updateElement.value = event.target.value
        updateQuickEncounterForm[element] = updateElement
        this.setState({ quickEncouterForm: updateQuickEncounterForm })
    }

    render() 
    {

        let encounterPlayer = {};
        for(let player in this.props.players){
            if( player == this.state.quickEncouterForm.encounterPlayer.value)
            {
                encounterPlayer = {...this.props.players[player]}
            }
        }

        const showHideModal =
        [
            'modal',
            this.props.show ? 'QuickEncounterOpen' : 'QuickEncounterClose',
        ]
        const monster = this.props.monsters
        return( 
            <div className={ showHideModal.join( ' ' )}>
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Quick Encounter</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={this.props.closed}>
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
               
                            <div class="modal-body">
                                <div className="form-group">
                                    <Input 
                                        label={this.state.quickEncouterForm.challengeRating.label} 
                                        type={this.state.quickEncouterForm.challengeRating.type} 
                                        configuration={this.state.quickEncouterForm.challengeRating.configuration}
                                        changed={(event) => this.getMonstersByRate(event)}
                                        class="form-control"
                                    />    
                                    <Input 
                                        label={this.state.quickEncouterForm.terrain.label} 
                                        type={this.state.quickEncouterForm.terrain.type} 
                                        configuration={this.state.quickEncouterForm.terrain.configuration}
                                        changed={(event) => this.updateEncounterForm(event, 'terrain')}
                                        class="form-control"
                                    />    
                                    <label>Player</label>
                                     <select className='form-control' onChange={(event) => this.updateEncounterForm(event, 'encounterPlayer')}>
                                        <option value=''>Select Player</option>
                                        { this.props.players.map( player => (
                                            <option key={player.id} value={player.id}>
                                                {player.name}
                                            </option>
                                        ))}
                                        </select>
                                
                                </div>
                                    
                            </div>
                            <div class="modal-footer">
                                <Link to={{
                                    pathname: '/quick_encounter',
                                    state:{
                                        player: encounterPlayer,
                                        terrain: this.state.quickEncouterForm.terrain.value,
                                        monster: monster[0]
                                        
                                    }
                                }}>Start Encounter</Link>
                            </div>
                
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) =>({
    players: state.quickEncounterReducer.players,
    monsters: state.quickEncounterReducer.monsters,
})

export default connect( mapStateToProps, { getMonstersByRating, getPlayers, getPlayer } )(QuickEncounterModal);