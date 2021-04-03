import IRichText from "./IRichText";
import IImage from "./IImage";

export default interface ISection {
    id: string;
    title: string;
    heroImage: IImage;
    intro: IRichText;
    description: string;
}
