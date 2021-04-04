import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Lights from "../../pages/lights";

describe("Product", () => {
    it("should render the product component", async () => {
        render(<Lights />);

        expect(screen.getByText("Title")).toBeInTheDocument();
        expect(screen.getByText("Lorem Ipsum")).toBeInTheDocument();
    });
});
