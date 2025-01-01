import Navbar from "./Components/Navbar";
import ChartSection from "./Components/ChartSection";
import UserTable from "./Components/UserTable";
import { Container, Box, Grid2 } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    };
    fetchUsers();
  }, []);


  return (
    <Container maxWidth="lg">
      <Navbar />
      <Box my={4}>
        <Grid2 container spacing={4}>
          <Grid2 item xs={12} sm={6}>
            <Box sx={{ textAlign: "center", padding: 2, width: "100%", height : "100%"}}>
              <ChartSection users={users} />
            </Box>
          </Grid2>
          {/* <Grid2 item xs={12} sm={6}>
            <Box sx={{ textAlign: "center", padding: 2 }}>
              <h2>Additional Analytics</h2>
            </Box>
          </Grid2> */}
        </Grid2>
      </Box>
      <Box my={4}>
        <UserTable users={users} />
      </Box>
    </Container>
  );
}

export default App;
