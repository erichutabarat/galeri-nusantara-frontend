import Config from "../config/config";
import axios from "axios";

const ContributorUpdatePost = async (data, id) => {
    try {
        const ID = (typeof id === "number") ? id : parseInt(id);
        const headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        const endpoint = Config.API_URL +'/budaya/' + ID;
        const http = await axios.put(endpoint, data, {headers: headers});
        const response = await http.data;
        return response;
    } catch (error) {
        return null;
    }
};

export default ContributorUpdatePost;