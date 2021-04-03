import React, { useReducer, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import Layout from "../components/layout";
import styles from "../scss/contact.module.scss";
import Loaders from "../components/loaders";

interface IEmailPayload {
    fullname: string;
    email: string;
    subject: string;
    body: string;
}

const initialPayload: IEmailPayload = {
    fullname: "",
    email: "",
    subject: "",
    body: "",
};

const reducer = (emailPayload: IEmailPayload, action) => {
    switch (action.type) {
        case "updateFormField":
            return {
                ...emailPayload,
                [action.fieldName]: action.fieldValue,
            };
        case "resetFormFields":
            return {
                ...initialPayload,
                [action.fieldName]: action.fieldValue,
            };
        default:
            return initialPayload;
    }
};

const Contact = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const [emailPayload, dispatch] = useReducer(reducer, initialPayload);

    const handleInputChange = (
        fieldName: string
    ): React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> => (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        dispatch({
            type: "updateFormField",
            fieldName,
            fieldValue: event.target.value,
        });
    };

    const handleFormSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios({
                method: "post",
                url: "/api/contact",
                data: emailPayload,
            });

            if (response) {
                setIsLoading(false);
                setMessage(
                    "Thank you for the message, we will get back to you shortly"
                );
            }
        } catch (error) {
            setIsLoading(false);
            setMessage("Sorry something went wrong, please try again later");
        }
    };

    if (isLoading) {
        return <Loaders />;
    }

    return (
        !isLoading && (
            <Layout
                title="CONTACT FORM"
                description="A form to get in touch with us!"
            >
                <Container>
                    <form className={styles.form} onSubmit={handleFormSubmit}>
                        <div className="text-center">
                            <h5>GET IN TOUCH </h5>
                        </div>
                        <label htmlFor="fullname" className={styles.label}>
                            Full Name:
                        </label>
                        <input
                            value={emailPayload.fullname}
                            onChange={handleInputChange("fullname")}
                            id="fullname"
                            required
                            className=""
                            type="text"
                        />

                        <label htmlFor="email" className={styles.label}>
                            Email:
                        </label>
                        <input
                            value={emailPayload.email}
                            onChange={handleInputChange("email")}
                            className={styles.input}
                            required
                            type="email"
                            id="email"
                        />

                        <label htmlFor="subject" className={styles.label}>
                            Subject:
                        </label>
                        <input
                            value={emailPayload.subject}
                            onChange={handleInputChange("subject")}
                            className={styles.input}
                            required
                            type="text"
                            id="subject"
                        />

                        <label htmlFor="body" className={styles.label}>
                            Message:
                        </label>
                        <textarea
                            value={emailPayload.body}
                            onChange={handleInputChange("body")}
                            required
                            className={styles.textArea}
                            id="body"
                        />

                        <button className={styles.button}>SUBMIT</button>
                    </form>
                    <div className="text-center">
                        <div>{message}</div>
                    </div>
                </Container>
            </Layout>
        )
    );
};

export default Contact;
