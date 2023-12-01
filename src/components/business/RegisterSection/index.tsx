import Button from "../../UI/Button";
import Input from "../../UI/Input";
import s from "./RegisterSection.module.scss";

function RegisterSection() {
  return (
    <section className={s.registerSection}>
      <h2 className={s.sectionTitle}>Working with POST request</h2>
      <form className={s.form}>
        <div className={s.textInputsWrapper}>
          <Input type="text" label="Your name" />
          <Input type="text" label="Email" />
          <Input
            type="text"
            label="Phone"
            helperText="+38 (XXX) XXX - XX - XX"
          />
        </div>
        <div className={s.radioGroup}>
          <p className={s.radioGroupTitle}>Select your position</p>
          <Input type="radio" label="Frontend developer" name="position" />
          <Input type="radio" label="Backend developer" name="position" />
          <Input type="radio" label="Designer" name="position" />
          <Input type="radio" label="QA" name="position" />
        </div>
        <div className={s.formImageUpload}>
          <Input type="file" />
        </div>
        <div className={s.submitBtnWrapper}>
          <Button disabled type="submit">
            Sign up
          </Button>
        </div>
      </form>
    </section>
  );
}

export default RegisterSection;
