import "./Navigation.css";
import { useState } from "react";
import {
  AppBar,
  Container,
  Typography,
  Box,
  Menu,
  IconButton,
} from "@mui/material";

function Navigation() {
  const [collapseMenu, setCollapseMenu] = useState(true);
  const backgroundColor = "rgba(255, 0, 255, .75)";
  const linkColor = "cyan";

  function handleCollapseMenu() {
    setCollapseMenu(!collapseMenu);
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0,
        position: "sticky",
        zIndex: 1,
        backgroundColor: { backgroundColor },
        paddingTop: ".5em",
        paddingBottom: ".5em",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          flexGrow: 1,
          alignItems: "center",
        }}
      >
        <img className="logo" src={process.env.PUBLIC_URL + "/favicon.ico"} />
        <Typography
          variant="h5"
          component="a"
          href="/"
          sx={{
            paddingLeft: ".3em",
            mr: 2,
            width: "7em",
            display: { md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".1rem",
            lineHeight: ".9em",
            color: "black",
            textDecoration: "none",
          }}
          style={{ flexGrow: 1 }}
        >
          Intuitive Harmony
        </Typography>
        <Box
          sx={{
            flexGrow: 0,
            display: { xs: "flex", md: "none" },
            // justifyContent: "flex-end",
            alignItems: "center",
            alignSelf: "flex-end",
            margin: 0,
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            // onClick={handleOpenNavMenu}
            sx={{
              color: linkColor,
              padding: 0,
              alignItems: "center",
            }}
          >
            {collapseMenu ? (
              // hamburger menu
              <i
                className="fa-solid fa-bars menu-icon"
                onClick={() => handleCollapseMenu()}
              ></i>
            ) : (
              // close menu X
              <i
                className="fa-solid fa-x"
                onClick={() => handleCollapseMenu()}
              ></i>
            )}
          </IconButton>
        </Box>
      </Container>
    </AppBar>
  );
}

export default Navigation;
