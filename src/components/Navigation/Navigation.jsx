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
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        <img className="logo" src={process.env.PUBLIC_URL + "/favicon.ico"} />
        <Typography
          variant="h4"
          noWrap
          component="a"
          href="/Portfolio-2023"
          sx={{
            paddingLeft: ".3em",
            mr: 2,
            display: { md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".1rem",
            color: "black",
            textDecoration: "none",
          }}
        >
          Jason Horst
        </Typography>
        <Box
          sx={{
            flexGrow: 0,
            display: { xs: "flex", md: "none" },
            // justifyContent: "flex-end",
            alignItems: "center",
            alignSelf: "flex-end",
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            // onClick={handleOpenNavMenu}
            sx={{ color: linkColor }}
          >
            {collapseMenu ? (
              <i
                className="fa-solid fa-bars menu-icon"
                onClick={() => handleCollapseMenu()}
              ></i>
            ) : (
              <i class="fa-solid fa-x" onClick={() => handleCollapseMenu()}></i>
            )}
          </IconButton>
        </Box>
      </Container>
    </AppBar>
  );
}

export default Navigation;
