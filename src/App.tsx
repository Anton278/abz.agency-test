import s from "./App.module.scss";

function App() {
  return (
    <>
      <header>
        <div className={s.container}>
          <div className={s.headerInner}>
            <img src="/images/logo.svg" alt="logo" width={104} height={26} />
            <div className={s.headerButtons}>
              <button className={s.button}>Users</button>
              <button className={s.button}>Sign up</button>
            </div>
          </div>
        </div>
      </header>
      <main className={s.main}>
        <section className={s.topSection}>
          <div className={s.topSectionInner}>
            <h1 className={s.title}>Test assignment for front-end developer</h1>
            <p className={s.subtitle}>
              What defines a good front-end developer is one that has skilled
              knowledge of HTML, CSS, JS with a vast understanding of User
              design thinking as they'll be building web interfaces with
              accessibility in mind. They should also be excited to learn, as
              the world of Front-End Development keeps evolving.
            </p>
            <button className={s.button}>Sign up</button>
          </div>
        </section>
        <div className={s.container}>
          <section className={s.usersSection}>
            <h2 className={s.sectionTitle}>Working with GET request</h2>
            <div className={s.cardsWrapper}>
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
                <p>
                  Leading specialist of the department of center bla bla bla
                </p>
                <p>frontend_develop@gmail.com</p>
                <p>+38 (098) 278 44 24</p>
              </div>
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
                <p>
                  Leading specialist of the department of center bla bla bla
                </p>
                <p>frontend_develop@gmail.com</p>
                <p>+38 (098) 278 44 24</p>
              </div>
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
                <p>
                  Leading specialist of the department of center bla bla bla
                </p>
                <p>frontend_develop@gmail.com</p>
                <p>+38 (098) 278 44 24</p>
              </div>
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
                <p>
                  Leading specialist of the department of center bla bla bla
                </p>
                <p>frontend_develop@gmail.com</p>
                <p>+38 (098) 278 44 24</p>
              </div>
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
                <p>
                  Leading specialist of the department of center bla bla bla
                </p>
                <p>frontend_develop@gmail.com</p>
                <p>+38 (098) 278 44 24</p>
              </div>
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
                <p>
                  Leading specialist of the department of center bla bla bla
                </p>
                <p>frontend_develop@gmail.com</p>
                <p>+38 (098) 278 44 24</p>
              </div>
            </div>
            <div className={s.showMoreBtnWrapper}>
              <button className={s.button}>Show more</button>
            </div>
          </section>
          <section className={s.registerSection}>
            <h2 className={s.sectionTitle}>Working with POST request</h2>
            <form className={s.form}>
              <div className={s.textInputsWrapper}>
                <label className={s.textInputWrapper}>
                  <input type="text" className={s.textInput} />
                  <span>Your name</span>
                </label>
                <label className={s.textInputWrapper}>
                  <input type="text" className={s.textInput} />
                  <span>Email</span>
                </label>
                <label className={s.textInputWrapper}>
                  <input type="text" className={s.textInput} />
                  <span>Phone</span>
                </label>
                <p className={s.inpHelperText}>+38 (XXX) XXX - XX - XX</p>
              </div>
              <div className={s.radioGroup}>
                <p className={s.radioGroupTitle}>Select your position</p>
                <label className={s.radioInp}>
                  <input type="radio" name="position" />
                  <span className={s.checkmark}></span>
                  <span>Frontend developer</span>
                </label>
                <label className={s.radioInp}>
                  <input type="radio" name="position" />
                  <span className={s.checkmark}></span>
                  <span>Backend developer</span>
                </label>
                <label className={s.radioInp}>
                  <input type="radio" name="position" />
                  <span className={s.checkmark}></span>
                  <span>Designer</span>
                </label>
                <label className={s.radioInp}>
                  <input type="radio" name="position" />
                  <span className={s.checkmark}></span>
                  <span>QA</span>
                </label>
              </div>
              <div className={s.formImageUpload}>
                <label className={s.inputFile}>
                  <input type="file" />
                  <div>
                    <button className={s.uploadBtn} type="button">
                      Upload
                    </button>
                    <div className={s.uploadText}>Upload your photo</div>
                  </div>
                </label>
              </div>
              <div className={s.submitBtnWrapper}>
                <button className={s.button} disabled type="submit">
                  Sign up
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
