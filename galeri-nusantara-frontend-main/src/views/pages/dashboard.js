import CheckLogin from "../../utils/check-login";

const dashboardPage = () => {
  const check = CheckLogin();
  return `
    <div class="dashboard-sidebar">
    <div class="sidebar" id="sidebar">
    <ul>
        <li><a href="#/dashboard">Dashboard</a></li>
        <li><a href="#">Daftar Postingan</a></li>
        <li><a href="#">Update Contributor</a></li>
        <li><a href="#/update-postingan">Update Postingan</a></li>
    </ul>
</div>
    <div class="main-content">
    <div class="content">
        <h1>Welcome to the Dashboard, Contributor</h1>
        <p>This is a simple responsive sidebar example.</p>
    </div>
    <div class="dashboard">
    <div class="cards-dashboard">
        <div class="card-dashboard">
            <div class="card-content-dashboard">
                <div class="card-text">
                    <p class="amount">$12.34 <span class="growth positive">+3.5%</span></p>
                    <p class="description">Potential growth</p>
                </div>
                <div class="card-icon">
                    <span class="icon positive">&#x2191;</span>
                </div>
            </div>
        </div>
        <div class="card-dashboard">
            <div class="card-content-dashboard">
                <div class="card-text">
                    <p class="amount">$17.34 <span class="growth positive">+11%</span></p>
                    <p class="description">Revenue current</p>
                </div>
                <div class="card-icon">
                    <span class="icon positive">&#x2191;</span>
                </div>
            </div>
        </div>
        <div class="card-dashboard">
            <div class="card-content-dashboard">
                <div class="card-text">
                    <p class="amount">$12.34 <span class="growth negative">-2.4%</span></p>
                    <p class="description">Daily income</p>
                </div>
                <div class="card-icon">
                    <span class="icon negative">&#x2193;</span>
                </div>
            </div>
        </div>
        <div class="card-dashboard">
            <div class="card-content-dashboard">
                <div class="card-text">
                    <p class="amount">$31.53 <span class="growth positive">+3.5%</span></p>
                    <p class="description">Expense current</p>
                </div>
                <div class="card-icon">
                    <span class="icon positive">&#x2191;</span>
                </div>
            </div>
        </div>
    </div>
    <div class="messages-container">
    <div class="messages-header">
        <h2>Messages</h2>
        <a href="#" class="view-all">View all</a>
    </div>
    <div class="message">
        <img src="avatar1.jpg" alt="Leonard" class="avatar">
        <div class="message-content">
            <div class="message-header">
                <span class="sender">Leonard</span>
                <span class="time">5 minutes ago</span>
            </div>
            <div class="message-text">Well, it seems to be working now.</div>
        </div>
    </div>
    <div class="message">
        <img src="avatar2.jpg" alt="Luella Mills" class="avatar">
        <div class="message-content">
            <div class="message-header">
                <span class="sender">Luella Mills</span>
                <span class="time">10 Minutes Ago</span>
            </div>
            <div class="message-text">Well, it seems to be working now.</div>
        </div>
    </div>
    <div class="message">
        <img src="avatar3.jpg" alt="Ethel Kelly" class="avatar">
        <div class="message-content">
            <div class="message-header">
                <span class="sender">Ethel Kelly</span>
                <span class="time">2 Hours Ago</span>
            </div>
            <div class="message-text">Please review the tickets</div>
        </div>
    </div>
    <div class="message">
        <img src="avatar4.jpg" alt="Herman May" class="avatar">
        <div class="message-content">
            <div class="message-header">
                <span class="sender">Herman May</span>
                <span class="time">4 Hours Ago</span>
            </div>
            <div class="message-text">Thanks a lot. It was easy to fix it.</div>
        </div>
    </div>
</div>

    <div class="table-container">
        <h2>Order Status</h2>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Client Name</th>
                    <th>Order No</th>
                    <th>Project</th>
                    <th>Payment Mode</th>
                    <th>Start Date</th>
                    <th>Payment Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="checkbox"></td>
                    <td><img class="img-table" src="avatar1.jpg" alt="Henry Klein"> Henry Klein</td>
                    <td>02312</td>
                    <td>Dashboard</td>
                    <td>Credit card</td>
                    <td>04 Dec 2019</td>
                    <td><span class="status approved">Approved</span></td>
                </tr>
                <tr>
                    <td><input type="checkbox"></td>
                    <td><img class="img-table" src="avatar2.jpg" alt="Estella Bryan"> Estella Bryan</td>
                    <td>02312</td>
                    <td>Website</td>
                    <td>Cash on delivered</td>
                    <td>04 Dec 2019</td>
                    <td><span class="status pending">Pending</span></td>
                </tr>
                <tr>
                    <td><input type="checkbox"></td>
                    <td><img class="img-table" src="avatar3.jpg" alt="Lucy Abbott"> Lucy Abbott</td>
                    <td>02312</td>
                    <td>App design</td>
                    <td>Credit card</td>
                    <td>04 Dec 2019</td>
                    <td><span class="status rejected">Rejected</span></td>
                </tr>
                <tr>
                    <td><input type="checkbox"></td>
                    <td><img class="img-table" src="avatar4.jpg" alt="Peter Gill"> Peter Gill</td>
                    <td>02312</td>
                    <td>Development</td>
                    <td>Online Payment</td>
                    <td>04 Dec 2019</td>
                    <td><span class="status approved">Approved</span></td>
                </tr>
                <tr>
                    <td><input type="checkbox"></td>
                    <td><img class="img-table" src="avatar5.jpg" alt="Sallie Reyes"> Sallie Reyes</td>
                    <td>02312</td>
                    <td>Website</td>
                    <td>Credit card</td>
                    <td>04 Dec 2019</td>
                    <td><span class="status approved">Approved</span></td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
</div>
</div>
    `;
};

export default dashboardPage;
