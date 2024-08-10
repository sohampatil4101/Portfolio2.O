import './App.css';
import { ThemeProvider } from "styled-components"
import {darkTheme} from "./React 3D Portfolio/utils/Themes"
import { Navbar } from './components/Navbar';

function App() {
  return (
    <ThemeProvider theme = {darkTheme}>
      <Navbar/>
    </ThemeProvider>
  );
}

export default App;
