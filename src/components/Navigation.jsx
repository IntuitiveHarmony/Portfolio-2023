import { AppBar, Container, Typography } from "@mui/material";

function Navigation() {
  const backgroundColor = "rgba(255, 0, 255, .75)";

  return (
    <AppBar
      position="fixed"
      sx={{
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
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
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
