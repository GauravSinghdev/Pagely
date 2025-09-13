"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { redirect } from "next/navigation";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <div className="relative px-6 lg:px-20 py-32 my-32 flex flex-col lg:flex-row items-center gap-16">
      {/* Left Content */}
      <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl lg:text-7xl font-extrabold leading-tight"
        >
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
            Easy Copy Paste
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg lg:text-2xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0"
        >
          Our beautiful components and landing pages can be yours with just{" "}
          <span className="font-semibold text-primary">1 click</span>.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, type: "spring", stiffness: 120 }}
          className="flex justify-center lg:justify-start"
        >
          <Button
            onClick={() => redirect("/docs/installation")}
            className="group flex items-center gap-2 px-6 py-3 text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Get Started
            <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      {/* Right Image */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.7, ease: "easeOut" }}
        className="flex-1 flex items-center justify-center"
      >
        <div className="relative">
          <Image
            src="https://cdn.pixabay.com/photo/2016/03/11/19/28/fern-1250903_960_720.jpg"
            alt="hero"
            width={500}
            height={500}
            className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
            priority
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 blur-2xl -z-10"></div>
        </div>
      </motion.div>
    </div>
  );
}
