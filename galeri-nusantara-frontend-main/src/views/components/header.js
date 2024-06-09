import CheckLogin from "../../utils/check-login";

const Header = async () => {
    const checkLogin = await CheckLogin();
    let dash;
    if(checkLogin){
        dash = `<li>
                    <a href="#/dashboard">
                    <button>Dashboard</button>
                    </a>
                </li>`
    }
    else{
        dash = `<li>
                    <a href="#/login">
                    <button>Login</button>
                    </a>
                </li>`;
    }
    document.getElementById("dash").innerHTML = dash;
};

export default Header;