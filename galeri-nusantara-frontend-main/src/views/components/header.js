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
    const element = `
        <nav>
            <img class="logo" src="../logo.png" height="60px" />
            <div class="nav-container">
                <div class="hamburger" id="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
                </div>
                <ul class="navbar" id="navbar">
                <li>
                    <a href="#/">Home</a>
                </li>
                <li>
                    <a href="#/favorite">Favorite</a>
                </li>
                <li>
                    <a href="#/about">About Us</a>
                </li>
                ${dash}
                </ul>
            </div>
        </nav>
    `;
    document.getElementById("header").innerHTML = element;
};

export default Header;