import Config from "../config/config";
import axios from "axios";

const ImageDetail = async (id) => {
    try {
        const endpoint = Config.API_URL +`/images/${id}`;
        const http = await axios.get(endpoint);
        const response = await http.data;
        return response;
    } catch (error) {
        return null;
    }
};

export default ImageDetail;