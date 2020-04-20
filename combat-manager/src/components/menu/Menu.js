import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Menu.css";


class Menu extends Component
{
    render()
    {
        return(
            <div className="container">
                <div style={{marginTop: "15%"}}>
                    <div className="card" style={{margin: '10px'}}>
                    <Link to="/quick_encounter/" className="btn">Quick Encounter
                    </Link>
                    </div>
                    <div className="card" style={{margin: '10px'}}>
                        <button className="btn">Create Campaign</button>
                    </div>
                    <div className="card" style={{margin: '10px'}}>
                        <button className="btn">Create Encounter</button>
                    </div>
                    <div className="card" style={{margin: '10px'}}>
                        <button className="btn">Create Player</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;