import { Navbar, Brand, CTA } from "./components";
import {
  Blog,
  Header,
  Features,
  Footer,
  Possibility,
  WhatGPT3,
} from "./containers";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
