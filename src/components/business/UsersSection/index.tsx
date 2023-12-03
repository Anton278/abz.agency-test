import { useEffect, useState } from "react";

import Button from "../../UI/Button";
import Card from "../../UI/Card";
import { useUsers } from "../../../stores/users";
import Spinner from "../../UI/Spinner";

import s from "./UsersSection.module.scss";

function UsersSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const { users, getUsers, page, totalPages } = useUsers();

  const handleShowMore = async () => {
    try {
      await getUsers(page + 1);
    } catch (err) {}
  };

  useEffect(() => {
    const init = async () => {
      try {
        await getUsers();
      } catch (err) {
        setError("Failed to get users");
      } finally {
        setIsLoading(false);
      }
    };

    init();
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
            {users.map((user) => (
              <Card
                key={user.id}
                photo={user.photo}
                name={user.name}
                position={user.position}
                email={user.email}
                phone={user.phone}
              />
            ))}
          </div>
          <div className={s.showMoreBtnWrapper}>
            {page !== totalPages && (
              <Button onClick={handleShowMore} className={s.showMoreBtn}>
                Show more
              </Button>
            )}
          </div>
        </>
      )}
    </section>
  );
}

export default UsersSection;
