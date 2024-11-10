import React from "react";
import styles from "@/app/page.module.css";
type Props = {
  src: string;
};
const Skills = (props: Props) => {
  return (
    <div>
      <ul className={styles.skills}>
        <li>
          <img src={props.src} alt="" className={styles.lang} />
        </li>
      </ul>
    </div>
  );
};

export default Skills;
