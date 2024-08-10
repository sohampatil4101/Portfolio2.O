import './App.css';
import { ThemeProvider } from "styled-components"
import {darkTheme} from "./React 3D Portfolio/utils/Themes"
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme = {darkTheme}>
      <Router>
        <Navbar/>
      </Router>
    </ThemeProvider>
  );
}

export default App;
