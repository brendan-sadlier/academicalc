import React, { useState } from "react";
import Navbar from "components/Navbar/Navbar";
import CustomTheme from "CustomTheme";
import { Box, CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

function CalculateGpaPage() {

  const [mode, setMode] = useState('dark');
  const [showCustomTheme, setShowCustomTheme] = useState(true);
  const customTheme = createTheme(CustomTheme(mode));
  const defaultTheme = createTheme({ palette: { mode }});

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={showCustomTheme ? customTheme : defaultTheme}>
      <CssBaseline />
        <Navbar mode={mode} toggleColorMode={toggleColorMode} />
    </ThemeProvider>
  );
}

export default CalculateGpaPage;