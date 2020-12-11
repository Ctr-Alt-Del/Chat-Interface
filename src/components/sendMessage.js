import React from 'react'

function send(){
    alert("Message Sent")
}

class sendMessage extends React.Component{
    render(){
        return(
            // <div class="container">
            //     <div class="row">
            //         <form class="SendForm">
            //             <input type="text" placeholder="Type a message"></input>
            //             <button onClick={send} type="submit">
            //                 <i className="sender" class="fas fa-arrow-alt-circle-right"></i>
            //             </button>
            //         </form>
            //     </div>
            // </div>
            
                <div class="row">
                    <div class="reply">
                    <div>
                        <input type="text" placeholder="Type a message"></input>
                    </div>
                    <div>
                        <button className="send" onClick={send}>
                            <i className="sender" class="fas fa-arrow-alt-circle-right"></i>
                        </button>
                    </div>
                </div>
                </div>
        )
    }
}

export default sendMessage
                                                                                                