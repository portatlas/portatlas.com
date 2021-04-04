import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Applications from "../../pages/applications";
import appMock from "../jsonMocks/application.json";

describe("Applications", () => {
    it("should render the lights page", async () => {
        render(
            <Applications
                data={{
                    applications: [appMock],
                }}
            />
        );
        expect(screen.getByText(appMock.name)).toBeInTheDocument();
        expect(
            screen.getByText(appMock.description.markdown)
        ).toBeInTheDocument();
    });
});
