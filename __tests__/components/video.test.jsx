import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Video from "../../components/video";

describe("Video", () => {
    it("should render the video component", async () => {
        render(
            <Video
                video={{
                    url: "https://video.com/video",
                }}
            />
        );

        expect(screen.getByTestId("video").src).toContain(
            "https://video.com/video"
        );
    });
});
