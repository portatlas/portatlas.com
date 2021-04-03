import IRichText from "./IRichText";

export default interface IImage {
    id: string;
    url: string;
    description: IRichText;
    picture: {
        url: string;
    };
}
