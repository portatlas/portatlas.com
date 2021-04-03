import React, { useReducer, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import Layout from "../components/layout";
import styles from "../scss/contact.module.scss";
import Loaders from "../components/loaders";

const INITIAL_STATE = {
    fullname: "",
    email: "",
    subject: "",
    body: "",
};

const reducer = (state, action) => {
    switch (action.type) {
        case "updateFormField":
            return {
                ...state,
                [action.fieldName]: action.fieldValue,
            };
        default:
            return INITIAL_STATE;
    }
};

const Contact = () => {
    const [message, setMessage] = useState("");
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    const handleInputChange = (fieldName) => (event) => {
        dispatch({
            type: "updateFormField",
            fieldName,
            fieldValue: event.target.value,
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setMessage(<Loaders />);
        axios({
            method: "post",
            url:
                "https://7sh0k8u0q2.execute-api.us-west-2.amazonaws.com/prod/contact",
            data: JSON.stringify(state),
        })
            .then((resp) => {
                setMessage(
                    "Thank you for the message, we will get back to you shortly"
                );
            })
            .catch((error) => {
                setMessage(
                    "Sorry something went wrong, please try again later"
                );
            });
    };

    return (
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
                        value={state.fullname}
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
                        value={state.email}
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
                        value={state.subject}
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
                        value={state.body}
                        onChange={handleInputChange("body")}
                        required
                        className={styles.textArea}
                        type="text"
                        id="body"
                    />

                    <button className={styles.button}>SUBMIT</button>
                </form>
                <div className="text-center">
                    <div>{message}</div>
                </div>
            </Container>
        </Layout>
    );
};

export default Contact;
