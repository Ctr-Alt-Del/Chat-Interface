import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./messages"

const data = [
    {}
]

const newdata = data.map((data) => {
    return (
        <div className="message">
            <div className="messageText">{data.text}</div>
        </div>
    )
})

const user = [
    {
        senderId: 'Someone\'s name'
    }
]

class CreateMessage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
        this.onChangetext = this.onChangetext.bind(this)
    }
    onChangetext(e) {
        this.setState({ text: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();

        const text = {
            text: this.state.text
        }
    }
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
                {user.map((user) => {
                    return (
                        <div class="container">
                            <div class="row">
                                <div className="status">
                                    <div class="col-sm-6">
                                        <div class="name">
                                            <div class="row inline">
                                                <div className="userName">{user.senderId}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <Link to="/">
                                            <i className="back" class="fas fa-times"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="message-list">
                    {newdata}
                </div>
                <div class="container">
                    <form onSubmit={this.handleSubmit}>
                        <div class="row">
                            <div class="reply">
                                <div class="inputs">
                                    <input class="inputStyle" type="text" placeholder="Type a message" value={this.state.text} onChange={this.onChangetext}></input>
                                </div>
                                <div>
                                    <button className="send">
                                        <i className="sender" class="fas fa-arrow-alt-circle-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateMessage