import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Home from "../../pages/index";
import sectionMock from "../jsonMocks/section.json";
import faqMock from "../jsonMocks/faq.json";

describe("Home", () => {
    it("should render the home page with the home section and faqs", async () => {
        render(
            <Home
                data={{
                    sections: [sectionMock],
                    faqs: [faqMock],
                }}
            />
        );
        expect(screen.getByText(sectionMock.title)).toBeInTheDocument();
        expect(screen.getByText(faqMock.question)).toBeInTheDocument();
    });
});
