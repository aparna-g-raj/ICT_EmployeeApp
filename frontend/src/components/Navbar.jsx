import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Home, PersonAdd } from "@mui/icons-material";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#6a0dad' }}> {/* Violet color */}
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          EmployeeApp
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
            <Home />
          </Button>
          <Button color="inherit" component={Link} to="/add">
            <PersonAdd />
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
