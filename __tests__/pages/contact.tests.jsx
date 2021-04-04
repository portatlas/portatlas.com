import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Contact from "../../pages/contact";
import axios from "axios";
import { GENERIC_ERR } from "../../const/errors";
jest.mock("axios");

describe("Contact", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should show the success message if submitted successfully", async () => {
        axios.post.mockResolvedValue({
            status: 200,
            data: { success: true },
        });
        render(<Contact />);
        const name = screen.getByLabelText(/Full Name:/i);
        const email = screen.getByLabelText(/Email:/i);
        const subject = screen.getByLabelText(/Subject:/i);
        const message = screen.getByLabelText(/Message:/i);
        const submitButton = screen.getByText(/SUBMIT/i);
        fireEvent.change(name, {
            target: {
                value: "name",
            },
        });

        fireEvent.change(email, {
            target: {
                value: "name@email.com",
            },
        });

        fireEvent.change(subject, {
            target: {
                value: "foo",
            },
        });

        fireEvent.change(message, {
            target: {
                value: "Lorem Ipsum",
            },
        });
        await act(async () => {
            fireEvent.click(submitButton);
            await new Promise((resolve) => setTimeout(resolve, 0));
            const successMessage = screen.getByText(
                "Thank you for the message, we will get back to you shortly"
            );
            expect(successMessage).toBeInTheDocument();
        });
    });

    it("should show the error message if not submitted successfully", async () => {
        axios.post.mockImplementation(() => {
            throw new Error();
        });
        render(<Contact />);
        const name = screen.getByLabelText(/Full Name:/i);
        const email = screen.getByLabelText(/Email:/i);
        const subject = screen.getByLabelText(/Subject:/i);
        const message = screen.getByLabelText(/Message:/i);
        const submitButton = screen.getByText(/SUBMIT/i);
        fireEvent.change(name, {
            target: {
                value: "name",
            },
        });

        fireEvent.change(email, {
            target: {
                value: "name@email.com",
            },
        });

        fireEvent.change(subject, {
            target: {
                value: "foo",
            },
        });

        fireEvent.change(message, {
            target: {
                value: "Lorem Ipsum",
            },
        });
        await act(async () => {
            fireEvent.click(submitButton);
            await new Promise((resolve) => setTimeout(resolve, 0));
            const errorMessage = screen.getByText(GENERIC_ERR);
            expect(errorMessage).toBeInTheDocument();
        });
    });
});
