import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      className=" z-20 fixed bottom-8 right-8 sm:right-32 "
      animate={{ scale: 2.5 }}
      transition={{ duration: 0.5 }}
    >
      <a href="https://wa.me/5521964811623" target="_blank">
        <BsWhatsapp size={16} color="#25D366" />
      </a>
    </motion.div>
  );
}
