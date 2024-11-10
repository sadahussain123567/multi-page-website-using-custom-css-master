import React from "react";
import styles from "@/app/page.module.css";
import Skills from "./Skills";

const About = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.hero}>
          <div className={styles.content}>
            <h2 className={styles.name}>About</h2>
            <p className={styles.para1}>
              I m Sadam, a front-end web developer who is passionate about
              making websites that are both aesthetically pleasing and easy to
              use. I have set out to turn my passion for coding into useful
              digital solutions. I ve developed my HTML, CSS, and JavaScript
              skills during and after my academic career, with a special
              interest in frameworks like React.js. My dedication to studying
              and utilizing the newest web technologies is demonstrated by my
              projects, which include an intuitive to-do list application, a
              dynamic weather app, and a responsive calculator. I enjoy
              challenges that force me to be creative and innovative in my
              problem-solving. Every project I work on improves my technical
              skills and reaffirms my commitment to producing clear, effective
              code
            </p>
            <div>
              <h2 className={styles.name}>Skills</h2>
              <div className={styles.skill}>
                <Skills src="/css.png" />
                <Skills src="/html.png" />
                <Skills src="/Typescript.png" />
                <Skills src="/js.png" />
                <Skills src="/tailwind.png" />
                <Skills src="/React.png" />
                <Skills src="/nextjs.png" />
              </div>
            </div>
          </div>
          <div className={styles.imgdiv}>
            <img
              src="/image.png"
              alt="Profile Picture"
              className={styles.img}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
