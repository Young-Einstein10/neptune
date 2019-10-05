import React from 'react';
import ChatroomNav from '../ChatroomNav';
import Styles from './index.module.css';
import InfoArea from '../InfoArea';
import ChatArea from '../ChatArea';
const Chatroom = () => {
    return (
        <div className={Styles.container}>
           <ChatroomNav />
           <div className={Styles.chat}>
                <InfoArea />
                <ChatArea />
           </div>
        </div>
    )
}
export default Chatroom;