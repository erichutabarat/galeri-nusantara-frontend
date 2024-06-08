export default async function Hamburger(){
  document.addEventListener('DOMContentLoaded', () => {
      document.addEventListener('click', async (event) => {
          const hamburger = event.target.closest(".hamburger");
          const navbar = document.getElementById("navbar");
          if(hamburger) {
            navbar.classList.toggle("active");
          }
      });
  });
}