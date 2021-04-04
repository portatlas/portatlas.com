import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Lights from "../../pages/lights";
import objectMocks from "../jsonMocks/object.json";

describe("Lights", () => {
    it("should render the lights page", async () => {
        render(
            <Lights
                data={{
                    objects: [objectMocks],
                }}
            />
        );
        expect(screen.getByText("Title")).toBeInTheDocument();
        expect(screen.getByText("Lorem Ipsum")).toBeInTheDocument();
    });
});
