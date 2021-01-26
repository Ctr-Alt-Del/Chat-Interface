import React, { Component } from 'react';
import axios from 'axios'



class Something extends Component {
    state = {
        isLoading: true,
        mesgs: [],
        text: '',
        senderId: 'Random Guy 1',
        description: 'LC Studio, RPA team Lead'
    };

    
    onChangetext = (e) => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault();
        const payload = {
            text: this.state.text
        }

        axios.post('http://localhost:3000/posts', payload)
            .then((res) => {
                console.log(res)
                console.log("suck")
            })
    }

    fetchUsers() {
        fetch(`http://localhost:3000/posts`)
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
    }
    render() {
        const { isLoading, users, error } = this.state;
        return (
            <React.Fragment>
                <div class="container mess">
                    <div class="row">
                        <div className="status">
                            <div class="col-sm-9">
                                <div class="name">
                                    <div class="row">
                                        <p><div className="userName">{this.state.senderId}</div></p>
                                        <p><div className="description">{this.state.description}</div></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <i className="back" class="fas fa-times"></i>
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
                                    <input class="inputStyle" type="text" placeholder="Type a message" name='text' value={this.state.text} onChange={this.onChangetext}></input>
                                </div>
                                <div>
                                    <button type='submit' className="send">
                                        <i className="sender" class="fas fa-arrow-alt-circle-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}
//     constructor() {
//         super()
//         this.state = {
//              text: "",
//              isLoading:true,
//              mesgs:[], 
//     }
//     }
//     onChangetext = (e) => this.setState({ [e.target.name]: e.target.value })


//     handleSubmit = e => {
//         e.preventDefault();
//         axios.post('http://localhost:3000/posts', this.state)
//             .then((res) => {
//                 console.log(res)
//                 console.log("suck")
//             })
//     }

//     fetchUsers() {       
//         fetch(`https://jsonplaceholder.typicode.com/users`).then(res => res.json())
//         // console.log(res.json)
//         .then((data =>
//             this.setState({
//                 users: data,
//                 isLoading: false,

//             }) 

//         ))
//     }

//     render() {
//         const { isLoading, users } = this.state;
//         return (
//             <div class="container mess">
//                 <div className="message-list">
//                     {/* {data.text} */}
//                     <p>hello ****</p>
//                     {/* {mesgs.map(mesg => {
//                         const { text } = mesg;
//                         return (
//                             <div key={id}>
//                                 <p>{text}</p>
//                             </div>
//                         )
//                     )}
//                     } */} 
//                      {!isLoading ? (
//           users.map(user => {
//             const { username, email } =user;
//             return (
//               <div key={username}>                
//                 <p>{email}</p>
//                 <hr />
//               </div>
//             );
//           })
//         ) : (
//           <h3>Loading...</h3>
//         )}
//                 </div>
//                 <form onSubmit={this.handleSubmit}>
//                     <div class="row">
//                         <div class="reply">
//                             <div class="inputs">
//                                 <input class="inputStyle" type="text" placeholder="Type a message" name='text' value={this.state.text} onChange={this.onChangetext}></input>
//                             </div>
//                             <div>
//                                 <button type='submit' className="send">
//                                     <i className="sender" class="fas fa-arrow-alt-circle-right"></i>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }

export default Something