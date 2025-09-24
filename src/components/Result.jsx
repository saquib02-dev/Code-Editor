import React, { useEffect, useState } from "react";

export default function Result({ htmlCode = "", cssCode = "", jsCode = "" }) {
  const srcCode = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <style>${cssCode || ""}</style>
      </head>
      <body>
        ${htmlCode || ""}
        <script>${jsCode || ""}<\/script>
      </body>
      </html>
    `;
  const [src, setSrc] = useState("");
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrc(srcCode);
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [htmlCode, cssCode, jsCode]);

  return (
    <iframe
      title="Result"
      srcDoc={src}
      style={{ width: "100%", height: "100vh", border: "none" }}
      sandbox="allow-scripts "
    />
  );
}
