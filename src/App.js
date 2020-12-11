import React from 'react'
import MessageList from './components/MessageList'
import SendMessage from './components/sendMessage'
import Header from './components/Header'
import UserStatus from './components/Status'
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <div className="header"> 
                    <div class="row">
                        <Header/>
                    </div>
                </div>
                <div className="status">
                    <div class="row">
                        <UserStatus/>
                    </div>    
                </div>
                <div className="message-list">
                    <div class="row">
                        <MessageList />
                    </div>
                </div>
                <div className="reply">
                    <div class="row">
                        <SendMessage />
                    </div>
                </div>        
            </div>
        );
    }
}

export default App