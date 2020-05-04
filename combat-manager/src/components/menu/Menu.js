import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import "./Menu.css";
import Backdrop from '../Modal/Backdrop';
import QuickEncounter from '../Modal/QuickEncounter';
import logo from "../../resources/images/logo-combat-manager.jpg";

class Menu extends Component
{
    state = {
        modalIsOpen: false
    }

    toggleQuickEncounter = () => {
        let updateModal = !this.state.modalIsOpen;
        this.setState({modalIsOpen: updateModal})
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
                                    <button className="MenuButton">
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
                                    <h1>Players <i className="fas fa-plus"></i></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <QuickEncounter show={ this.state.modalIsOpen } closed={ this.toggleQuickEncounter }/>
            <Backdrop show={ this.state.modalIsOpen }/>
            </Fragment>
        );
    }
}

export default Menu;