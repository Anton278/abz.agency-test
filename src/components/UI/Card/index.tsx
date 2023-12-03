import Tooltip from "../Tooltip";

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
        <img
          src={photo}
          alt={name}
          width={70}
          height={70}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = "/images/photo-fallback.svg";
          }}
        />
      </div>
      <Tooltip label={name}>
        <h5 className={s.cardTitle}>{name}</h5>
      </Tooltip>
      <p>{position}</p>
      <Tooltip label={email}>
        <p>{email}</p>
      </Tooltip>
      <Tooltip label={phone}>
        <p>{phone}</p>
      </Tooltip>
    </div>
  );
}

export default Card;
