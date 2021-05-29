import { ThemeProvider, CssBaseline } from "@material-ui/core";
import LightTheme from "./Themes/LightTheme";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import Trending from "./Components/Trending";
function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <CssBaseline />
      <Navbar />
      <HomePage />
      <Trending />
    </ThemeProvider>
  );
}

export default App;
