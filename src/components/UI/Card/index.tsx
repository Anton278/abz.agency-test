import s from "./Card.module.scss";

type CardProps = {
  photo: string;
  name: string;
  position: string;
  email: string;
  phone: string;
};

function Card({ photo, name, position, email, phone }: CardProps) {
  return (
    <div className={s.card}>
      <div className={s.cardImgWrapper}>
        <img src={photo} alt={name} width={70} height={70} />
      </div>
      <h5
        className={s.cardTitle}
        data-hello="Salvador Stewart Flynn Thomas Salva Salvedor Ilya"
      >
        {name}
      </h5>
      <p>{position}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
}

export default Card;
