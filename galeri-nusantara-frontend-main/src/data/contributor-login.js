import Config from "../config/config";
import axios from "axios";

const ContributorLogin = async (username, password) => {
    try {
        const loginData = {
            username: username,
            password: password
        };
        const headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        const endpoint = Config.API_URL +'/contributor/login';
        const http = await axios.post(endpoint, loginData, {headers: headers});
        const response = await http.data;
        return response;
    } catch (error) {
        return null;
    }
};

export default ContributorLogin;