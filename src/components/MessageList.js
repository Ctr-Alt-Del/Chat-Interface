import React from 'react'

// This is dummy text created to be displayed on the message-list div for demo purposes
// It is used to show the layout, design and display the scroll effect
const DUMMY_DATA = [
    {
        text: 'Hey, how is it going?'
    },
    {
        text: 'Hey, how is it going?'
    },
    {
        text: 'Hey, how is it going?'
    },
    {
        text: 'Hey, how is it going?'
    },
    {
        text: 'Hey, how is it going?'
    },
    {
        text: 'Hey, how is it going?'
    },
    {
        text: 'Hey, how is it going?'
    },
    {
        text: 'Hey, how is it going?'
    },
    {
        text: 'Hey, how is it going?'
    },
    {
        text: 'Hey, how is it going?'
    },
    {
        text: 'Hey, how is it going?'
    },
    {
        text: 'Hey, how is it going?'
    },
    {
        text: 'Hey, how is it going?'
    },
    {
        text: 'Hey, how is it going?'
    },
    {
        text: 'Hey, how is it going?'
    },
    {
        text: 'Hey, how is it going?'
    },
    {
        text: 'Hey, how is it going?'
    },
    {
        text: 'Hey, how is it going?'
    },
    {
        text: 'Hey, how is it going?'
    },
    {
        text: 'Hey, how is it going?'
    },
    {
        text: 'Hey, how is it going?'
    },
    {
        text: 'Hey, how is it going?'
    },
    {
        text: 'Hey, how is it going?'
    },
    {
        text: 'Hey, how is it going?'
    },
    {
        text: 'Hey, how is it going?'
    },
    {
        text: 'Hey, how is it going?'
    },
    {
        text: 'Hey, how is it going?'
    }
]

class MessageList extends React.Component {
    render() {
        return (
            <div>
                {DUMMY_DATA.map((message, index) => {
                    return (
                        <div key={index} className="message">
                            <div className="messageText">{message.text}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default MessageList