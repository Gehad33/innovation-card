import { motion } from "framer-motion";
import { FaHeart, FaRegMoon, FaStar, FaLeaf, FaDove } from "react-icons/fa";
import { GiRose } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-gradient-to-br from-[#1a0b1f] to-[#2d1b33]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center gap-3 text-[#c9a84c]/30 text-3xl mb-6">
            <GiRose />
            <FaStar />
            <FaHeart className="text-rose-400/30" />
            <FaDove />
            <FaStar />
            <GiRose />
          </div>
          
          <p className="text-white/40 text-sm tracking-[0.3em] leading-relaxed">
            مَعَ خَالِصِ الْحُبِّ وَالتَّقْدِيرِ
          </p>
          
          <p className="text-[#c9a84c] text-sm mt-2 tracking-widest font-light">
            عَائِلَةُ الْعَرُوسَيْنِ
          </p>
          
          <div className="flex justify-center gap-2 text-[#c9a84c]/20 text-sm mt-4">
            <FaRegMoon />
            <span>٢٠٢٦</span>
            <FaRegMoon />
          </div>
          
          <div className="flex justify-center gap-2 text-[#c9a84c]/10 text-xs mt-3">
            <span>✦</span>
            <span>✦</span>
            <span>✦</span>
            <span>✦</span>
            <span>✦</span>
          </div>
          
          <div className="flex justify-center gap-2 text-[#c9a84c]/5 text-xs mt-4">
            <FaLeaf />
            <span>OneTap Event</span>
            <FaLeaf />
          </div>
          
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-4 text-[#c9a84c]/10 text-lg"
          >
            ✦
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;




















