import { motion } from "framer-motion";
import { 
  FaGlassCheers, FaUtensils, FaMusic, FaCamera, 
  FaStar, FaHeart 
} from "react-icons/fa";
import { GiCakeSlice, GiPartyFlags, GiRose } from "react-icons/gi";

const Program = () => {
  const events = [
    { time: "٨:٠٠ م", icon: <FaGlassCheers />, label: "استقبال الضيوف", desc: "نرحب بكم وننتظر تشريفكم" },
    { time: "٨:٣٠ م", icon: <FaUtensils />, label: "العشاء المفتوح", desc: "وليمة عشاء فاخرة" },
    { time: "٩:٠٠ م", icon: <GiCakeSlice />, label: "تقطيع الكيك", desc: "أجمل لحظات الحفل" },
    { time: "٩:٣٠ م", icon: <FaMusic />, label: "فقرات موسيقية", desc: "أجمل الأغاني والأناشيد" },
    { time: "١٠:٠٠ م", icon: <FaCamera />, label: "جلسة التصوير", desc: "خلّدوا أجمل اللحظات" },
    { time: "١٠:٣٠ م", icon: <GiPartyFlags />, label: "ختام الحفل", desc: "نشكركم على حضوركم" }
  ];

  return (
    <section id="program" className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center gap-2 text-[#c9a84c] text-xl mb-4">
            <GiRose />
            <FaStar />
            <GiRose />
          </div>
          
          <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase">برنامج الحفل</p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-700 mt-2">الجدول الزمني</h2>
          <div className="w-24 h-0.5 mx-auto my-6 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"></div>
          
          <p className="text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            إليكم برنامج الحفل الذي جمعنا لكم فيه أجمل الفقرات 
            وأسعد اللحظات التي نتمنى أن تشاركونا فيها فرحتنا
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, boxShadow: "0 20px 60px rgba(0,0,0,0.05)" }}
                className="bg-[#faf8f6] p-6 rounded-2xl border border-[#c9a84c]/10 text-center transition-all"
              >
                <div className="bg-[#c9a84c]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-[#c9a84c] text-3xl">{event.icon}</div>
                </div>
                <p className="text-[#c9a84c] text-sm font-bold">{event.time}</p>
                <h3 className="text-gray-700 font-bold mt-2">{event.label}</h3>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed">{event.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-[#c9a84c]/5 to-transparent p-6 rounded-3xl border border-[#c9a84c]/10 max-w-2xl mx-auto">
            <div className="flex justify-center gap-2 text-[#c9a84c] text-xl mb-2">
              <FaHeart />
              <FaHeart />
              <FaHeart />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              نتمنى أن تكونوا معنا في كل لحظة، فلحضوركم طعم خاص 
              يضفي على فرحتنا بهجة لا تُضاهى
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Program;