import Config from "../config/config";
import axios from "axios";

const ContributorDetail = async (token) => {
    try {
        const contributorData = {
            token: token
        };
        const headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        const endpoint = Config.API_URL +'/contributor/detail';
        const http = await axios.post(endpoint, contributorData, {headers: headers});
        const response = await http.data;
        return response;
    } catch (error) {
        return null;
    }
};

export default ContributorDetail;