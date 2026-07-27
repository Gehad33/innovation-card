import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Couple from "./components/Couple";
import Story from "./components/Story";
import Countdown from "./components/Countdown";
import Program from "./components/Program";
import Location from "./components/Location";
import Gallery from "./components/Gallery";
import Messages from "./components/Messages";
import Rsvp from "./components/Rsvp";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1a0b1f] to-[#2d1b33] flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="text-6xl text-[#c9a84c]"
          >
            ✦
          </motion.div>
          <p className="text-[#c9a84c]/50 text-sm mt-4 tracking-widest">جاري التحميل...</p>
          <div className="flex justify-center gap-1 mt-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
                className="w-2 h-2 bg-[#c9a84c]/30 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf8f6]">
      <Navbar />
      <Hero />
      <About />
      <Couple />
      <Story />
      <Countdown />
      <Program />
      <Location />
      <Gallery />
      <Messages />
      <Rsvp />
      <Footer />
    </div>
  );
}

export default App;