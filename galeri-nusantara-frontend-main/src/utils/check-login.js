import ContributorSession from "../session/contributor-session"

const CheckLogin = () => {
    const session = ContributorSession.getSession("contributor-session");
    if(!session){
        alert("You are not allowed to be here, please login first");
        window.location.href = "#/login";
    }
};

export default CheckLogin;