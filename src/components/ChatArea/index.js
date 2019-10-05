import React from 'react';
import Styles from './index.module.css';
import ChatInput from '../elements/ChatInput';
import Message from '../elements/Messages';
const ChatArea = () => {
    return (
        <div className={Styles.ChatArea}>
            <div className={Styles.mainChat}>
                <div className={Styles.conversation}>
                    <Message>
                        Hello
                    </Message>
                    <Message recieved>
                            Let’s jump into Rust by working through a hands-on project together! This chapter introduces you to a few common Rust concepts by showing you how to use them in a real program. You’ll learn about let, match, methods, associated functions, using external crates, and more! The following chapters will explore these ideas in more detail. In this chapter, you’ll practice the fundamentals.

                            We’ll implement a classic beginner programming problem: a guessing game. Here’s how it works: the program will generate a random integer between 1 and 100. It will then prompt the player to enter a guess. After a guess is entered, the program will indicate whether the guess is too low or too high. If the guess is correct, the game will print a congratulatory message and exit.
                    </Message>
                    <Message recieved>
                    We’ll implement a classic beginner programming problem: a guessing game. Here’s how it works: the program will generate a random integer between 1 and 100. It will then prompt the player to enter a guess. After a guess is entered, the program will indicate whether the guess is too low or too high. If the guess is correct, the game will print a congratulatory message and exit.
                    </Message>
                    <Message>
                        Thanks a lot. What about the differential equation?
                    </Message>
                    <Message recieved>
                            Let’s jump into Rust by working through a hands-on project together! This chapter introduces you to a few common Rust concepts by showing you how to use them in a real program. You’ll learn about let, match, methods, associated functions, using external crates, and more! The following chapters will explore these ideas in more detail. In this chapter, you’ll practice the fundamentals.

                            We’ll implement a classic beginner programming problem: a guessing game. Here’s how it works: the program will generate a random integer between 1 and 100. It will then prompt the player to enter a guess. After a guess is entered, the program will indicate whether the guess is too low or too high. If the guess is correct, the game will print a congratulatory message and exit.
                    </Message>
                    <Message recieved>
                    We’ll implement a classic beginner programming problem: a guessing game. Here’s how it works: the program will generate a random integer between 1 and 100. It will then prompt the player to enter a guess. After a guess is entered, the program will indicate whether the guess is too low or too high. If the guess is correct, the game will print a congratulatory message and exit.
                    </Message>
                    <Message>
                        Thanks a lot. What about the differential equation?
                    </Message>
                </div>
            </div>
            <div className={Styles.chatInput}>
                <ChatInput />
            </div>
        </div>
    )
}
export default ChatArea;