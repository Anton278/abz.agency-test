import { Field, FormikErrors } from "formik";
import { RegisterInputs } from "../../business/RegisterSection";

import s from "./Input.module.scss";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: string;
  error?: string;
  touched?: boolean;
  setFieldValue?: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void | FormikErrors<RegisterInputs>>;
};

function Input({
  type,
  label,
  helperText,
  name,
  error,
  touched,
  setFieldValue,
  ...otherProps
}: InputProps) {
  switch (type) {
    case undefined:
    case "text":
      return (
        <div>
          <label className={s.textInputWrapper}>
            <Field
              type="text"
              className={`${s.textInput} ${
                error && touched ? s.errorTextInput : ""
              }`}
              name={name}
            />
            <span>{label}</span>
          </label>
          {error && touched ? (
            <p className={s.errorMessage}>{error}</p>
          ) : helperText ? (
            <p className={s.inpHelperText}>{helperText}</p>
          ) : null}
        </div>
      );

    case "radio":
      return (
        <label className={s.radioInp}>
          <Field type="radio" name={name} value={label} {...otherProps} />
          <span className={s.checkmark}></span>
          <span>{label}</span>
        </label>
      );

    case "file":
      return (
        <div>
          <label
            className={`${s.inputFile} ${
              error && touched ? s.errorInputFile : ""
            }`}
          >
            <input
              type="file"
              accept=".jpg, .jpeg"
              onChange={(e) =>
                setFieldValue &&
                setFieldValue("photo", e.currentTarget.files?.[0])
              }
            />
            <div>
              <button className={s.uploadBtn} type="button">
                Upload
              </button>
              <div className={s.uploadText}>Upload your photo</div>
            </div>
          </label>
          {error && touched ? <p className={s.errorMessage}>{error}</p> : null}
        </div>
      );

    default:
      return null;
  }
}

export default Input;
