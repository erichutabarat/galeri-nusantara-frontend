import ContributorNewPost from "../../data/contributor-new-post";
import ContributorUpdatePost from "../../data/contributor-update-post";
import CheckLogin from "../../utils/check-login"

const handleUpdate = async (event) => {
    event.preventDefault();
    const token = CheckLogin();
    const title = document.getElementById("update-title").value;
    const form = document.getElementById("form-update-content");
    const id = form.getAttribute("data-index");
    const source = document.getElementById("update-source").value;
    const description = document.getElementById("update-description").value;
    if(!token || !title || !source || !description){
        alert("Data cannot be empty!");
    }
    else{
        const dataPOST = {
            token: token,
            title: title,
            source: source,
            description: description
        };
        const result = await ContributorUpdatePost(dataPOST, id);
        if(!result){
            alert("Failed when create new post!");
            console.log(result);
        }
        else{
            alert("Success!");
            window.location.reload();
        }
    }
};

export default handleUpdate;