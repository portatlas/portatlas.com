import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Section from "../../components/section";

describe("Section", () => {
    it("should render the section component", async () => {
        render(
            <Section
                section={{
                    heroImage: {
                        url: "https://image.com/image.png",
                    },
                    title: "Title",
                    intro: {
                        markdown: "Lorem Ipsum",
                    },
                }}
            />
        );

        expect(screen.getByText("Title")).toBeInTheDocument();
        expect(screen.getByText("Lorem Ipsum")).toBeInTheDocument();
    });
});
