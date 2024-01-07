import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";
import Hero from "./components/hero/Hero";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Main from "./components/main/Main";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Header3 />

        <Box
          bgcolor={
            // @ts-ignore
            theme.palette.bg.main
          }
        >
          {/* <Hero /> */}
          <Main />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
