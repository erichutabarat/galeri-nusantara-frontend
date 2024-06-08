const Footer = () => {
    const element = `
    <!--paragraph-->
      <p>Terima Kasih Telah Mengunjungi Website Kami</p>
      <!--social-->
      <div class="social-icons">
        <a href="08877246401"><i class="fa fa-whatsapp"></i></a>
        <a href="https://www.instagram.com/fathurr.ra/"
          ><i class="fa fa-instagram"></i
        ></a>
        <a href="https://www.linkedin.com/in/fathurrahman-al-hafid-a21a7a246/"
          ><i class="fa fa-linkedin"></i
        ></a>
        <a
          href="https://mobile.facebook.com/fathur.rahman.99?eav=AfbnUJluA5KNpgxe8BdZQ-LFK5xBt5Sx2W-FFYvYczT8Lrx7qMxeRL8lmubGwOCPPV0&paipv=0"
          ><i class="fa fa-facebook"></i
        ></a>
      </div>
      <!--copyright-->
      <p class="copyright">Copyright by Capstone Group C624-PS039</p>
    `;
    document.getElementById('footer').innerHTML = element;
};

export default Footer;