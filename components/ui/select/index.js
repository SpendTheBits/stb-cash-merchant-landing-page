import styles from "./style.module.scss";

const Select = (props) => {
  return (
    <div className={styles.inputContainer}>
      <label>{props.label}</label>
      <div className={styles.inputBlock}>
        <select name={props.name}>
          {props.options &&
            props.options?.map((item, i) => (
              <option value={item.value}>{item.label}</option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
