const updatepostpage = () => {
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
    
    <div class="container">
        <form class="form-container">
            <h2>Basic Form Elements</h2>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" placeholder="Name">
            </div>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" id="email" placeholder="Email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Password">
            </div>
            <div class="form-group">
                <label for="gender">Gender</label>
                <select id="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <div class="form-group">
                <label for="file">File upload</label>
                <div class="file-upload">
                    <input type="file" id="file">
                    <button type="button">Upload</button>
                </div>
            </div>
            <div class="form-group">
                <label for="city">City</label>
                <input type="text" id="city" placeholder="Location">
            </div>
            <div class="form-group">
                <label for="textarea">Textarea</label>
                <textarea id="textarea" rows="4"></textarea>
            </div>
            <div class="form-actions">
                <button type="submit" class="submit-btn">Submit</button>
                <button type="button" class="cancel-btn">Cancel</button>
            </div>
        </form>
    </div>
    </div>
</div>

        `;
  };
  
  export default updatepostpage;