import './App.css';
import styled, { ThemeProvider } from "styled-components"
import {darkTheme} from "./React 3D Portfolio/utils/Themes"
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/sections/Hero';

const Body = styled.div`
  background: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.text_primary};
  width: 100%;
  height: 90vh;
  overflow-x: hidden;
  position: relative;


`

function App() {
  return (
    <ThemeProvider theme = {darkTheme}>
      <Router>
        <Navbar/>
        <Body>
          <Hero/>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
