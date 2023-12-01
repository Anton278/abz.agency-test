import s from "./Input.module.scss";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: string;
};

function Input({ type, label, helperText, name, ...otherProps }: InputProps) {
  switch (type) {
    case undefined:
    case "text":
      return (
        <>
          <label className={s.textInputWrapper}>
            <input type="text" className={s.textInput} {...otherProps} />
            <span>{label}</span>
          </label>
          {helperText && <p className={s.inpHelperText}>{helperText}</p>}
        </>
      );

    case "radio":
      return (
        <label className={s.radioInp}>
          <input type="radio" name={name} {...otherProps} />
          <span className={s.checkmark}></span>
          <span>{label}</span>
        </label>
      );

    case "file":
      return (
        <label className={s.inputFile}>
          <input type="file" accept="image/*" />
          <div>
            <button className={s.uploadBtn} type="button">
              Upload
            </button>
            <div className={s.uploadText}>Upload your photo</div>
          </div>
        </label>
      );

    default:
      return null;
  }
}

export default Input;
