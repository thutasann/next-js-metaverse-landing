'use client';

import { motion } from "framer-motion";
import styles from '../styles';
import Image from "next/image";
import { TitleText, TypingText  } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion'

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}
      >
        <TypingText title="| People on the World"  textStyles="text-center" />
        <TitleText
          title="Track friends around you and invite them to play together in the same world"
          textStyles="text-center"
        />

        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <Image
            width={3000}
            height={500}
            priority
            quality={100}
            src="/map.png"
            alt="MAP"
            className="object-cover"
          />

          {/* Places */}
          <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <Image
              src="/people-01.png"
              alt="People 01"
              width={70}
              height={70}
              loading="lazy"
              blurDataURL="/people-01.png"
            />
          </div>

          {/* Places */}
          <div className="absolute top-0 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <Image
              src="/people-02.png"
              alt="People 02"
              width={70}
              height={70}
              loading="lazy"
              blurDataURL="/people-03.png"
            />
          </div>

          {/* Places */}
          <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <Image
              src="/people-03.png"
              alt="People 03"
              width={70}
              height={70}
              loading="lazy"
              blurDataURL="/people-03.png"
            />
          </div>


        </motion.div>
      </motion.div>
  </section>
);

export default World;
