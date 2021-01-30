import React from 'react'
import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed.jsx';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />

    return (
        <div>
            <ChatEngine
                height='100vh'
                projectID='3b7d08b6-a038-44eb-8248-613437e51dc2'
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            />
        </div>
    )
};

export default App;
