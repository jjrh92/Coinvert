import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";

const HeaderContainer = styled("header")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "steelblue",
  borderTop: "1px solid black",
  borderBottom: "1px solid salmon",
  height: "60px",
  flexGrow: "1",
  position: "static",
  paddingLeft: "15px",
  paddingRight: "15px",
});

export default function Header() {
  return (
    <HeaderContainer>
      <Typography sx={{ flexGrow: 1 }}>
        <Button
          draggable="false"
          variant="text"
          href="/"
          sx={{ color: "lightyellow", fontSize: "16px", fontWeight: "bold" }}
        >
          Coinvert V-2.0.0
        </Button>
      </Typography>
      <Button
        draggable="false"
        variant="text"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.julioreyes.dev"
        sx={{ color: "lightyellow", fontSize: "16px", fontWeight: "bold" }}
      >
        Contact
      </Button>
    </HeaderContainer>
  );
}
