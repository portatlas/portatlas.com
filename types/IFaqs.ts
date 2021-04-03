import IRichText from "./IRichText";
import IImage from "./IImage";

export default interface IFaq {
    id: string;
    question: string;
    answer: IRichText;
    image: IImage;
}
