import {useState} from 'react-redux';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const authObj = { 'Project-ID': "f0f041e0-40ae-4ba6-8432-c0e55a99b6c4", 
                          'User-Name': username,
                          'User-Secret': password  }
        try{
            axios.get('http://api.chat_engine.io/chats', {headers: authObj});

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        }catch(error) {

        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className='title'>Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e,target.value)}
                    className="input" placeholder="Username" required />
                    <input type="text" value={password} onChange={(e) => setPassword(e,target.value)}
                    className="input" placeholder="Password" required />
                    <div align="center">
                        <buuton type="submit" className="button"></buuton>
                            <span>Start Chating</span>
                    </div>
                </form>
            </div>
        </div>
    )
}