import React from 'react';
import styles from './ChatbotAI.module.css';

const ChatbotAI = () => {
    return (
        <div className={styles.chatbotContainer}>
            <img
                src="/logowtsp.png"
                alt="Chatbot"
                className={styles.chatbotImage}
            />
        </div>
    );
};

export default ChatbotAI;
