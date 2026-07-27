import { motion } from "framer-motion";
import { FaHeart, FaStar, FaArrowDown } from "react-icons/fa";
import { GiRose } from "react-icons/gi";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-gradient-to-br from-[#1a0b1f] via-[#2d1b33] to-[#1a0b1f]">
      
      {/* خلفية نجوم متحركة */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* وردات متحركة */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-[#c9a84c]/10 text-4xl"
          style={{
            top: `${10 + Math.random() * 80}%`,
            left: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 20, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          <GiRose />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[#c9a84c] text-4xl mb-4"
          >
            ✦
          </motion.div>

          <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase">دعوة زفاف</p>
          
          <h1 className="text-7xl md:text-9xl font-bold text-white mt-4 tracking-tight">
            One<span className="text-[#c9a84c]">Tap</span>
          </h1>
          <p className="text-white/30 text-sm tracking-[0.5em] mt-2">Event</p>
          
          <div className="flex justify-center gap-2 text-[#c9a84c] text-2xl mt-6">
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              >
                ✦
              </motion.span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 space-y-4"
          >
            <p className="text-white/60 text-lg">نتشرف بدعوتكم لحضور حفل زفاف</p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              <div>
                <p className="text-[#c9a84c] text-sm tracking-widest">العريس</p>
                <h2 className="text-5xl md:text-7xl font-bold text-white mt-2">عُمَر</h2>
              </div>
              
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex gap-2 text-rose-400 text-4xl"
              >
                <FaHeart />
                <FaHeart />
              </motion.div>

              <div>
                <p className="text-[#c9a84c] text-sm tracking-widest">العروس</p>
                <h2 className="text-5xl md:text-7xl font-bold text-white mt-2">جِهَاد</h2>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10 space-y-4"
          >
            <p className="text-white/40 text-sm max-w-xl mx-auto leading-relaxed">
              "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً"
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              <motion.a
                href="#rsvp"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(201,168,76,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#c9a84c] to-[#dbb95c] text-white font-bold rounded-full shadow-lg transition-all"
              >
                تأكيد الحضور
              </motion.a>
              
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 border border-white/20 text-white/70 font-bold rounded-full hover:bg-white/10 transition-all"
              >
                تعرف أكثر
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-16 text-white/20"
          >
            <FaArrowDown className="mx-auto text-2xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;