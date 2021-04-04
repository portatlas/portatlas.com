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
        const { response } = error;
        res.status(response?.status || 500).send(error?.message);
    }
}
