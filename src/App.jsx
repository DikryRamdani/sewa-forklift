import React from 'react';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import TawkChat from './components/chat/TawkChat';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-[#f97316] selection:text-white flex flex-col">
      <Header />
      <Navbar />
      <Home />
      <Footer />
      <TawkChat />
    </div>
  );
}

export default App;
