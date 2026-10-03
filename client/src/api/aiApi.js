import axios from "axios";

export const sendMessage = async (messages) => {
    const response = await axios.post(
        "http://localhost:5000/api/ai/chat",
        { messages }
    );

    return response.data.message;
};
