import Config from "../config/config";
import axios from "axios";

const ContributorNewPost = async (data) => {
    try {
        let postData;
        if(data.id){
            postData = {
                token: data.token,
                id: data.id,
                title: data.title,
                source: data.source,
                description: data.description
            };
        }
        else{
            postData = {
                token: data.token,
                title: data.title,
                source: data.source,
                description: data.description
            };
        }
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