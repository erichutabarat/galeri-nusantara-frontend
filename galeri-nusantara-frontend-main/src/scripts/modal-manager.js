import deletesContent from "../views/modal-box/deletes-content";
import handleNewPost from "../views/modal-box/handle-newpost";
import newPost from "../views/modal-box/new-post-content";

const openModal = (event) => {
    event.preventDefault();
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
    modalContent.innerHTML = contents;
}
export default function ModalManager(){
    document.addEventListener('DOMContentLoaded', () => {
        document.addEventListener('click', async (event) => {
            const deletes = event.target.closest('.delete');
            if(deletes){
                setModal(deletesContent());
                openModal(event);
            }
            const close = event.target.closest('.close');
            if(close){
                closeModal();
            }
            const cancel = event.target.closest('#cancel-delete');
            if(cancel){
                closeModal();
            }
            const newpost = event.target.closest("#create-new-post");
            if(newpost){
                setModal(newPost());
                openModal(event);
            }
            const create = event.target.closest("#create-now");
            if(create){
                event.preventDefault();
                await handleNewPost(event);
                closeModal();
            }
        });
    });
}