import { useState } from 'react';

export default function SignUpForm({token, setToken}) {

    const [username, setUserName] = useState ("");
    const [password, setPassword] = useState ("");
    const [error, setError] = useState (null);

    async function handleSubmit(event) {
        event.preventDefault();
        //console.log("Hello");

        try{
            const response = await fetch(" ",{
                method:"POST",
                body:JSON.stringify ({username},{password})
            })
            const result = await response.json();
            console.log(result);
            setToken(result.token);

        } catch (error){
            setError(error.message);
        }
    }

    return (
    <>
    <h2>Create New Account</h2>
    {error && <p>{error}</p>}
    <form onSubmit={handleSubmit}>
        <label>
            Username: {" "}
            <input type="username"
            value={username} 
            onChange={(e) => setUserName(e.target.value)}/>
        </label>
        <br/>
        <br/>
        <label>
            Password: {" "}
            <input type="password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <br/>
        <br/>
        <button>Submit</button>
    </form>
    </>
    );
  }