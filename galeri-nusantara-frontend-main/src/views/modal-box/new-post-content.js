const newPost = () => {
    return `
        <div id="form-new-post">
            <form onsubmit="return false;">
                <label for="new-post-title">Judul: </label>
                <input type="text" name="new-post-title" id="new-post-title" placeholder="">
                <label for="new-post-source">Sumber: </label>
                <input type="text" name="new-post-source" id="new-post-source" placeholder="">
                <label for="new-post-description">Description:</label>
                <textarea name="new-post-description" id="new-post-description" placeholder="Masukkan konten"></textarea>
                <button id="create-now">Buat</button>
            </form>
        </div>
    `
};


export default newPost;