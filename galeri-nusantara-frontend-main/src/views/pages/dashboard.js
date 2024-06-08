import CheckLogin from "../../utils/check-login";

const dashboardPage = async () => {
    const check = CheckLogin();
    if(!check){
        alert("You are not allowed to be here, please login first");
        window.location.href = "#/login";
    }
    return `
        <div class="dashboard-sidebar">
        <div class="sidebar" id="sidebar">
            <ul>
                <li><a href="#/dashboard">Dashboard</a></li>
                <li><a href="#">Update Contributor</a></li>
                <li><a>Logout</a></li>
            </ul>
        </div>
        <div class="main-content">
            <div class="content">
                <h1>Welcome to the Dashboard, Contributor</h1>
            </div>
            <div id="dashboard-posts" class="dashboard-posts">        
            </div>
        </div>
        </div>
        `;
};

export default dashboardPage;
