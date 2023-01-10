import React from "react";
import { motion } from "framer-motion";

const Card4 = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      style={{ background: "#091618" }}
      class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
    >
      <a href="hello">
        <img
          style={{ padding: "20px" }}
          class="rounded-t-lg w-full"
          src="https://user-images.githubusercontent.com/110033104/211537383-89d096cd-3c44-4e4f-81c9-158d3367b445.png"
          alt=""
        />
      </a>
      <div class="p-5">
        <a href="helo">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            MeanBuy.com
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          This is an largest E-commerce site where customers can sell and buy
          their products from any where in the world.
        </p>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Teck-stack
        </h5>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300">
            HTML
          </p>
          <p class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300">
            CSS
          </p>
          <p class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300">
            JavaScript
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "20px",
          }}
        >
          <a
            href="https://snazzy-naiad-622c57.netlify.app/"
            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Demo Link
          </a>
          <a
            href="https://github.com/rohit1469/puffy-umbrella-7608"
            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Github
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Card4;
