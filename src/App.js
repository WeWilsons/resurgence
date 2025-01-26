import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import QuoteForm from "./components/QuoteForm";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Reviews />
      <QuoteForm />
    </div>
  );
}

export default App;
