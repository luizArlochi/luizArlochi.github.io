import React from 'react';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX}
        absolute
        inset-0
        top-[120px]
        max-w-7xl
        mx-auto
        flex
        flex-row
        items-start
        gap-5
        `
        }
      >
        <div className="flex flex-col justify-center items-center mt-5 ">
          <motion.div
            animate={{
              rotate: 390,
            }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
            }}
            className="text-4xl text-violet-600"
          >
            <FaCode />
          </motion.div>

          <div className="w-1 sm:h80 h-40 violet-gradient "/>


        </div>
        <div>
          <h1 className={
            `${styles.heroHeadText}`
          }
          >Hi, I'm <span className="text-violet-600"> Luiz Guilherme Arlochi</span>
          </h1>
          <p className={
            `${styles.heroSubText}
            mt-2
            text-white
            `
          }>
            Experienced Full Stack Web Developer with a strong passion for JavaScript and Python. I've recently expanded my skill set to include cloud computing, taking advantage of Google Cloud's Compute Engine and Cloud Storage to manage and optimize training models and large-scale 3D simulations. While I continue to work on some of web development projects, I'm also exploring innovative ways to combine my expertise in web technologies with the visualization of 3D models, with the aim of improving the way these models can be viewed and edited directly through web browsers and mobile devices.
          </p>
        </div>
      </div>

      <div className="
        absolute
        xs:bottom-10
        bottom-32
        w-full
        flex
        justify-center
        items-center
        "
      >
        <a href="#about">
          <div className="
            w-[35px]
            h-[64px]
            rounded-3xl
            border-4
            border-secondary
            flex
            justify-center
            items-start
            p-2
            "
          >
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="
                w-3
                h-3
                rounded-full
                bg-secondary
                mb-1
              "
            />

          </div>
        </a>
        

      </div>
    </section>
  )
};

export default Hero;