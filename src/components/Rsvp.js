import { motion } from "framer-motion";
import { FaUserFriends, FaUser, FaUsers, FaCheck, FaHeart, FaStar } from "react-icons/fa";
import { GiRose } from "react-icons/gi";
import { useState } from "react";

const Rsvp = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "1",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="rsvp" className="py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
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
          
          <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase">تأكيد الحضور</p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-700 mt-2">ننتظر تشريفكم</h2>
          <div className="w-24 h-0.5 mx-auto my-6 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"></div>
          
          <p className="text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
            يسرنا أن نعلمكم بتشريفكم لحفلنا، ونسأل الله أن يجمعنا بكم 
            في هذه الليلة السعيدة. يرجى تأكيد حضوركم من خلال النموذج التالي:
          </p>
          
          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl border border-green-200"
            >
              <div className="flex justify-center gap-2 text-green-500 text-4xl mb-4">
                <FaCheck />
                <FaCheck />
              </div>
              <p className="text-green-700 text-2xl font-light">تم تأكيد الحضور بنجاح!</p>
              <p className="text-green-500 text-sm mt-2">ننتظركم بكل شوق وحب</p>
              <div className="flex justify-center gap-2 text-green-400/30 text-xl mt-4">
                <FaHeart />
                <FaHeart />
                <FaHeart />
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-right bg-[#faf8f6] p-8 rounded-3xl border border-[#c9a84c]/10">
              <div>
                <label className="block text-gray-600 text-sm mb-2 tracking-widest">
                  <FaUser className="inline-block ml-2 text-[#c9a84c]" />
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border border-[#c9a84c]/20 rounded-xl focus:outline-none focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 bg-white transition-all"
                  placeholder="اكتب اسمك الكريم"
                />
              </div>
              
              <div>
                <label className="block text-gray-600 text-sm mb-2 tracking-widest">
                  <FaUser className="inline-block ml-2 text-[#c9a84c]" />
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 border border-[#c9a84c]/20 rounded-xl focus:outline-none focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 bg-white transition-all"
                  placeholder="٠١٢٣٤٥٦٧٨٩"
                />
              </div>
              
              <div>
                <label className="block text-gray-600 text-sm mb-2 tracking-widest">
                  <FaUsers className="inline-block ml-2 text-[#c9a84c]" />
                  عدد الضيوف
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full p-4 border border-[#c9a84c]/20 rounded-xl focus:outline-none focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 bg-white transition-all"
                >
                  {[1,2,3,4,5,6,7,8,9,10].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'شخص' : 'أشخاص'}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-gray-600 text-sm mb-2 tracking-widest">
                  <FaHeart className="inline-block ml-2 text-rose-400" />
                  رسالة للعروسين (اختياري)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-4 border border-[#c9a84c]/20 rounded-xl focus:outline-none focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 bg-white transition-all resize-none"
                  placeholder="اكتب كلماتك الجميلة للعروسين..."
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(201,168,76,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-[#c9a84c] to-[#dbb95c] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all text-lg tracking-wider"
              >
                <FaUserFriends className="inline-block ml-2" />
                تأكيد الحضور
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Rsvp;