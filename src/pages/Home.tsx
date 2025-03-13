import React from "react";
import Navigation from "../components/Navigation";

function Home() {
  return (
    <>
      <Navigation />
      <div className="container py-4 px-3 mx-auto">
        <h1>Hello, Bootstrap and Vite!</h1>
        <button className="btn btn-primary">Primary button</button>
      </div>
    </>
  );
}

export default Home;
