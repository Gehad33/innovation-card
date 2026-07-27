import { motion } from "framer-motion";
import { 
  FaMapMarkerAlt, FaCalendarAlt, FaClock, FaPhone, 
  FaParking, FaWheelchair, FaChild, FaStar 
} from "react-icons/fa";
import { GiRose } from "react-icons/gi";

const Location = () => {
  return (
    <section id="location" className="py-24 px-4 bg-[#faf8f6]">
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
            <FaStar />
            <GiRose />
          </div>
          
          <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase">المكان والوقت</p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-700 mt-2">تفاصيل الحفل</h2>
          <div className="w-24 h-0.5 mx-auto my-6 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"></div>
          
          <p className="text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            نضع بين أيديكم كافة التفاصيل التي تساعدكم في الوصول إلينا 
            والمشاركة معنا في هذه الليلة السعيدة
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ y: -5, boxShadow: "0 20px 60px rgba(0,0,0,0.05)" }}
              className="bg-white p-6 rounded-3xl border border-[#c9a84c]/10 text-center transition-all"
            >
              <div className="bg-[#c9a84c]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCalendarAlt className="text-[#c9a84c] text-3xl" />
              </div>
              <p className="text-gray-400 text-sm">التاريخ</p>
              <p className="text-gray-700 font-bold text-lg mt-1">السبت ٢٥ يوليو ٢٠٢٦</p>
              <p className="text-gray-400 text-xs mt-2">يوم مبارك بإذن الله</p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5, boxShadow: "0 20px 60px rgba(0,0,0,0.05)" }}
              className="bg-white p-6 rounded-3xl border border-[#c9a84c]/10 text-center transition-all"
            >
              <div className="bg-[#c9a84c]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-[#c9a84c] text-3xl" />
              </div>
              <p className="text-gray-400 text-sm">الوقت</p>
              <p className="text-gray-700 font-bold text-lg mt-1">الساعة ٨:٠٠ مساءً</p>
              <p className="text-gray-400 text-xs mt-2">نرجو الالتزام بالموعد</p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5, boxShadow: "0 20px 60px rgba(0,0,0,0.05)" }}
              className="bg-white p-6 rounded-3xl border border-[#c9a84c]/10 text-center transition-all md:col-span-2"
            >
              <div className="bg-[#c9a84c]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="text-[#c9a84c] text-3xl" />
              </div>
              <p className="text-gray-400 text-sm">المكان</p>
              <p className="text-gray-700 font-bold text-lg mt-1">قاعة الزهور الفاخرة - القاهرة</p>
              <p className="text-gray-400 text-xs mt-2">قاعة مجهزة بأحدث التجهيزات</p>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white p-4 rounded-2xl border border-[#c9a84c]/10 text-center">
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <FaParking className="text-[#c9a84c]" />
                <span className="text-sm">مواقف سيارات متوفرة</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-[#c9a84c]/10 text-center">
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <FaWheelchair className="text-[#c9a84c]" />
                <span className="text-sm">مدخل مخصص لذوي الهمم</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-[#c9a84c]/10 text-center">
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <FaChild className="text-[#c9a84c]" />
                <span className="text-sm">مكان مخصص للأطفال</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-[#c9a84c]/10 text-center">
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <FaPhone className="text-[#c9a84c]" />
                <span className="text-sm">للتواصل: ٠١٢٣٤٥٦٧٨٩</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;