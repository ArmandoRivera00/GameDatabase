import React, { useState } from "react";
import LoginForm from "./Components/LoginForm";
import FetchAPI from "./Components/API/Fetch-API"

function App() {
  const  adminUser = {
    email: "admin@admin.com",
    password: "123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    } 
  }

  const Logout = () => {
    setUser({name: "", email: ""});
  }
  
  return (
    <div className="App">
      {(user.email !="")? (
        <div className="welcome">
          <h2>Armando's Game database!</h2>
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
          <h2>powered by Cheapshark</h2>
          </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      ) }
    </div>
  );
}

export default App;
