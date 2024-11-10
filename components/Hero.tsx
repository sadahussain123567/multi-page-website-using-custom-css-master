import React from "react";
import styles from "@/app/page.module.css";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
const Hero = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.hero}>
          <div className={styles.content}>
            <h2>
              Hi, I&apos;m <span className={styles.name}> Saddam Hussain</span>
            </h2>
            <p className={styles.para}>
              A front-end web developer with a strong enthusiasm for making
              websites that are both aesthetically pleasing and easy to use.
            </p>

            <div>
              <ul className={styles.icon}>
                <li>
                  <a href="">
                    <Facebook className={styles.icon} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <Linkedin className={styles.icon} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <Github className={styles.icon} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <Instagram className={styles.icon} />
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.btn}>
              <button className={styles.button}>
                <a href="/my resume.pdf">Download CV</a>
              </button>
              <button className={styles.button}>
                <a href="/about">About Me</a>
              </button>
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

export default Hero;
