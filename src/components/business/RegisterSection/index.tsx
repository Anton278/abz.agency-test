import { Formik, Form } from "formik";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";

import Button from "../../UI/Button";
import Input from "../../UI/Input";
import { registerSchema } from "../../../utils/registerSchema";
import { usePositions } from "../../../stores/positions";
import Spinner from "../../UI/Spinner";
import tokensService from "../../../services/tokens";
import { useUsers } from "../../../stores/users";
import { CreateUserReq } from "../../../models/requests/createUser";

import s from "./RegisterSection.module.scss";

export type RegisterInputs = {
  name: string;
  email: string;
  phone: string;
  position_id: string;
  photo: File | string;
};

function RegisterSection() {
  const createUser = useUsers((state) => state.createUser);
  const { positions, isLoading, error, getPositions } = usePositions();
  const [isCreating, setIsCreating] = useState(false);
  const [createError, setCreateError] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const initialValues: RegisterInputs = {
    name: "",
    email: "",
    phone: "",
    position_id: "",
    photo: "",
  };

  async function onSubmit(values: RegisterInputs) {
    setCreateError("");
    setIsCreating(true);
    const user: CreateUserReq = {
      email: values.email,
      name: values.name,
      phone: values.phone,
      photo: values.photo as File,
      position_id: values.position_id,
    };
    try {
      const { token } = await tokensService.create();
      await createUser(token, user);
      setIsRegistered(true);
    } catch (err: any) {
      const error = err as AxiosError;
      setCreateError(
        error.response?.status == 409
          ? "User with this phone or email already exist"
          : "Failed to register"
      );
    } finally {
      setIsCreating(false);
    }
  }

  useEffect(() => {
    getPositions();
  }, []);

  return (
    <section className={s.registerSection} id="signup-section">
      <h2 className={s.sectionTitle}>
        {isRegistered
          ? "User successfully registered"
          : "Working with POST request"}
      </h2>
      {isRegistered ? (
        <div className={s.imgWrapper}>
          <img
            src={process.env.PUBLIC_URL + "/images/success-register.webp"}
            alt="Successfully registered"
            width={328}
            height={290}
          />
        </div>
      ) : (
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
                        name="position_id"
                        key={position.id}
                        firstRadioInput={i === 0}
                        value={`${position.id}`}
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
                <Button
                  type="submit"
                  disabled={isLoading || !!error || isCreating}
                >
                  Sign up
                </Button>
              </div>
              {createError && (
                <div className={s.errorMessageWrapper}>
                  <p className={s.errorMessage}>{createError}</p>
                </div>
              )}
            </Form>
          )}
        </Formik>
      )}
    </section>
  );
}

export default RegisterSection;
