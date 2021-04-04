import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Faq from "../../components/faqs";

describe("Faq", () => {
    it("should render the faq component", async () => {
        render(
            <Faq
                faqs={[
                    {
                        id: "A",
                        image: {
                            id: "A",
                            description: "foo",
                            picture: {
                                url: "https://image.com/image.png",
                            },
                            url: "https://image.com/image.png",
                        },
                        question: "What?",
                        answer: {
                            markdown: "Lorem Ipsum",
                        },
                    },
                ]}
            />
        );

        expect(screen.getByText("What?")).toBeInTheDocument();
    });
});
