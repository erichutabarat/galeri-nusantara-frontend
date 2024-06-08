import ContributorDetail from "../../data/contributor-detail";
import dashboardPostCreator from "../../templates/creator/dashboard-post-creator";
import CheckLogin from "../../utils/check-login";

const dashboardPage = async () => {
  const check = CheckLogin();
  if (!check) {
    alert("You are not allowed to be here, please login first");
    window.location.href = "#/login";
    return;
  }

  const data = await ContributorDetail(check);
  const userid = data.data.id;

  // Initial HTML structure
  const initialHtml = `
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
          <h1>Hello There!</h1>
        </div>
        <div class="dashboard-posts" id="dashboard-posts">
          <!-- Posts will be loaded here -->
        </div>
      </div>
    </div>
  `;

  // Perform asynchronous operations and update the DOM
  if (userid) {
    import("../../data/data-budaya")
      .then(module => {
        const dataBudaya = module.default;

        return dataBudaya();
      })
      .then(allPost => {
        const filterByAuthor = allPost.data.filter(item => item.authorId === userid);

        let elements = "";
        if (filterByAuthor.length > 0) {
          const showpost = filterByAuthor.map((item) => dashboardPostCreator(item));
          elements = showpost.join('');
        } else {
          elements = "<h3>You don't have posted articles!</h3>";
        }

        // Update the DOM with the filtered posts
        document.getElementById('dashboard-posts').innerHTML = elements;
      })
      .catch(err => {
        console.error('Failed to fetch posts:', err);
      });
  }

  return initialHtml;
};

export default dashboardPage;