import IRichText from "./IRichText";
import IImage from "./IImage";
import IVideo from "./IVideo";

export default interface IApp {
    id: string;
    name: string;
    developer: Array<string>;
    tech: Array<string>;
    year: string;
    description: IRichText;
    image: Array<IImage>;
    link: IRichText;
    video: IVideo;
}
