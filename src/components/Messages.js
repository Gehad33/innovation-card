import { motion } from "framer-motion";
import { FaQuoteRight, FaHeart, FaStar } from "react-icons/fa";
import { GiRose } from "react-icons/gi";

const Messages = () => {
  const messages = [
    {
      text: "اللهم بارك لهما وبارك عليهما واجمع بينهما في خير، وارزقهما الذرية الصالحة والعيش الهانيء.",
      from: "دعاء مبارك"
    },
    {
      text: "نسأل الله أن يجعل بيتكما عامراً بالسعادة والمحبة، وأن يكتب لكما قصة حب جميلة لا تنتهي.",
      from: "دعاء بالتوفيق"
    },
    {
      text: "اللهم ألف بين قلوبهما كما ألفت بين قلوب عبادك الصالحين، وأسعدهما في الدنيا والآخرة.",
      from: "دعاء بالمودة"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#faf8f6] to-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center gap-2 text-[#c9a84c] text-xl mb-4">
            <GiRose />
            <FaHeart className="text-rose-400" />
            <GiRose />
          </div>
          
          <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase">رسائل ودعوات</p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-700 mt-2">من القلب إلى القلب</h2>
          <div className="w-24 h-0.5 mx-auto my-6 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"></div>
          
          <p className="text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            كلمات من القلب نهديها للعروسين، نسأل الله أن يبارك لهما 
            ويسعدهما في حياتهما الجديدة
          </p>
          
          <div className="space-y-6">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl border border-[#c9a84c]/10 shadow-sm hover:shadow-md transition-all"
              >
                <FaQuoteRight className="text-[#c9a84c]/20 text-2xl mb-4" />
                <p className="text-gray-600 text-lg leading-relaxed">{msg.text}</p>
                <p className="text-[#c9a84c] text-sm mt-4 tracking-widest">{msg.from}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 flex justify-center gap-2 text-[#c9a84c]/20 text-xl">
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Messages;