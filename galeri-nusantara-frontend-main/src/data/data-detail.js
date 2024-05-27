import Config from "../config/config";

const detailBudaya = async (id) => {
    try {
        const endpoint = '/budaya/' + id;
        const http = await fetch(Config.API_URL+endpoint);
        const response = await http.json();
        return response;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export default detailBudaya;