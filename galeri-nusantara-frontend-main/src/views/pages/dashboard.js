import ModalManager from "../../scripts/modal-manager";
import CheckLogin from "../../utils/check-login";

const dashboardPage = async () => {
    const check = CheckLogin();
    if(!check){
        alert("You are not allowed to be here, please login first");
        window.location.href = "#/login";
    }
    const dates = new Date();
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const datesData = {
        day: dates.getDate(),
        month: monthNames[dates.getMonth()],
        year: dates.getFullYear(),
    };
    ModalManager();
    return `
        <div class="dashboard-sidebar">
            <div class="sidebar" id="sidebar">
                <ul>
                    <li><a href="#/dashboard">Dashboard</a></li>
                    <li><a href="#">Update Contributor</a></li>
                    <li><a id="contributor-logout">Logout</a></li>
                </ul>
            </div>
        <div class="main-content">
            <div class="content">
                <h1>Welcome to the Dashboard, Contributor</h1>
            </div>
            <div class="widget">
                <div class="currentdate">
                    <h5>Today</h5>
                    <span>${datesData.day} ${datesData.month} ${datesData.year}</span>
                </div>
                <div class="contributor-list">
                    <h5>Contributor List</h5>
                    <ul>
                        <li>User 1</li>
                        <li>User 2</li>
                    </ul>
                </div>
            </div>
            <div id="create-post">
                <button id="create-new-post">Buat Postingan Baru</button>
            </div>
            <div id="dashboard-posts" class="dashboard-posts">        
            </div>
        </div>
        </div>
        <div id="modal" class="modalBox">
            <div id="modal-header">
                <div id="modal-title">
                </div>
                <span class="close">&times;</span>
            </div>
            <div id="modal-content">
            </div>
        </div>
        `;
};

export default dashboardPage;
