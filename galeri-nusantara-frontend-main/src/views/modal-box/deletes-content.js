const deletesContent = (id) => {
    return `
        <h2>Apakah kamu yakin ingin menghapus?</h2>
        <button id="confirm-delete" data-delete="${id}">Ya</button>
        <button id="cancel-delete">Tidak</button>
    `
};

export default deletesContent;