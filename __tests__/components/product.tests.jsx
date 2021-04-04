import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Product from "../../components/product";

describe("Product", () => {
    it("should render the product component", async () => {
        render(
            <Product
                product={{
                    name: "Title",
                    designer: "Designer",
                    medium: ["wood"],
                    year: "2019",
                    dimensions: [],
                    description: {
                        markdown: "Lorem Ipsum",
                    },
                    heroImage: {
                        url: "https://image.com/image.png",
                    },
                }}
            />
        );

        expect(screen.getByText("Title")).toBeInTheDocument();
        expect(screen.getByText("Lorem Ipsum")).toBeInTheDocument();
    });
});
