import { Formik, Form } from "formik";

import Button from "../../UI/Button";
import Input from "../../UI/Input";
import { registerSchema } from "../../../utils/registerSchema";

import s from "./RegisterSection.module.scss";

export type RegisterInputs = {
  name: string;
  email: string;
  phone: string;
  position: string;
  photo: string;
};

function RegisterSection() {
  const initialValues: RegisterInputs = {
    name: "",
    email: "",
    phone: "",
    position: "Frontend developer",
    photo: "",
  };

  async function onSubmit(values: RegisterInputs) {
    console.log(values);
  }

  return (
    <section className={s.registerSection} id="signup-section">
      <h2 className={s.sectionTitle}>Working with POST request</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form className={s.form}>
            <div className={s.textInputsWrapper}>
              <Input
                type="text"
                label="Your name"
                name="name"
                error={errors.name}
                touched={touched.name}
              />
              <Input
                type="text"
                label="Email"
                name="email"
                error={errors.email}
                touched={touched.email}
              />
              <Input
                type="text"
                label="Phone"
                helperText="+38 (XXX) XXX - XX - XX"
                name="phone"
                error={errors.phone}
                touched={touched.phone}
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
              <Input
                type="file"
                setFieldValue={setFieldValue}
                error={errors.photo}
                touched={touched.photo}
              />
            </div>
            <div className={s.submitBtnWrapper}>
              <Button type="submit">Sign up</Button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
}

export default RegisterSection;
