import React, { useContext } from "react";
// import heroBg from "../assets/webdev.svg";
import Typical from "react-typical";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
// import { Link } from "react-scroll";
// import cloud from "../assets/cloudBg.png";
// import cloudDark from "../assets/cloudDark.png";
import { FaDownload } from "react-icons/fa";
import PDF from "../assets/fp06_179-Gaurav-Singh-Resume.pdf";

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div
        style={
          darkMode
            ? {
                // backgroundImage: `url('https://wallpaperaccess.com/full/104815.jpg')`,
                backgroundColor: "#bddee7",
                backgroundSize: "cover",
                fontFamily: "Philosopher",
              }
            : {
                // backgroundImage: `url('https://www.teahub.io/photos/full/178-1780190_dark-clouds-with-moon.jpg')`,
                backgroundColor: "#37435b",
                backgroundSize: "cover",
                fontFamily: "Philosopher",
              }
        }
      >
        <main
          className="mx-auto max-w-7xl px-4 sm:px-6 mt-200 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
          id="/"
        >
          <div
            className="sm:text-center  lg:text-left"
            fontFamily={"Philosopher"}
          >
            <div className="sm:mt-100px">
              <h1
                style={{ marginTop: "70px" }}
                className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl mt-200 md:text-6xl mt-100 sm:mt-100px"
              >
                <motion.span
                  className={darkMode ? " text-black " : " text-white "}
                >
                  Hello, I'm Gaurav Singh
                </motion.span>
                <span className=" text-blue-500 z-0 lg:inline">
                  <Typical
                    steps={[
                      "Front End Developer",
                      2000,
                      "Full Stack Developer",
                      1000,
                    ]}
                    loop={Infinity}
                    wrapper="p"
                  />
                </span>
              </h1>
            </div>
            <p
              className={
                darkMode
                  ? "mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                  : "mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              }
            >
              I'm a Aspiring Web Full-Stack Developer.
            </p>
            <div className="flex md:justify-center lg:justify-start">
              {contactLinks.map((el) => (
                <a
                  href={el.link}
                  target="_blank"
                  className="mr-5 cursor-pointer mt-8 hover:scale-125"
                >
                  <img alt="" src={el.url} width="40px" height="40px" />
                  {/* <p className="text-md mt-2 hover:hidden">{el.name}</p> */}
                </a>
              ))}
            </div>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
                <a
                  className="w-full flex gap-3 items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                  href={PDF}
                  download={"fp06_179-Gaurav-Singh-Resume.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/file/d/1i-PHOHNb3i7-qjBABX9MZ2JdpkUPz9Fc/view?usp=share_link"
                    );
                  }}
                >
                  <FaDownload size={25} />
                  <p style={{ fontSize: "23px" }}>Resume</p>
                </a>
              </div>
            </div>
          </div>
          <motion.img
            initial="hidden"
            whileInView={"visible"}
            style={
              darkMode
                ? {
                    height: "400px",
                    width: "380px",
                    borderRadius: "48.5%",
                    border: "3px solid black",
                    mb: "10px",
                  }
                : {
                    height: "400px",
                    width: "380px",
                    borderRadius: "48.5%",
                    border: "3px solid white",
                    mb: "10px",
                  }
            }
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
            src={
              "https://user-images.githubusercontent.com/110033104/221783845-d7c57257-fd34-4403-aaab-9931fe7e45fd.png"
            }
            alt=""
            className="md:w-3/6 mt-10"
          />
        </main>
      </div>
    </>
  );
};

export default Home;
