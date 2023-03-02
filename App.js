import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <b className={styles.dragAndDropContainer}>
            <p className={styles.dragAndDrop}>{`Drag and Drop file `}</p>
          </b>
          <img className={styles.upload1Icon} alt="" src={require('./upload.jpg')} />
          <b className={styles.or}>or</b>
          <div className={styles.browse}>Browse</div>
        </div>
        <img className={styles.image1Icon} alt="" src={require('./image-1.jpg')} />
      </div>
    </div>
  );
};

export default App;
