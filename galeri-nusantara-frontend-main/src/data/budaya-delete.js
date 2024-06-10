import Config from "../config/config";
import axios from "axios";

const BudayaDelete = async (id) => {
    try {
        const postData = {
            id: id
        };
        const headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        const endpoint = Config.API_URL +'/budaya';
        const http = await axios.delete(endpoint, postData, {headers: headers});
        const response = await http.data;
        return response;
    } catch (error) {
        return null;
    }
};

export default  BudayaDelete;