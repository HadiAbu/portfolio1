import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';

const FeedbackCard = ({ index, testimonial, name, designation, company }) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className="bg-quadrary p-8 rounded-3xl xs:w-[320px] w-full flex flex-col"
  >
    <p className="text-white font-black text-[48px] leading-none mb-2">"</p>

    <p className="text-white tracking-wide text-[16px] leading-[1.7] italic flex-1">
      {testimonial}
    </p>

    <div className="mt-8 flex items-center gap-3">
      <div className="w-1 h-10 bg-gradient-to-b from-[#915EFF] to-[#a78bfa] rounded-full" />
      <div>
        <p className="text-white font-semibold text-[15px]">{name}</p>
        {(designation || company) && (
          <p className="mt-0.5 text-secondary text-[12px]">
            {designation}
            {designation && company ? ', ' : ''}
            {company}
          </p>
        )}
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-200 rounded-[20px]`}>
      <div
        className={`bg-black-100 rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, 'feedback');
