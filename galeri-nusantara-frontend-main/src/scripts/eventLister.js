import ContributorLogin from "../data/contributor-login";
import SaveLogin from "../utils/save-login";

const handleLogin = async () => {

    const username = document.getElementById('contributor-username').value;
    const password = document.getElementById('contributor-password').value;

    if(username==null || password==null){
        console.error("input not found");
    }
    const result = await ContributorLogin(username, password);
    if(result){
        alert("Login Success");
        SaveLogin(result);
    }
    else{
        alert("Username or Password Incorrect");
    }
}

export default async function loadEvent(){
    document.addEventListener('DOMContentLoaded', () => {
        document.addEventListener('click', async (event) => {
            const ContributorLogin = event.target.closest('#loginbutton');
            if (ContributorLogin){
                handleLogin();
            }
        });
    });
}