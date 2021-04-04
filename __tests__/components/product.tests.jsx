import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Product from "../../components/product";
import objectMock from "../jsonMocks/object.json";

describe("Product", () => {
    it("should render the product component", async () => {
        render(<Product product={objectMock} />);

        expect(screen.getByText("Title")).toBeInTheDocument();
        expect(screen.getByText("Lorem Ipsum")).toBeInTheDocument();
    });
});
