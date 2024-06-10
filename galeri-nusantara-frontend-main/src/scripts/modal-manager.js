const deletesContent = () => {
    return `
        <h2>Apakah kamu yakin ingin menghapus?</h2>
        <button>Ya</button>
        <button>Tidak</button>
    `
};

const openModal = () => {
    const modal = document.querySelector(".modalBox");
    modal.style.display = "block";
}
const closeModal = () => {
    const modal = document.querySelector(".modalBox");
    const modalContent = document.getElementById("modal-content");
    modalContent.innerHTML = "";
    modal.style.display = "none";
}
const setModal = (contents) => {
    const modalContent = document.getElementById("modal-content");
    modalContent.innerHTML = contents();
}
export default function ModalManager(){
    document.addEventListener('DOMContentLoaded', () => {
        document.addEventListener('click', async (event) => {
            const deletes = event.target.closest('.delete');
            if(deletes){
                setModal(deletesContent);
                openModal();
            }
            const close = event.target.closest('.close');
            if(close){
                closeModal();
            }
        });
    });
}