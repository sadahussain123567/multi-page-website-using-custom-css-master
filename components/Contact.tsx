import React from "react";
import styles from "@/app/page.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.name}>Contact Form</h1>
      <form action="" className={styles.form}>
        <div className={styles.input}>
          <input type="text" name="" id="" placeholder="Name" />
          <input type="text" name="" id="" placeholder="Email" />
        </div>
        <textarea
          name=""
          id=""
          rows={5}
          placeholder="Enter Your Message"
        ></textarea>
        <div className={styles.submit}>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
