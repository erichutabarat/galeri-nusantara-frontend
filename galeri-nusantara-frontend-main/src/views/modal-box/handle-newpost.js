import ContributorNewPost from "../../data/contributor-new-post";
import CheckLogin from "../../utils/check-login"

const handleNewPost = async (event) => {
    event.preventDefault();
    const token = CheckLogin();
    const title = document.getElementById("new-post-title").value;
    const source = document.getElementById("new-post-source").value;
    const description = document.getElementById("new-post-description").value;
    if(!token || !title || !source || !description){
        alert("Data cannot be empty!");
    }
    else{
        const result = await ContributorNewPost(token, title, source, description);
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

export default handleNewPost;