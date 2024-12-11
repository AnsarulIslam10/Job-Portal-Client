import React from "react";
import { motion } from "motion/react";
import { easeInOut, reverseEasing } from "motion";
const Banner = () => {
  return (
    <div className="hero min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse gap-16">
        <div>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
        <div className="max-w-2xl">
          <motion.h1 
          animate={{ x: 5}} 
          transition={{duration: 2, ease: easeInOut, repeat:Infinity}}
          className="text-5xl font-bold">
            Latest <motion.span animate={{color: ['blue', "red"], repeat: Infinity}}>Jobs</motion.span> For You!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
