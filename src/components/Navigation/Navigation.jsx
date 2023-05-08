import "./Navigation.css";
import { AppBar, Container, Typography } from "@mui/material";

function Navigation() {
  const backgroundColor = "rgba(255, 0, 255, .75)";

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
        }}
      >
        <img className="logo" src={process.env.PUBLIC_URL + "/favicon.ico"} />
        <Typography
          variant="h4"
          noWrap
          component="a"
          href="/Portfolio-2023"
          sx={{
            paddingLeft: ".5em",
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
      </Container>
    </AppBar>
  );
}
export default Navigation;
