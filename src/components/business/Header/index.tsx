import Button from "../../UI/Button";
import Container from "../../UI/Container";

import s from "./Header.module.scss";

function Header() {
  return (
    <header>
      <Container>
        <div className={s.headerInner}>
          <img
            src={process.env.PUBLIC_URL + "/images/logo.svg"}
            alt="logo"
            width={104}
            height={26}
          />
          <div className={s.headerButtons}>
            <Button as="a" href="#users-section">
              Users
            </Button>
            <Button as="a" href="#signup-section">
              Sign up
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
