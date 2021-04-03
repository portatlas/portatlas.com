import axios from "axios";

export default async function (req, res) {
    try {
        const { body } = req;
        const response = await axios.post(process.env.CONTACT_URL, body, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });

        const { data } = response;
        res.status(response.status).send(data);
    } catch (error) {
        res.status(200).send(error.message);
    }
}
