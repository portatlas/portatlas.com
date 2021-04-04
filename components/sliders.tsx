import { Image, Carousel } from "react-bootstrap";
import styles from "../scss/portfolio.module.scss";
import IImage from "../types/IImage";

interface ISlidersProp {
    images: Array<IImage>;
}

const Sliders = ({ images }: ISlidersProp) => {
    return (
        <Carousel interval={null}>
            {images.map((img: IImage) => {
                return (
                    <Carousel.Item key={img.id}>
                        <Carousel.Caption className={styles.caption}>
                            <p>{img?.description?.markdown}</p>
                        </Carousel.Caption>
                        <Image
                            className={styles.image}
                            alt={img?.description?.markdown}
                            src={img.picture.url}
                            fluid
                        />
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
};

export default Sliders;
