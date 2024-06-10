import Config from "../config/config";
import axios from "axios";

const BudayaDelete = async (token, id) => {
    try {
        const ID = (typeof id === "number" ? id : parseInt(id));
        const postData = new URLSearchParams({
            token: token,
            id: ID
        }).toString();
        console.log(postData);
        
        const headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        
        const endpoint = Config.API_URL + '/budaya';
        
        // axios.delete method signature: axios.delete(url[, config])
        const response = await axios.delete(endpoint, {
            data: postData,
            headers: headers
        });

        return response.data;
    } catch (error) {
        return error;
    }
};

export default BudayaDelete;
