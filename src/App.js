import React from "react";
import Navbar from "./comp/Navbar";
import Footer from "./comp/Footer";
import Todos from "./comp/Todos";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Todos />
      <Footer />
    </div>
  );
}

export default App;
