import ContributorLogin from "../data/contributor-login";
import ContributorRegister from "../data/contributor-register";
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

const handleRegister = async () => {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    if(username==null || password==null){
        console.error("input not found");
    }
    const result = await ContributorRegister(username, password);
    if(result){
        alert("Register Success");
        window.location.href = "#/login";
    }
    else{
        alert("Something error when register!");
    }
}
export default async function loadEvent(){
    document.addEventListener('DOMContentLoaded', () => {
        document.addEventListener('click', async (event) => {
            // Login
            const ContributorLogin = event.target.closest('#loginbutton');
            if(ContributorLogin){
                handleLogin();
            }
            // Register
            const ContributorRegister = event.target.closest('#registerbutton');
            if(ContributorRegister){
                handleRegister();
            }
        });
    });
}