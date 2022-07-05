import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      className=" z-20 fixed bottom-4 right-4 sm:right-32 "
      animate={{ scale: 1.5 }}
      transition={{ duration: 0.5 }}
    >
      <a href="https://wa.me/5521964811623" target="_blank">
        <BsWhatsapp size={36} color="#25D366" />
      </a>
    </motion.div>
  );
}
