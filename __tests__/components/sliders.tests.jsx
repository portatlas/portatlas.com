import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Sliders from "../../components/sliders";

describe("Slider", () => {
    it("should render the slider component", async () => {
        render(
            <Sliders
                images={[
                    {
                        id: "123",
                        url: "https://image.com/image.png",
                        description: {
                            markdown: "Lorem Ipsum",
                        },
                        picture: {
                            url: "https://image.com/image.png",
                        },
                    },
                ]}
            />
        );

        expect(screen.getByText("Lorem Ipsum")).toBeInTheDocument();
        expect(screen.getByTestId("image").src).toContain(
            "https://image.com/image.png"
        );
    });
});
