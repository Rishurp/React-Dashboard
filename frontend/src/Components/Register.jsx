import { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  CircularProgress,
  Box,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { config } from "../App";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(formData);
      let response = await axios.post(`${config.backendEndpoint}/auth/register`, formData);
      console.log(response);
      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      maxWidth="sm"
      className="p-4 shadow-lg rounded-lg mt-10 bg-white"
    >
      <Typography variant="h4" className="mb-4 text-center">
        Register
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="username"
          fullWidth
          margin="normal"
          value={formData.username}
          onChange={handleChange}
        />
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

        <FormControl fullWidth margin="normal">
          <InputLabel id="roleId">Role</InputLabel>
          <Select
            labelId="roleId"
            id="demo-simple-select"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="user">User</MenuItem>
          </Select>
        </FormControl>

        <Box sx={{ position: "relative" }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
            className="mt-4"
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Register"}
          </Button>
        </Box>
        <Button
          onClick={() => navigate("/login")}
          variant="text"
          color="secondary"
          fullWidth
          className="mt-2"
        >
          Already have an account? Login
        </Button> 
      </form>
    </Container>
  );
};

export default Register;
