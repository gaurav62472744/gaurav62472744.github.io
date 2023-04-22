import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { SiCss3, SiHtml5, SiJavascript } from "react-icons/si";

const Card2 = () => {
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
      <a
        href="https://transcendent-kashata-84d9de.netlify.app/"
        target="_blank"
      >
        <img
          style={{ padding: "20px" }}
          class="rounded-t-lg w-full"
          src="https://user-images.githubusercontent.com/110033104/210267269-3902ea4f-82a4-4236-8df7-3826deaeb2de.png"
          alt=""
        />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
            Asos.com
          </h5>
        </a>
        <p class="mb-3 font-normal text-white dark:text-gray-400">
          The company sells a range of clothing and cosmetic products such as
          tops, dresses, vests, shirts and blouses, trousers and leggings.
        </p>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
          Teck-stack
        </h5>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p class="inline-flex gap-2 items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300">
            <SiHtml5 color="#e34c26" />
            HTML
          </p>
          <p class="inline-flex gap-2 items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300">
            <SiCss3 color="#264de4" />
            CSS
          </p>
          <p class="inline-flex gap-2 items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300">
            <SiJavascript color="yellow" />
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
            href="https://transcendent-kashata-84d9de.netlify.app/"
            target="_blank"
            class="inline-flex gap-2 items-center py-2 px-3 text-lg font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            <FaExternalLinkAlt color="black" />
            Demo Link
          </a>
          <a
            href="https://github.com/gaurav62472744/lumpy-friend-4776"
            target="_blank"
            class="inline-flex gap-2 items-center py-2 px-3 text-lg font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            <BsGithub color="black" />
            Github
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Card2;
