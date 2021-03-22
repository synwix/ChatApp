import { ChatEngine} from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = ()=>{
    if (!localStorage.getItem('username')) return <LoginForm />;//returns the login form if the user is not logged in
    return(
        <ChatEngine
            height="100vh"
            projectID="7df89420-54a1-49b3-99eb-911212e6e6e7" //project ID from the backend, chatengine
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=> <ChatFeed {... chatAppProps} />} //to modify the chat feed that the backend service chatengine provided readily
        />
    );
}

export default App;