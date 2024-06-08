import ContributorSession from "../session/contributor-session"

const CheckLogin = () => {
    const session = ContributorSession.getSession("contributor-session");
    if(!session){
        return false;
    }
    return session;
};

export default CheckLogin;