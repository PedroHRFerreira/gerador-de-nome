import styles from "./styles.module.scss";

const AtomsInput = ({
  type = "text",
  placeholder = "",
  value = "",
  onChange = () => {},
  name = "",
}) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className={styles.input}
      />
    </div>
  );
};

export default AtomsInput;
