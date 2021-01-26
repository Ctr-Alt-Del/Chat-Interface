import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';

class Messages extends Component {
  state = {
    isLoading: true,
    users: [],
    text: '',
    senderId: '',
    description: '',
    sender: '',
    errors: null,
  };

  // changeUser = () => {
  //   this.setState({ sender: "user2" })
  //   const check = this.state.sender
  //   console.log(check)
  // }

  changeUser1 = () => {
    this.setState({ sender: "user1" })
    const check = this.state.sender
    console.log(check)
  }
  
  changeUser2 = () => {
    this.setState({ sender: "user2" })
    const check = this.state.sender
    console.log(check)
  }
  
  checking = () => {
    const check = this.state.sender
    console.log(check)
  }

  onChangetext = (e) => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = e => {
    e.preventDefault();
    const payload = {
      text: this.state.text
    }
    const check = this.state.sender

    axios.post('http://localhost:3000/' + this.state.sender, payload)
      .then((res) => {
        console.log(res)
        console.log(payload)
        console.log(check)
      })
  }

  fetchUsers() {
    fetch(`http://localhost:3000/` + this.state.sender)
      .then(response => response.json())
      .then(data =>
        this.setState({
          users: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchUsers();
    this.changeUser2()
  }

  componentWillMount(){
    // this.changeUser1();
    // this.changeUser2();
  }
  
  render() {
    const { isLoading, users, error } = this.state;
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/newMessage">
              <NewMessage />
            </Route>
            {/* <Route path="/createMessage">
              <CreateMessage />
            </Route> */}
            <Route path="/conversation">
              <React.Fragment>
                <div class="container mess">
                  <div class="row">
                    <div class="status">
                      <div class="col-sm-9">
                        <div class="name">
                          <div class="row">
                          {error ? <p>{error.message}</p> : null}
                    {!isLoading ? (
                      users.map(user => {
                        const { senderId, description } = user;
                        return (
                          <div>
                      <p><div className="userName">{senderId}</div></p>
                      <p><div className="description">{description}</div></p>
                      </div>
                        );
                      })
                    ) : (
                        <h3>Loading...</h3>
                      )}
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <Link to="/">
                          <i className="back" class="fas fa-times"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="messagelist">
                    {error ? <p>{error.message}</p> : null}
                    {!isLoading ? (
                      users.map(user => {
                        const { text } = user;
                        return (
                          <div className="message">
                            <div className="messageText">{text}</div>
                          </div>
                        );
                      })
                    ) : (
                        <h3>Loading...</h3>
                      )}
                  </div>
                  <form onSubmit={this.handleSubmit}>
                    <div class="row">
                      <div class="reply">
                        <div class="inputs">
                          <input class="inputStyle" type="text" placeholder="Type a message" name='text' value={this.state.text} onChange={this.onChangetext} required></input>
                        </div>
                        <div>
                          <button type='submit'onClick={this.checking}>
                            <i className="sender" class="fas fa-arrow-alt-circle-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </React.Fragment>
            </Route>
            <Route path="/">
              <div class="container margin">
                <div class="row">
                  <div class="titleBorder">
                    <div class="col-8"><h2 class="title">Your Messages</h2></div>
                    <div class="col-2"><Link to="/newMessage"><i class="fa fa-plus-circle"></i></Link></div>
                  </div>
                </div>
                <div class="row">
                  <Link to="/conversation">
                    <button class="unread" onClick={this.changeUser1} value={"user1"}>
                      <h2 class="unreadName">Random Guy 1</h2>
                      <h2 class="unreadStatus">unread</h2>
                    </button>
                  </Link>
                </div>
                <br />
                <Link to="/conversation">
                <div class="row">
                  <button class="read" onClick={this.changeUser2} value={"user2"}>
                    <h2 class="readName">Random Guy 2</h2>
                  </button>
                </div>
                </Link>
                <br />
                <div class="row">
                  <button class="read">
                    <h2 class="readName">Random Guy 3</h2>
                  </button>
                </div>
                <br />
                <div class="row">
                  <button class="read">
                    <h2 class="readName">Random Guy 4</h2>
                  </button>
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

function NewMessage() {
  return <div class="main">
    <div class="head">
      <h1 className="LC">Send message to</h1>
      <Link to="/"><i className="back" class="fas fa-times"></i></Link>
    </div>
    <h2 class="title2">Life Choices Staff</h2>
    <input type="radio" id="LC-Staff" value="LC-Staff" />
    <label for="LC-Staff">All Life Choices Staff</label>
    <br />
    <input type="radio" id="Staff-Member-Name" value="Staff-Member-Name" />
    <label for="Staff-Member-Name">Staff Member One</label>
    <br />
    <input type="radio" id="Staff-Member-Name" value="Staff-Member-Name" />
    <label for="Staff-Member-Name">Staff Member Two</label>
    <br />
    <h2 class="title2">LC Studio Staff</h2>
    <input type="radio" id="All LC-Studio-Staff" value="LC-Studio-Staff" />
    <label for="LC-Staff">All LC Studio Staff</label>
    <br />
    <input type="radio" id="Staff-Member-Name" value="Staff-Member-Name" />
    <label for="Staff-Member-Name">Staff Member One</label>
    <br />
    <input type="radio" id="Staff-Member-Name" value="Staff-Member-Name" />
    <label for="Staff-Member-Name">Staff Member Two</label>
    <br />
    <h2 class="title2">Students</h2>
    <input type="radio" id="All Students" value="All-Students" />
    <label for="LC-Staff">All Students</label>
    <br />
    <input type="radio" id="Student-Name" value="Staff-Member-Name" />
    <label for="Student-Name">Student One</label>
    <br />
    <input type="radio" id="Student-Name" value="Staff-Member-Name" />
    <label for="Student-Name">Student two</label>
    <br />
    <Link to="/createMessage">
      <button type="submit" class="createMessage" value="create message">Send</button>
    </Link>
    <br />
    <br />

  </div>
}

export default Messages;