import { createGlobalStyle } from "styled-components"


import AOS from 'aos';
import 'aos/dist/aos.css'; 


import {Header} from './components/Header'
import {Presentation} from './components/Presentation'
import {About} from './components/About'
import {Skills} from './components/Skills'
import {Projects} from './components/Projects'
import {Footer} from './components/Footer'

import { useEffect } from "react";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font: 20px Roboto, Helvetica, Arial, sans-serif;
  background-color: #FFF;
}


body::-webkit-scrollbar {
  width: 8px;
}

body::-webkit-scrollbar-track {
  background: #0F1215;
}

body::-webkit-scrollbar-thumb {
  background-color: #FFFFFF;
  border-radius: 6px;
}

`;

export function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <GlobalStyle />
      <Header/>
      <Presentation/>
      <About />
      <Skills/>
      <Projects />
      <Footer/>
    </div>
  )
}

