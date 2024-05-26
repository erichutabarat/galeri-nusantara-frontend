import Config from "../config/config";

const dataBudaya = async () => {
    try {
        const endpoint = '/budaya';
        const http = await fetch(Config.API_URL+endpoint);
        const response = await http.json();
        return response;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export default dataBudaya;