import Config from "../config/config";
import axios from "axios";

const ContributorRegister = async (username, password) => {
    try {
        const loginData = {
            username: username,
            password: password,
            email: null
        };
        const headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        const endpoint = Config.API_URL +'/contributor/register';
        const http = await axios.post(endpoint, loginData, {headers: headers});
        const response = await http.data;
        return response;
    } catch (error) {
        return null;
    }
};

export default ContributorRegister;