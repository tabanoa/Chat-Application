import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
      height="100vh"
      projectID="f0f041e0-40ae-4ba6-8432-c0e55a99b6c4"
      userName="manjot123"
      userSecret="manjot123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
