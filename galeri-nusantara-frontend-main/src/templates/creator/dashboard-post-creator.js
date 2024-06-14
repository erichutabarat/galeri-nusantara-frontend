const dashboardPostCreator = (data) => {
    return `
        <div class="dashboard-post">
            <h3 class="dashboard-post-title">${data.title}</h3>
            <div class="dashboard-post-updated">${data.updatedAt}</div>
            <div>
                <button id="updates" data-index="${data.id}" data-title="${data.title}" data-source="${data.source}" data-description="${data.description}">Update</button>
                <button class="delete" data-index="${data.id}">Delete</button>
            </div>
        </div>
    `;
}

export default dashboardPostCreator;