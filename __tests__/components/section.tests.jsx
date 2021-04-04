import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Section from "../../components/section";
import sectionMock from "../jsonMocks/section.json";

describe("Section", () => {
    it("should render the section component", async () => {
        render(<Section section={sectionMock} />);

        expect(screen.getByText("Title")).toBeInTheDocument();
        expect(screen.getByText("Lorem Ipsum")).toBeInTheDocument();
    });
});
