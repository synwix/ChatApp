import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const authObject = { 'Project-ID': "7df89420-54a1-49b3-99eb-911212e6e6e7", 'User-Name': username, 'User-Secret': password };
        // username | password => chatengine backend -> give messages
        // works out -> logged in
        // error -> try with new username

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
      
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
      
            window.location.reload();
            setError('');
        }catch (err){
            setError('Oops, incorrect credentials.');
        }
    }

    return (
        <div className="wrapper">
          <div className="form">
            <h1 className="title">ChatApp</h1>
            <form onSubmit={handleSubmit}>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
              <div align="center">
                <button type="submit" className="button">
                  <span>Start chatting</span>
                </button>
              </div>
            </form>
            <h1>{error}</h1>
          </div>
        </div>
    
      );
}
export default LoginForm;