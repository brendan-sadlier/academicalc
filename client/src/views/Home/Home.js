import Navbar from "components/Navbar/Navbar";
import React, { useState } from "react";
import CustomTheme from "CustomTheme";
import { Box, CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Hero from "./components/Hero";
import Features from "./components/Features";

function Home() {

  const [mode, setMode] = useState('dark');
  const [showCustomTheme, setShowCustomTheme] = useState(true);
  const customTheme = createTheme(CustomTheme(mode));
  const defaultTheme = createTheme({ palette: { mode }});

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return (
    <ThemeProvider theme={showCustomTheme ? customTheme : defaultTheme}>
      <CssBaseline />
        <Navbar mode={mode} toggleColorMode={toggleColorMode} />
        <Hero />
        <Box sx={{ bgcolor: 'background.default' }}>
          <Features />
        </Box>
    </ThemeProvider>
  );

}

export default Home;