import Banner from "../../assets/banner.png";
import '../../assets/style/contact.css';
export default function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Banner})` }}
      ></div>
      <div className="rightSide">
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>AD Soyad</label>
          <input
            type="text"
            name="name"
            placeholder="Lütfen adınız soyadınızı giriniz..."
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Lütfen emailinizi  giriniz..."
          />
          <label>Mesajınız</label>
          <textarea
         rows="6"
            name="message"
            placeholder="Lütfen mesajınızı giriniz..."
          ></textarea>
        </form>
      </div>
    </div>
  );
}
