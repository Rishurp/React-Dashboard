import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";

const Navbar = ({ onLogout, username }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const menuItems = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "Users", icon: <PeopleIcon /> },
    { text: "Reports", icon: <BarChartIcon /> },
  ];

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}>
            {menuItems.map((item, index) => (
              <Typography
                key={index}
                variant="button"
                sx={{ ml: 3, cursor: "pointer", color: "white" }}
              >
                {item.text}
              </Typography>
            ))}
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              ml: 5, 
            }}
          >
            <Typography
              variant="body1"
              sx={{ marginRight: 2, fontWeight: "medium", color: "white" }}
            >
              {username}
            </Typography>
            <Button
              variant="contained"
              color="error"
              onClick={onLogout}
              sx={{ textTransform: "none" }}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          {menuItems.map((item, index) => (
            <ListItem button key={index} sx={{ marginBottom: 2 }}>
              {item.icon}
              <ListItemText primary={item.text} sx={{ ml: 2 }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
