import React from 'react';

import "./UserCard.css";

const UserCard = ({user}) => {
    return ( 
        <div className='user-card'>
            <img src={user.picture.large} alt='' />
            <div>
                <h3>{user.name.first} {user.name.last}</h3>
                <p>{user.email}</p>
                <p>{user.cell}</p>
                <p>{user.location.city}</p>
            </div>
        </div>
     );
}
 
export default UserCard;