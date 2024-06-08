import ContributorDetail from "../../data/contributor-detail";
import dataBudaya from "../../data/data-budaya";
import dashboardPostCreator from "../../templates/creator/dashboard-post-creator";
import CheckLogin from "../../utils/check-login";

const dashboardPage = async () => {
  const check = CheckLogin();
  if(!check){
    alert("You are not allowed to be here, please login first");
    window.location.href = "#/login";
  }
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
        <div class="dashboard-posts">
            ${elements}            
        </div>
    </div>
    </div>
    `;
};

export default dashboardPage;
