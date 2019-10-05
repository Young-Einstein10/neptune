import React from 'react';
import Styles from './index.module.css';
const ChatInput = () => {
    return (
        <div className={Styles.container}>
            <input type="text" name="message"/>
            <button>Send</button>
        </div>
    )
}
export default ChatInput;