import dataBudaya from "../../data/data-budaya";
import CardCreator from "../../templates/creator/card-creator";

const homepage = async () => {
  return `
    <header>
      <div class="head">
        <h1>
        Galeri Nusantara: <br />
        Menyelami Kekayaan Budaya Indonesia
        </h1>
        <p>
        Selamat datang di Galeri Nusantara, pusat informasi dan eksplorasi budaya Indonesia. <br /> 
        Temukan keindahan dan keragaman warisan budaya yang meliputi seni, tradisi, sejarah, dan kehidupan sehari-hari di seluruh Indonesia. <br />
        Melalui artikel, dan multimedia interaktif, kami mengajak Anda untuk menyelami kekayaan budaya nusantara yang menakjubkan dan mendalam.<br /> 
        Mari bergabung dengan kami dalam merayakan dan melestarikan kebudayaan Indonesia yang luar biasa ini.
        </p>
        <a
          href="https://kwriu.kemdikbud.go.id/info-budaya-indonesia/warisan-budaya-tak-benda-indonesia/"
          target="_blank"
        >
          <button>Show More</button>
        </a>
      </div>
    <div class="img">
      <img src="../pict-header.webp" alt="Galeri Nusantara" width="400" height="400" />
    </div>
  </header>
  <main id="main">
  <h1>Jelajahi Budaya</h1>
  <section id="budaya-list" class="grid">
  </section>
  <section class="image-and-form">
      <div class="image">
          <img src="../pict-question.webp" width="400" height="320" alt="Big Image">
      </div>
      <div class="form">
          <h2>Mari Bergabung Menjadi Kontributor</h2>
          <form>
          <label for="nama">Nama:</label>
          <input type="text" id="nama" name="nama" placeholder="Masukkan Nama Lengkap" required>                
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Masukkan Email" required>                
          <label for="nama">Isi:</label>
          <input type="textarea" id="isi" name="Isi" placeholder="Masukkan Isi Deskripsi" required>                
              <button type="submit">Subscribe</button>
          </form>
      </div>
  </section>
    `;
};

export default homepage;
