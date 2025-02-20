import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography } from "@mui/material";

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    
    if (storedUser && storedUser.username === credentials.username && storedUser.password === credentials.password) {
      alert("Login Successful!");
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" gutterBottom>Login</Typography>
      <TextField label="Username" fullWidth margin="normal" onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
      <TextField label="Password" type="password" fullWidth margin="normal" onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
      <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>Login</Button>
    </Container>
  );
};

export default Login;
