import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdCall, MdEmail, MdMessage } from "react-icons/md";

const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="21px" />}
          />
          <Button text="VIA CALL" icon={<MdCall fontSize="21px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdEmail fontSize="21px" />}
        />

        <form>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="Submit" />
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/contact.png" alt="contact image" />
      </div>
    </section>
  );
};

export default ContactForm;
