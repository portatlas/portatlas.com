import IRichText from "./IRichText";
import IImage from "./IImage";

export default interface IObject {
    id: string;
    name: string;
    designer: string;
    medium: Array<string>;
    year: string;
    dimensions: Array<string>;
    description: IRichText;
    heroImage: IImage;
}
