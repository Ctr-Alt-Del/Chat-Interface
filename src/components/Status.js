import React from 'react'

const user = [
    {
        senderId: 'Someone\'s name',
        description: 'LC Studio, RPA team Lead'
    }
]

class UserStatus extends React.Component{
    render(){
        return(
            <div>
                {user.map((user) => {
                    return(
                        <div class="name">
                            <div className="userName">{user.senderId}</div>
                            <div className="description">{user.description}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default UserStatus
