import { useEffect } from "react";

import Button from "../../UI/Button";
import Card from "../../UI/Card";
import { useUsers } from "../../../stores/users";
import Spinner from "../../UI/Spinner";

import s from "./UsersSection.module.scss";

function UsersSection() {
  const { users, isLoading, error, getUsers } = useUsers();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <section className={s.usersSection} id="users-section">
      <h2 className={s.sectionTitle}>Working with GET request</h2>
      {error ? (
        <p className={s.errorMessage}>{error}</p>
      ) : isLoading ? (
        <div className={s.spinnerWrapper}>
          <Spinner />
        </div>
      ) : (
        <>
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
        </>
      )}
    </section>
  );
}

export default UsersSection;
