import ContributorSession from "../session/contributor-session";

const SaveLogin = (data) => {
    if(data.status==="Success" && data.data.hasOwnProperty("token")){
        ContributorSession.setSession(data.data.token);
        window.location.href = "#/dashboard";
    }
    else{
        alert("Failed to save login");
    }
};

export default SaveLogin;