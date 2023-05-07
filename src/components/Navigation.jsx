import { AppBar, Container, Typography } from "@mui/material";

function Navigation() {
  return (
    <AppBar
      position="fixed"
      className="appBar"
      sx={{
        backgroundColor: "rgba(255, 0, 255, .7)",
        paddingTop: ".5em",
        paddingBottom: ".5em",
      }}
    >
      <Container>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <img className="logo" src={process.env.PUBLIC_URL + "/favicon.ico"} />
          Jason Horst
        </Typography>
      </Container>
    </AppBar>
  );
}
export default Navigation;
