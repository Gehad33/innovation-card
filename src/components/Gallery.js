import { motion } from "framer-motion";
import { FaCamera, FaHeart, FaStar, FaImage } from "react-icons/fa";
import { GiRose } from "react-icons/gi";

const Gallery = () => {
  const images = [
    { icon: <GiRose />, label: "ورود", color: "from-[#c9a84c]/20" },
    { icon: <FaHeart />, label: "حب", color: "from-rose-200/20" },
    { icon: <FaStar />, label: "نجوم", color: "from-[#c9a84c]/20" },
    { icon: <GiRose />, label: "زهور", color: "from-rose-200/20" },
    { icon: <FaHeart />, label: "قلوب", color: "from-[#c9a84c]/20" },
    { icon: <FaImage />, label: "صور", color: "from-rose-200/20" }
  ];

  return (
    <section id="gallery" className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center gap-2 text-[#c9a84c] text-xl mb-4">
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          
          <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase">معرض الصور</p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-700 mt-2">لحظات من الفرح</h2>
          <div className="w-24 h-0.5 mx-auto my-6 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"></div>
          
          <p className="text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            نخبئ لكم مفاجآت وصوراً جميلة من حفل الزفاف، 
            ستجدونها هنا بعد الحفل مباشرة لتتذكروا معنا أجمل اللحظات
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className={`aspect-square bg-gradient-to-br ${item.color} to-transparent rounded-2xl flex flex-col items-center justify-center border border-[#c9a84c]/10 transition-all`}
              >
                <div className="text-5xl text-[#c9a84c]/40">{item.icon}</div>
                <p className="text-gray-400 text-xs mt-3">{item.label}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            whileHover={{ y: -5 }}
            className="mt-8 inline-block bg-[#faf8f6] px-6 py-3 rounded-full border border-[#c9a84c]/10"
          >
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <FaCamera />
              <span>سيتم إضافة الصور قريباً</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;