import ContributorDetail from "../../data/contributor-detail";
import dataBudaya from "../../data/data-budaya";
import ContributorSession from "../../session/contributor-session";
import dashboardPostCreator from "../../templates/creator/dashboard-post-creator";
import CheckLogin from "../../utils/check-login";

const dashboardAfter = async () => {
    const check = CheckLogin();
    if(!check){
        alert("You are not allowed to be here, please login first");
        window.location.href = "#/login";
    }
    document.addEventListener('DOMContentLoaded', () => {
        document.addEventListener('click', async (event) => {
            const logout = event.target.closest("#contributor-logout");
            if(logout) {
              ContributorSession.clearSession();
              alert("Success Logout");
              window.location.href = "#/";
            }
        });
    });
    const data = await ContributorDetail(check);
    const userid = data.data.id;
    let elements;
    if(userid){
        const allPost = await dataBudaya();
        const filterByAuthor = allPost.data.filter(item => item.authorId===userid);
        if(filterByAuthor){
            const showpost = filterByAuthor.map((item) => dashboardPostCreator(item));
            elements = showpost;
        }
        else{
            elements = "<h3>You dont have posted article!</h3>";
        }
    }
    document.getElementById("dashboard-posts").innerHTML = elements;
};

export default dashboardAfter;