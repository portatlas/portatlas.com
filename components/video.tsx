import styles from "../scss/portfolio.module.scss";

interface IVideoProp {
    video: {
        url: string;
    };
}

const Video = ({ video }: IVideoProp) => {
    return (
        <div className={styles.videoWrapper}>
            <iframe
                className={styles.video}
                title="vid"
                src={video.url}
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Video;
