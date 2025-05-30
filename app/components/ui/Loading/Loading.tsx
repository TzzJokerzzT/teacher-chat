import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.scaling_dots}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
