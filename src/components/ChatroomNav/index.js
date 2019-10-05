import React from 'react';
import Styles from './index.module.css';
const ChatroomNav = () => {
    return (
        <div className={Styles.container}>
            <img src="/images/logo.png" alt="logo" />
            <ul>
                <li>My Classroom</li>
                <li>Browse Tutors</li>
                <li>Browse Students</li>
                <li>How It Works</li>
                <li><img alt="search"/></li>
            </ul>
            <div className={Styles.profile}>
                <p>email@email.email</p>
                <img src='' alt="anonymous" />
            </div>
        </div>
    )
}
export default ChatroomNav;