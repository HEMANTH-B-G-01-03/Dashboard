import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 250 }}>
          <ListItem button onClick={() => handleNavigation("/dashboard/about")}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation("/dashboard/contact")}>
            <ListItemText primary="Contact" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation("/dashboard/shop")}>
            <ListItemText primary="Shop Now" />
          </ListItem>
          <ListItem button onClick={() => { localStorage.removeItem("user"); navigate("/"); }}>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
