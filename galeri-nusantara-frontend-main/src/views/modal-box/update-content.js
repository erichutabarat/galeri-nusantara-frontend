const updateContent = (data) => {
    return `
        <div id="update-content">
            <button>Update Gambar</button>
            <form id="form-update-content" onsubmit="return false;" data-index="${data.id}">
                <label for="update-title">Judul:</label>
                <input type="text" name="update-title" id="update-title" value="${data.titles}"/>
                <label for="update-source">Source:</label>
                <input type="text" name="update-source" id="update-source" value="${data.sources}"/>
                <label for="update-description">Description:</label>
                <textarea name="update-description" id="update-description">${data.descriptions}</textarea>
                <button id="update-now">Update</button>            
            </form>
        </div>
    `
};

export default updateContent;