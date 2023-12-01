import Button from "../../UI/Button";

import s from "./TopSection.module.scss";

function TopSection() {
  return (
    <section className={s.topSection}>
      <div className={s.topSectionInner}>
        <h1 className={s.title}>Test assignment for front-end developer</h1>
        <p className={s.subtitle}>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <Button>Sign up</Button>
      </div>
    </section>
  );
}

export default TopSection;
