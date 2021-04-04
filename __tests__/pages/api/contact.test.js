import contact from "../../../pages/api/contact";
import nodeMocks from "node-mocks-http";
import axios from "axios";

jest.mock("axios");

describe("/api/contact", () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("returns a 200 status if successful", async () => {
        axios.post.mockResolvedValue({
            status: 200,
            data: { success: true },
        });

        const req = nodeMocks.createRequest();
        const res = nodeMocks.createResponse();

        await contact(req, res);

        expect(res._getStatusCode()).toBe(200);
        expect(res._getData()).toEqual({ success: true });
    });

    it("returns a 500 status if the axios call throws an error", async () => {
        axios.post.mockImplementation(() => {
            throw new Error("API ERROR");
        });

        const req = nodeMocks.createRequest();
        const res = nodeMocks.createResponse();

        await contact(req, res);

        expect(res._getStatusCode()).toBe(500);
    });
});
