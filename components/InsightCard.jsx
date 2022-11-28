'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex flex-col gap-4 md:flex-row"
  >
    <Image
      src={imgUrl}
      width={270}
      height={250}
      priority
      quality={100}
      alt="planet-01"
      className="object-cover rounded-md"
    />
    <div className="flex items-center justify-between w-full">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {subtitle}
        </p>
      </div>

      <div
        className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white"
      >
        <img
          src="/arrow.svg"
          width={40}
          height={40}
          priority
          quality={100}
          alt="arrow"
          className="object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;