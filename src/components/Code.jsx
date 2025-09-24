import React, { useState } from "react";
import Editor from "./Editor";
import Result from "./Result";
import { Box, styled } from "@mui/material";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Editors = styled(Box)`
  display: flex;
  flex: 1;

  @media (max-width: 768px) {
    flex-direction: column; 
    gap: 8px; 
  }
`;

const Output = styled(Box)`
  flex: 1;
  border-top: 2px solid #333;
`;

export default function Code() {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");

  return (
    <Container>
      <Editors>
        <Editor heading="HTML" icon="<>" color="orange" language="html" onChange={setHtmlCode} />
        <Editor heading="CSS" icon="{}" color="blue" language="css" onChange={setCssCode} />
        <Editor heading="JS" icon="()" color="yellow" language="javascript" onChange={setJsCode} />
      </Editors>

      <Output>
        <Result htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode} />
      </Output>
    </Container>
  );
}
