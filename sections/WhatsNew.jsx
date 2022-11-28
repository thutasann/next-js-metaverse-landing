'use client';

import { motion } from "framer-motion";
import styles from '../styles';
import Image from "next/image";
import { NewFeatures, StartSteps, TitleText, TypingText  } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion'
import { startingFeatures, newFeatures  } from '../constants';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >

      {/* Text info */}
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title={"| How Metaverses Works"}/>
        <TitleText title={"Whats new about Metaverses"}/>
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {
            newFeatures.map((feature) => (
              <NewFeatures
                key={feature.title}
                {...feature}
              />
            ))
          }
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        variants={planetVariants('right')}
        className={`${styles.flexCenter} flex-1`}
      >
        <Image
          src="/whats-new.png"
          alt="Whats New"
          width={900}
          height={900}
          priority
          quality={100}
          className="object-contain"
        />
      </motion.div>

    </motion.div>
  </section>
);

export default WhatsNew;
