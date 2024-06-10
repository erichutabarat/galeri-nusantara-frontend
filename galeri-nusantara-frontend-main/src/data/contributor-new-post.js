import Config from "../config/config";
import axios from "axios";

const ContributorNewPost = async (token, title, source, description) => {
    try {
        const postData = {
            token: token,
            title: title,
            source: source,
            description: description
        };
        const headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        const endpoint = Config.API_URL +'/budaya';
        const http = await axios.post(endpoint, postData, {headers: headers});
        const response = await http.data;
        return response;
    } catch (error) {
        return null;
    }
};

export default ContributorNewPost;