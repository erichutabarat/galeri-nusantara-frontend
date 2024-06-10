import BudayaDelete from "../../data/budaya-delete";
import CheckLogin from "../../utils/check-login"
const handleDelete = async (id) => {
    const token = await CheckLogin();
    const data = await BudayaDelete(token, id);
    if(data.status==="Success"){
        return true;
    }
    else{
        return false;
    }
};

export default handleDelete;