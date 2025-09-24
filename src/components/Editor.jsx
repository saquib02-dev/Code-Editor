import { useState } from "react";
import { Box, styled } from "@mui/material";
import { CloseFullscreen } from "@mui/icons-material";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";

import { EditorView } from "@codemirror/view";

// Custom autocomplete theme
const customAutocompleteTheme = EditorView.theme({
  ".cm-tooltip-autocomplete": {
    backgroundColor: "#2a2d36",   // suggestion box background
    border: "1px solid #444",
    color: "#fff",
  },
  ".cm-tooltip-autocomplete ul li[aria-selected]": {
    backgroundColor: "#4a4f63",   // highlighted suggestion background
    color: "#fff",
  },
  ".cm-tooltip": {
    borderRadius: "8px",
    overflow: "hidden",
  },
});



// Styled Components
const Container = styled(Box)(({ open }) => ({
  flexGrow: open ? 1 : 0,
  height: open ? "auto" : "48px",
  display: "flex",
  flexDirection: "column",
  borderRadius: "14px",
  overflow: "hidden",
  background: "#1b1d27",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.7)",
  transition: "all 0.3s ease",
}));

const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "linear-gradient(90deg, #2a2d36, #303347)",
  color: "#e0e0e0",
  fontWeight: 700,
  padding: "12px 16px",
  borderBottom: "1px solid #3a3f50",
  cursor: "pointer",
  "&:hover": {
    background: "linear-gradient(90deg, #303347, #383c4b)",
  },
});

const Heading = styled(Box)({
  display: "flex",
  alignItems: "center",
  fontFamily: "monospace",
  fontSize: "14px",
  letterSpacing: "0.5px",
});

const IconCircle = styled(Box)(({ color }) => ({
  background: color || "#555",
  borderRadius: "50%",
  marginRight: "12px",
  height: "24px",
  width: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontSize: "14px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.4)",
}));

// Editor Component
const Editor = ({ heading, language, value, onChange, icon, color }) => {
  const [open, setOpen] = useState(true);

  const languageMap = {
    html: html(),
    css: css(),
    javascript: javascript(),
  };

  return (
    <Container open={open}>
      <Header onClick={() => setOpen((prev) => !prev)}>
        <Heading>
          <IconCircle color={color}>{icon}</IconCircle>
          {heading}
        </Heading>
        <CloseFullscreen
          fontSize="small"
          style={{ cursor: "pointer", color: "#bbb", transition: "0.3s" }}
          onClick={(e) => {
            e.stopPropagation();
            setOpen((prev) => !prev);
          }}
        />
      </Header>

      {open && (
        <Box sx={{ flex: 1, overflow: "hidden"  }}>
          <CodeMirror
            value={value}
            height="100%"
              extensions={[languageMap[language], customAutocompleteTheme]}
            onChange={(val) => onChange(val)}
            style={{
              fontSize: "14px",
              backgroundColor: "#1e1f28",
              color: "#171616ff",
              height: "100%",
            }}
          />
        </Box>
      )}
    </Container>
  );
};

export default Editor;
