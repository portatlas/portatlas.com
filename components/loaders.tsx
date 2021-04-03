import Spinner from "react-bootstrap/Spinner";
import styles from "../scss/loaders.module.scss";

const Loaders = () => (
    <div className={styles.spinner} data-testid="loaders">
        <Spinner animation="grow" />
        <Spinner animation="grow" />
        <Spinner animation="grow" />
    </div>
);

export default Loaders;
