import { createTheme, ThemeProvider } from "@material-ui/core";
import Header from "./components/Header/header";
import About from "./components/AboutMe/about";
import Education from "./components/Education/education";
import Skills from "./components/Skills/skills";
import "./App.css"

const theme = createTheme({
  fontFamily: "Nunito Sans', sans-serif"
})

const scrollTo = (id) => {
  if (window && document && document.getElementById(id)) {
      window.scrollTo({ behavior: 'smooth', top: document.getElementById(id).offsetTop });
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header scrollTo={scrollTo}/>
        <About />
        <Education />
        <Skills />
      </div>
    </ThemeProvider>
  );
}

export default App;
