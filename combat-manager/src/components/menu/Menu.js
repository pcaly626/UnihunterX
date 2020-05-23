import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import "./Menu.css";
import Backdrop from '../Modal/Backdrop';
import QuickEncounter from '../Modal/QuickEncounter';
import CreatePlayer from '../Modal/CreatePlayer';
import logo from "../../resources/images/logo-combat-manager.jpg";
import { getPlayers } from '../../actions/quick_ecounter_actions';
class Menu extends Component
{
    state = {
        modalIsOpen: false,
        playerModalIsOpen: false,
    }

    componentDidMount() {
        this.props.getPlayers()
    }

    toggleQuickEncounter = () => {
        let updateModal = !this.state.modalIsOpen;
        this.setState({modalIsOpen: updateModal})
    }

    toggleCreatePlayer = () => {
        let updateModal = !this.state.playerModalIsOpen;
        this.setState({playerModalIsOpen: updateModal})
    }


    render()
    {
        
        return(
            <Fragment>
            <div>
                <div className="Menu row">
                    <div className="col-lg-4">
                        <div className="card">                
                            <img src={logo}/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <button className="MenuButton" onClick={this.toggleQuickEncounter}>
                                <h1>Quick Combat</h1>
                            </button>                           
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <div className="card">    
                                    <button className="MenuButton">
                                        <h1>Create Enemy</h1>
                                        </button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="card">   
                                    <button className="MenuButton" onClick={this.toggleCreatePlayer}>
                                        <h1>Create Character</h1>
                                        </button>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="container">
                            <div className="card">
                                <div className="card-header">
                                    <h1>Campaigns</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="container">
                            <div className="card">
                                <div className="card-header">
                                    <h1>Encounters</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="container">
                            <div className="card">
                                <div className="card-header">
                                    <h1>Players <i onClick={this.toggleCreatePlayer} className="fas fa-plus"></i></h1>
                                    {this.props.players.map( player =>(
                                       <div className='card'><h1>{player.name}</h1></div> 
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <QuickEncounter show={ this.state.modalIsOpen } closed={ this.toggleQuickEncounter }/>
            <CreatePlayer show={ this.state.playerModalIsOpen } closed={this.toggleCreatePlayer}/>
            <Backdrop show={ this.state.modalIsOpen }/>
            <Backdrop show={ this.state.playerModalIsOpen }/>
            </Fragment>
        );
    }
}

const mapPropsToState = (state) =>({
    players: state.quickEncounterReducer.players
})

export default connect( mapPropsToState, { getPlayers })(Menu);