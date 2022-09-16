import React, { Component } from "react";

class Button extends Component {
    state = {
        isOn: true,
    };

    render() {
        return (
            <div className="toggle-button">
                <button
                    className={this.state.isOn ? "btn btn-on" : "btn btn-off"}
                    onClick={() => this.setState({ isOn: !this.state.isOn })}
                >
                    {this.state.isOn ? "On" : "Off"}
                </button>
            </div>
        );
    }
}

export default Button;
