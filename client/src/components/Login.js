import React, {useState} from "react";
import axios from 'axios';



const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  // State 
  const [user, setUser] = useState({
    username:'Lambda School',
    password: 'i<3Lambd4'
  });


  const handleChange = (event) => {
    setUser({...user, [event.target.name]:event.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/api/login', user)
    .then(res =>{
      console.log('Logged in successfully:', res.data.payload);
      localStorage.setItem('token', res.data.payload);
      props.history.push('/bubbles');
    })
    .catch(error => {
      console.log("Error could not log you in");
    })
  }

  return (
    <form style={{ margin: 'auto'}} className="loginForm">
      <card name="login">
        <div>
          <h2>Username</h2>
          <input type="text" name="username" value={user.username} onChange={handleChange} />
        </div>
        <div className="inputContainer">
          <h2>Password</h2>
          <input type="password" name="password" value={user.password} onChange={handleChange} />
        </div>
        <button htmlType="submit" onClick={handleSubmit}>Log in</button>
      </card>
    </form>
  );
};

export default Login;
