'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import Link from 'next/link';

const Navbar = () => (
  <motion.nav 
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className='absolute w-[50%] inset-0 gradient-01'/>
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <Image
        src={'/search.svg'}
        width={24}
        height={24}
        alt="Navbar Search"
        className='object-contain'
        priority
      />
      <Link href="/">
        <h2 className='font-extrabold text-[24px] leading-[30px] text-white'>
          METAVERSUS
        </h2>
      </Link>
      <Image
        src={'/menu.svg'}
        width={24}
        height={24}
        alt="Navbar Menu"
        className='object-contain'
        priority
      />
    </div>
  </motion.nav>
);

export default Navbar;