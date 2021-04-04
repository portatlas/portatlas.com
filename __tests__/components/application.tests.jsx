import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Application from "../../components/application";
import appMock from "../jsonMocks/application.json";

describe("Application", () => {
    it("should render the product component", async () => {
        render(<Application app={appMock} />);

        expect(screen.getByText(appMock.name)).toBeInTheDocument();
        expect(
            screen.getByText(appMock.description.markdown)
        ).toBeInTheDocument();
    });
});
