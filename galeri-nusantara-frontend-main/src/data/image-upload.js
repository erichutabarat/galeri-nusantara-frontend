import Config from "../config/config";
import axios from "axios";

const ImageUpload = async (formData) => {
    try {
        const headers = {
            "Content-Type": "multipart/form-data;"
        };
        const endpoint = Config.API_URL +'/images/upload';
        const http = await axios.post(endpoint, formData, {headers: headers});
        const response = await http.data;
        return response;
    } catch (error) {
        return null;
    }
};

export default ImageUpload;