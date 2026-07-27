import { motion } from "framer-motion";
import { FaHeart, FaStar, FaQuoteRight } from "react-icons/fa";
import { GiRose } from "react-icons/gi";

const Story = () => {
  return (
    <section id="story" className="py-24 px-4 bg-white">
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
          
          <h2 className="text-4xl md:text-5xl font-light text-gray-700">قصتنا</h2>
          <div className="w-24 h-0.5 mx-auto my-6 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"></div>
          
          <div className="space-y-8 text-right">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#faf8f6] p-8 rounded-3xl border border-[#c9a84c]/10"
            >
              <FaQuoteRight className="text-[#c9a84c]/20 text-2xl mb-4" />
              <p className="text-gray-600 leading-relaxed text-lg">
                كانت بداية قصة حبهما كأجمل القصص، حيث التقى قلبان نقيمان، 
                وتوحدت روحان في رحلة جميلة مليئة بالحب والاحترام والتفاهم. 
                ومنذ اللحظة الأولى، شعر كل منهما أنه وجد نصفه الآخر، 
                وأن الله قد كتب لهما لقاءً جميلاً يجمعهما إلى الأبد.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-[#faf8f6] p-8 rounded-3xl border border-[#c9a84c]/10"
            >
              <p className="text-gray-600 leading-relaxed text-lg">
                ومنذ ذلك اليوم وهما يسيران معاً، يتبادلان الحب والدعم، 
                ويبنيان أحلامهما المستقبلية معاً. واليوم، وبعد رحلة من الحب 
                والوفاء، يقرران أن يتحدا في رباط مقدس، ليكونوا مثالاً للحب 
                الصادق والزواج المبارك.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[#c9a84c]/5 to-transparent p-8 rounded-3xl border border-[#c9a84c]/10"
            >
              <div className="flex justify-center gap-2 text-[#c9a84c] text-2xl mb-4">
                <FaHeart />
                <FaHeart />
                <FaHeart />
              </div>
              <p className="text-gray-700 text-lg font-light leading-relaxed">
                "نسأل الله أن يكتب لهما قصة حب جميلة، وأن يجعل حياتهما مليئة 
                بالفرح والسعادة، وأن يبارك لهما في ذريتهما، وأن يجمع بينهما 
                على خير في الدنيا والآخرة."
              </p>
              <p className="text-[#c9a84c] text-sm mt-4">اللهم آمين</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;