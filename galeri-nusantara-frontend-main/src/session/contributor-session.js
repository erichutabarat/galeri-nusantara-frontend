const ContributorSession = {
    setSession(session){
        sessionStorage.setItem("contributor-session", session);
    },
    getSession(){
        return sessionStorage.getItem("contributor-session");
    }
};

export default ContributorSession;