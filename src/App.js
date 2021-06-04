import { ThemeProvider, CssBaseline } from "@material-ui/core";
import LightTheme from "./Themes/LightTheme";
import LandingArt from "./Components/LandingArt";
import ArticlesList from "./Components/ArticlesList";
import Article from "./Components/Article";
//import About from "./Components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingArt />
            <ArticlesList />
          </Route>
          <Route path="/articles/:title">
            <Article />
          </Route>
          {/* <Route path="/about">
            <About />
          </Route> */}
          <Redirect to="/" />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
