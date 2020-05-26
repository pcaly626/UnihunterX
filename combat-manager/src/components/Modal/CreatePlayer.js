import React, { Component } from 'react';
import Input from '../UI/Input';
import './CreatePlayer.css';
import { createPlayer } from '../../actions/quick_ecounter_actions';
import { connect } from 'react-redux';

class CreatePlayer extends Component
{
    state = {
        creatPlayerForm: {
            name:
            {
                type:'input',
                configuration:{
                    type:'text'
                },
                value: '',
                label: 'Character Name',
            },
            class:
            {
                type:'select',
                configuration:{
                    options:[
                        {displayValue:'barbarian'},
                        {displayValue:'bard'},
                        {displayValue:'cleric'},
                        {displayValue:'druid'},
                        {displayValue:'figher'},
                        {displayValue:'monk'},
                        {displayValue:'paladin'},
                        {displayValue:'ranger'},
                        {displayValue:'rogue'},
                        {displayValue:'sorcerer'},
                        {displayValue:'warlock'},
                        {displayValue:'wizard'}
                    ]
                },
                value: '',
                label: 'Class'
            },
            race:{
                type:'select',
                configuration:{
                    options:[
                        {displayValue:'dwarf'},
                        {displayValue:'elf'},
                        {displayValue:'halfling'},
                        {displayValue:'human'},
                        {displayValue:'dragonBorn'},
                        {displayValue:'gnome'},
                        {displayValue:'halfElf'},
                        {displayValue:'halfOrc'},
                        {displayValue:'tiefling'}
                    ]
                },
                value: '',
                label: 'Race'
            },
            level:
            {
                type:'input',
                configuration:{
                    type:'text'
                },
                value: '',
                label: 'Level'
            },
            armor_class:
            {
                type:'input',
                configuration:{
                    type:'text'
                },
                value: '',
                label: 'Armor Class'
            },
            health:
            {
                type:'input',
                configuration:{
                    type:'text'
                },
                value: '',
                label: 'Health'
            },
            speed:
            {
                type:'input',
                configuration:{
                    type:'text'
                },
                value: '',
                label: 'Speed'
            },
            strength:
            {
                type:'input',
                configuration:{
                    type:'text'
                },
                value: '',
                label: 'Strength'
            },
            dexterity:
            {
                type:'input',
                configuration:{
                    type:'text'
                },
                value: '',
                label: 'Dexterity'
            },
            consitution:
            {
                type:'input',
                configuration:{
                    type:'text'
                },
                value: '',
                label: 'Consitution'
            },
            intelligence:
            {
                type:'input',
                configuration:{
                    type:'text'
                },
                value: '',
                label: 'Intelligence'
            },
            wisdom:
            {
                type:'input',
                configuration:{
                    type:'text'
                },
                value: '',
                label: 'Wisdom'
            },
            charisma:
            {
                type:'input',
                configuration:{
                    type:'text'
                },
                value: '',
                label: 'Charisma'
            }
        }
    }

    createPlayer = (event) =>{
        const form = {...this.state.creatPlayerForm}
        const player = {}
        for( let i in form){
            player[i] = form[i].value
            
        }

        this.props.createPlayer( player )
    }

    handleChange = (event, element) =>{
        console.log(event.target.value)
        const form = {...this.state.creatPlayerForm}
        const formElement = form[element]
        formElement.value = event.target.value
        form[element] = formElement
        
        this.setState({createPlayerForm: form})

    }
    
    render()
    {
        const formElements = []
        const playerForm = { ...this.state.creatPlayerForm }

        for( let element in playerForm )
        {
            formElements.push( <Input label={playerForm[element].label} 
                                      type={playerForm[element].type} 
                                      configuration={playerForm[element].configuration}
                                      changed={(event) => this.handleChange(event, element)}
                                      class="form-control"
                                />)
        }

        const showHideModal = [
            'modal',
            this.props.show ? 'CreatePlayerOpen' : 'CreatePlayerClose',
        ]
        
        return(
            <div className={showHideModal.join( ' ' )} tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Create Player</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={this.props.closed}>
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form onSubmit={(event) => this.createPlayer(event)}>
                            <div class="modal-body">
                                    <div className="form-group" style={{overflow: 'scroll', height:'500px'}}>
                                        {formElements.map(element =>( element))}
                                    </div>
                                    
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary">Save Player</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

export default connect( null, { createPlayer})(CreatePlayer);