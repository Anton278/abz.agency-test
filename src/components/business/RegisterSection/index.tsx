import { Formik, Form } from "formik";
import { useEffect } from "react";

import Button from "../../UI/Button";
import Input from "../../UI/Input";
import { registerSchema } from "../../../utils/registerSchema";
import { usePositions } from "../../../stores/positions";
import Spinner from "../../UI/Spinner";

import s from "./RegisterSection.module.scss";

export type RegisterInputs = {
  name: string;
  email: string;
  phone: string;
  position: string;
  photo: string;
};

function RegisterSection() {
  const { positions, isLoading, error, getPositions } = usePositions();

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

  useEffect(() => {
    getPositions();
  }, []);

  return (
    <section className={s.registerSection} id="signup-section">
      <h2 className={s.sectionTitle}>Working with POST request</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, setFieldValue, values }) => (
          <Form className={s.form}>
            <div className={s.textInputsWrapper}>
              <Input
                type="text"
                label="Your name"
                name="name"
                error={errors.name}
                touched={touched.name}
                value={values.name}
              />
              <Input
                type="text"
                label="Email"
                name="email"
                error={errors.email}
                touched={touched.email}
                value={values.email}
              />
              <Input
                type="text"
                label="Phone"
                helperText="+38 (XXX) XXX - XX - XX"
                name="phone"
                error={errors.phone}
                touched={touched.phone}
                value={values.phone}
              />
            </div>

            <div className={s.radioGroup}>
              <p className={s.radioGroupTitle}>Select your position</p>
              {error ? (
                <p className={s.errorMessage}>{error}</p>
              ) : isLoading ? (
                <div className={s.spinnerWrapper}>
                  <Spinner />
                </div>
              ) : (
                positions.map((position, i) => {
                  return (
                    <Input
                      type="radio"
                      label={position.name}
                      name="position"
                      key={position.id}
                      firstRadioInput={i === 0}
                      value={position.name}
                      setFieldValue={setFieldValue}
                    />
                  );
                })
              )}
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
              <Button type="submit" disabled={isLoading || !!error}>
                Sign up
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
}

export default RegisterSection;
