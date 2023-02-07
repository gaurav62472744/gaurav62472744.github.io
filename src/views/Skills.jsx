import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";

const Skills = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      id="skills"
      style={{ fontFamily: "Philosopher" }}
      className={darkMode === true ? "bg-white" : "bg-gray-900"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          Skills
        </h2>
        <div>
          <motion.div>
            <h4 className="mt-20 text-3xl font-semibold text-blue-500">
              Technologies and Tools
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              Using a combination of cutting-edge technologies and reliable
              open-source software I build user-focused, performant apps and
              websites for smartphones, tablets, and desktops.
            </p>
          </motion.div>
          <motion.div className="flex flex-wrap mt-8 flex flex-wrap justify-between ">
            {techStack.map((el, index) => (
              <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                    },
                  },
                  hidden: { opacity: 1, y: 80 },
                }}
                className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
              >
                <img alt="" src={el.link} className="w-12" />
                <h4 className="text-md ml-4">{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>
          <h2
            className={
              darkMode
                ? "text-5xl font-bold px-4 md:px-0 text-center"
                : "text-5xl font-bold px-4 md:px-0 text-center text-white"
            }
            style={{ marginTop: "50px" }}
          >
            Github Contribution
          </h2>
          <div
            style={{
              paddingTop: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <GitHubCalendar
              style={{
                border: "1px solid grey",
                padding: "15px",
                color: "#3b82f6",
              }}
              username="gaurav62472744"
            />
          </div>
          <img
            style={{
              margin: "auto",
              textAlign: "center",
              marginTop: "60px",
              border: "1px solid grey",
            }}
            src="https://github-readme-streak-stats.herokuapp.com/?user=gaurav62472744"
            alt="streak"
          />
          <img
            style={{
              margin: "auto",
              textAlign: "center",
              marginTop: "60px",
              border: "1px solid grey",
            }}
            src="https://github-readme-stats-eight-theta.vercel.app/api?username=gaurav62472744&show_icons=true&include_all_commits=true&count_private=true"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
