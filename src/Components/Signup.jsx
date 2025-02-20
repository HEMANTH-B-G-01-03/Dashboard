import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography } from "@mui/material";

const Signup = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleSignup = () => {
    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup Successful! Please login.");
    navigate("/login");
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" gutterBottom>Signup</Typography>
      <TextField label="Username" fullWidth margin="normal" onChange={(e) => setUser({ ...user, username: e.target.value })} />
      <TextField label="Password" type="password" fullWidth margin="normal" onChange={(e) => setUser({ ...user, password: e.target.value })} />
      <Button variant="contained" color="primary" fullWidth onClick={handleSignup}>Sign Up</Button>
    </Container>
  );
};

export default Signup;
