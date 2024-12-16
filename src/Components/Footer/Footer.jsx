import Button from "@mui/material/Button";
import { styled } from "@mui/material";

const FooterContainer = styled("footer")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "steelblue",
  borderTop: "1px solid salmon",
  height: "60px",
  paddingLeft: "15px",
  paddingRight: "15px",
});

export default function Footer() {
  return (
    <FooterContainer>
      <Button
        draggable="false"
        variant="text"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.julioreyes.dev"
        sx={{ color: "lightyellow", fontSize: "16px", fontWeight: "bold" }}
      >
        www.julioreyes.dev
      </Button>
    </FooterContainer>
  );
}
