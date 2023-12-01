import Button from "../../UI/Button";
import Container from "../../UI/Container";

import s from "./Header.module.scss";

function Header() {
  return (
    <header>
      <Container>
        <div className={s.headerInner}>
          <img src="/images/logo.svg" alt="logo" width={104} height={26} />
          <div className={s.headerButtons}>
            <Button>Users</Button>
            <Button>Sign up</Button>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
