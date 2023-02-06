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
import PDF from "../assets/Gaurav_Singh_Resume.pdf";

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div
        style={
          darkMode
            ? {
                backgroundImage: `url('https://wallpaperaccess.com/full/104815.jpg')`,
                backgroundSize: "cover",
              }
            : {
                backgroundImage: `url('https://www.teahub.io/photos/full/178-1780190_dark-clouds-with-moon.jpg')`,
                backgroundSize: "cover",
              }
        }
      >
        <main
          className="mx-auto max-w-7xl px-4 sm:px-6 mt-200 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
          id="/"
        >
          <div
            className="sm:text-center  lg:text-left"
            fontFamily={"Neue-Helvetica, Helvetica, Arial, sans-serif"}
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
                      "Front End Develper",
                      2000,
                      "Full Stack Developer",
                      2000,
                      "Front End Developer",
                      3000,
                      "Full Stack Developer",
                      3000,
                    ]}
                    loop={20}
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
                  download={"Gaurav_Singh_Resume.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/file/d/1pn4zSo8nAFurcvq1DALY5tLMBKGeYwEC/view?usp=share_link"
                    );
                  }}
                >
                  <FaDownload size={25} />
                  <p style={{ fontSize: "26px" }}>Resume</p>
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
                    height: "440px",
                    width: "400px",
                    borderRadius: "48.5%",
                    border: "3px solid black",
                    mb: "10px",
                  }
                : {
                    height: "440px",
                    width: "400px",
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
              "https://user-images.githubusercontent.com/110033104/211527567-5388e558-fc89-46b5-9602-50ebacb7e133.png"
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
