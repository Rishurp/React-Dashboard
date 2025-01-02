import { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { config } from "../App";
import { useSnackbar } from "notistack";
import { useLocalStorage } from "@uidotdev/usehooks";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [userId, setUserId] = useLocalStorage("userId", null);
  const [token, setToken] = useLocalStorage("token", null);
  const [username, setUsername] = useLocalStorage("username", null);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(
        `${config.backendEndpoint}/auth/login`,
        formData
      );
      console.log("API Response:", res);

      if (res.status === 200) {
        console.log("Login successful. Navigating...");
        setUserId(res.data.response._id);
        setToken(res.data.token);
        setUsername(res.data.response.name);
        enqueueSnackbar("Login Successfully.");
        navigate("/");
      }
    } catch (error) {
      console.error("Login failed:", error);
      enqueueSnackbar("Wrong Credentials.");
    }
  };

  return (
    <Container
      maxWidth="sm"
      className="p-4 shadow-lg rounded-lg mt-10 bg-white"
    >
      <Typography variant="h4" className="mb-4 text-center">
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          margin="normal"
          value={formData.password}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className="mt-4"
        >
          Login
        </Button>
        <Button
          onClick={() => navigate("/register")}
          variant="text"
          color="secondary"
          fullWidth
          className="mt-2"
        >
          Don’t have an account? Register
        </Button>
      </form>
    </Container>
  );
}

export default Login;