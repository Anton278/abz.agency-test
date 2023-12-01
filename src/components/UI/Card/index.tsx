import s from "./Card.module.scss";

function Card() {
  return (
    <div className={s.card}>
      <div className={s.cardImgWrapper}>
        <img
          src="/images/person.png"
          alt="Salvador Stewart Flynn Thomas Salva Salve"
          width={70}
          height={70}
        />
      </div>
      <h5
        className={s.cardTitle}
        data-hello="Salvador Stewart Flynn Thomas Salva Salvedor Ilya"
      >
        Salvador Stewart Flynn Thomas Salva Salvedor Ilya
      </h5>
      <p>Leading specialist of the department of center bla bla bla</p>
      <p>frontend_develop@gmail.com</p>
      <p>+38 (098) 278 44 24</p>
    </div>
  );
}

export default Card;
