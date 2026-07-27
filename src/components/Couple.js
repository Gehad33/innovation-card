import { motion } from "framer-motion";
import { FaHeart, FaRing, FaDove, FaStar } from "react-icons/fa";
import { GiDiamondRing, GiRose } from "react-icons/gi";

const Couple = () => {
  return (
    <section id="couple" className="py-24 px-4 bg-gradient-to-b from-[#faf8f6] to-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase">العروسان</p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-700 mt-2">قصة حب</h2>
          <div className="w-24 h-0.5 mx-auto my-6 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"></div>
          
          <p className="text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            في رحلة جميلة جمعها الله، يلتقي قلبان ليصبحا واحداً. نبارك لهما ونسأل الله لهما السعادة الأبدية.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 py-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-56 h-56 bg-gradient-to-br from-[#c9a84c]/20 to-[#c9a84c]/5 rounded-full mx-auto flex items-center justify-center border-2 border-[#c9a84c]/20">
                <div className="text-center">
                  <div className="text-6xl text-[#c9a84c]">✦</div>
                  <p className="text-[#c9a84c] text-sm mt-4">العريس</p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-2 -right-2 text-[#c9a84c]/20 text-xl"
              >
                <FaRing />
              </motion.div>
              <h3 className="text-5xl font-bold text-gray-800 mt-6">عُمَر</h3>
              <p className="text-gray-400 text-sm">نسأل الله له السعادة والهناء</p>
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <div className="flex gap-3 text-rose-400 text-5xl">
                <FaHeart />
                <GiDiamondRing className="text-[#c9a84c]" />
                <FaHeart />
              </div>
              <div className="flex gap-2 text-[#c9a84c]/20 text-sm">
                <GiRose />
                <FaStar />
                <GiRose />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-56 h-56 bg-gradient-to-br from-rose-200/20 to-rose-200/5 rounded-full mx-auto flex items-center justify-center border-2 border-rose-200/20">
                <div className="text-center">
                  <div className="text-6xl text-rose-400">♥</div>
                  <p className="text-[#c9a84c] text-sm mt-4">العروس</p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-2 -left-2 text-rose-400/20 text-xl"
              >
                <FaRing />
              </motion.div>
              <h3 className="text-5xl font-bold text-gray-800 mt-6">جِهَاد</h3>
              <p className="text-gray-400 text-sm">نسأل الله لها الفرح والسرور</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl border-2 border-[#c9a84c]/10 max-w-2xl mx-auto mt-8 shadow-xl"
          >
            <FaDove className="text-[#c9a84c]/30 text-4xl mx-auto mb-4" />
            <p className="text-gray-600 text-lg leading-relaxed">
              "اللهم ألف بين قلوبهما كما ألفت بين قلوب عبادك الصالحين، 
              واجعل بينهما مودة ورحمة، وأسعدهما في الدنيا والآخرة"
            </p>
            <p className="text-[#c9a84c] text-sm mt-4">اللهم آمين</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Couple;