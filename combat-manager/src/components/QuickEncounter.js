import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMonstersByRating, getPlayers } from '../actions/quick_ecounter_actions';
import "./QuickEncounter.css";

class QuickEncounter extends Component{
        
    componentDidMount(){
        this.props.getPlayers()
        this.props.getMonstersByRating()
    }

    render(){
        const player = this.props.location.state.player
        const monster = this.props.location.state.monster
        
        return(
            <div>
                <div className="encounter-queue">
                    <ul>
                        <li>{player.name}</li>
                        <li>{monster.name}</li>
                    </ul>
                </div>
                <div className=""></div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    monsters: state.quickEncounterReducer.monsters,
    players: state.quickEncounterReducer.players,
})

export default connect(mapStateToProps, { getMonstersByRating, getPlayers })(QuickEncounter);