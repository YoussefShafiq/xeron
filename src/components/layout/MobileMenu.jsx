'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const menuItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1, x: 0,
    transition: { ease: 'easeOut', duration: 0.2 },
  },
};

export default function MobileMenu({ links, onClose }) {
  return (
    <motion.div className="px-2 pt-2 pb-3 space-y-1 text-purple-50/50">
      {links.map((l) => (
        <motion.div key={l.href} variants={menuItemVariants}>
          <Link
            href={l.href}
            onClick={onClose}
            className="block px-3 py-2 rounded-md text-base text-purple-50/50 hover:text-white font-medium transition duration-300"
          >
            {l.label}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}