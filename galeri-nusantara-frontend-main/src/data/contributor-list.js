import Config from "../config/config";
import axios from "axios";

const ContributorList = async () => {
    try {
        const headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        const endpoint = Config.API_URL +'/contributor';
        const http = await axios.get(endpoint, {headers: headers});
        const response = await http.data;
        return response;
    } catch (error) {
        return null;
    }
};

export default ContributorList;