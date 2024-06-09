import ContributorSession from "../session/contributor-session";

export default function Logout(){
    document.addEventListener('DOMContentLoaded', () => {
        document.addEventListener('click', async (event) => {
            const logout = event.target.closest("#contributor-logout");
            if(logout) {
              ContributorSession.clearSession();
              alert("Success Logout");
              window.location.href = "#/";
              window.location.reload();
            }
        });
    });
}