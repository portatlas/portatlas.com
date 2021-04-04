import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Faq from "../../components/faqs";
import faqMock from "../jsonMocks/faq.json";

describe("Faq", () => {
    it("should render the faq component", async () => {
        render(<Faq faqs={[faqMock]} />);

        expect(screen.getByText("What?")).toBeInTheDocument();
    });
});
