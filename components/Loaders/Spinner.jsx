import styles from "../../styles/Spinner.module.css";
const Spinner = () => {
  return (
    <>
      <div className={`${styles.spinner}  scale-50 `}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Spinner;
