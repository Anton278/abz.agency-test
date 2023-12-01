import Button from "../../UI/Button";
import Card from "../../UI/Card";

import s from "./UsersSection.module.scss";

function UsersSection() {
  return (
    <section className={s.usersSection}>
      <h2 className={s.sectionTitle}>Working with GET request</h2>
      <div className={s.cardsWrapper}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className={s.showMoreBtnWrapper}>
        <Button>Show more</Button>
      </div>
    </section>
  );
}

export default UsersSection;
