import { AppBar, Container, Typography } from "@mui/material";

function Navigation() {
  return (
    <AppBar>
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
          Jason Horst
        </Typography>
      </Container>
    </AppBar>
  );
}
export default Navigation;
