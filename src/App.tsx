import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import GadgetList from './components/GadgetList';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Features />
        <GadgetList />
        <ContactForm />
      </div>
    </div>
  );
}

export default App;