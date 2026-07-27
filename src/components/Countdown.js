import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaClock } from "react-icons/fa";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2026-07-25T20:00:00').getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#1a0b1f] to-[#2d1b33]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center gap-2 text-[#c9a84c] text-2xl mb-4">
            <FaClock />
            <FaClock />
            <FaClock />
          </div>
          
          <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase">العد التنازلي</p>
          <h2 className="text-4xl md:text-5xl font-light text-white mt-2">يتبقى على الفرح</h2>
          <div className="w-24 h-0.5 mx-auto my-6 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"></div>
          
          <p className="text-white/30 text-sm max-w-2xl mx-auto mb-12 leading-relaxed">
            كل ثانية تقربنا أكثر من يوم الفرح والسعادة، 
            لحظة تجمع الأحبة وتلتقي القلوب في أبهى صور الحب والبهجة
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'أيام', value: timeLeft.days },
              { label: 'ساعات', value: timeLeft.hours },
              { label: 'دقائق', value: timeLeft.minutes },
              { label: 'ثواني', value: timeLeft.seconds }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-[#c9a84c]/20"
              >
                <div className="text-5xl md:text-7xl font-bold text-[#c9a84c]">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-white/30 text-sm mt-2 tracking-widest">{item.label}</div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-8 text-[#c9a84c]/20 text-sm"
          >
            ✦ ✦ ✦
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;