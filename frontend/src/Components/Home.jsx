import Navbar from "./Navbar";
import ChartSection from "./ChartSection";
import UserTable from "./UserTable";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Container, Box, Grid2 } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { config } from "../App";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useLocalStorage("userId", null);
  const [username, setUsername] = useLocalStorage("username", "Guest");
  const [token, setToken] = useLocalStorage("token", null);


  const handleLogout = () => {
    setUserId(null);
    setUsername("Guest");
    setToken(null);
    localStorage.clear();
    window.location.reload();
  };


  useEffect(() => {
    const fetchData = async () => {
       
      try {
        const response = await axios.get(`${config.backendEndpoint}/users`, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        console.log(response.data); 
        setUsers(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <Container maxWidth="lg">
        <Navbar username={username} onLogout={handleLogout} />
        <Box my={4}>
          <Grid2 container spacing={4}>
            <Grid2 item xs={12} sm={6}>
              <Box
                sx={{
                  textAlign: "center",
                  padding: 2,
                  width: "100%",
                  height: "100%",
                }}
              >
                <ChartSection users={users} />
              </Box>
            </Grid2>
          </Grid2>
        </Box>
        <Box my={4}>
          <UserTable users={users} />
        </Box>
      </Container>
    </div>
  );
};

export default Home;
