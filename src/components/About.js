import { motion } from "framer-motion";
import { FaQuoteRight, FaHeart, FaStar, FaGem, FaCrown } from "react-icons/fa";
import { GiRose, GiFamilyHouse } from "react-icons/gi";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center gap-3 text-[#c9a84c] text-2xl mb-4">
            <FaStar className="animate-pulse" />
            <FaStar className="animate-pulse delay-100" />
            <FaStar className="animate-pulse delay-200" />
            <FaStar className="animate-pulse delay-300" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-gray-700">عن الحفل</h2>
          <div className="w-24 h-0.5 mx-auto my-6 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"></div>
          
          <div className="flex justify-center gap-4 text-[#c9a84c]/20 text-3xl mb-6">
            <GiFamilyHouse />
            <FaHeart className="text-rose-400/20" />
            <GiFamilyHouse />
          </div>
          
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            بكل حب وسعادة، يتشرف أفراد عائلتي العروسين بدعوتكم لحضور حفل زفاف أغلى الناس على قلوبنا. 
            نسأل الله العلي القدير أن يبارك لهذا الزواج المبارك، وأن يديم المحبة والألفة بين العروسين، 
            وأن يكتب لهما السعادة في الدنيا والآخرة.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { 
                icon: <FaGem />, 
                label: "تصميم فاخر", 
                desc: "كل التفاصيل مدروسة بعناية فائقة لتكون ليلة لا تُنسى",
                color: "from-[#c9a84c]/20"
              },
              { 
                icon: <FaHeart />, 
                label: "أجواء رومانسية", 
                desc: "أجواء مليئة بالحب والسعادة والبهجة في أمسية ساحرة",
                color: "from-rose-200/20"
              },
              { 
                icon: <FaCrown />, 
                label: "ضيافة كريمة", 
                desc: "نتشرف بحضوركم ونعدكم بأسخى ضيافة وأجمل استقبال",
                color: "from-[#c9a84c]/20"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, boxShadow: "0 20px 60px rgba(0,0,0,0.05)" }}
                className={`bg-gradient-to-br ${item.color} to-transparent p-8 rounded-3xl border border-[#c9a84c]/10 transition-all`}
              >
                <div className="text-4xl text-[#c9a84c] mb-4">{item.icon}</div>
                <h3 className="text-gray-700 font-bold text-lg">{item.label}</h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-[#faf8f6] p-8 rounded-3xl border border-[#c9a84c]/10 max-w-3xl mx-auto">
            <FaQuoteRight className="text-[#c9a84c]/20 text-4xl mx-auto mb-4" />
            <p className="text-gray-500 italic text-lg leading-relaxed">
              "نسأل الله أن يجمع بينكما على خير، وأن يبارك لكما ويرزقكما الذرية الصالحة، 
              وأن يجعل بيتكما عامراً بالحب والسكينة والرحمة."
            </p>
            <p className="text-[#c9a84c] text-sm mt-4">اللهم آمين</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;