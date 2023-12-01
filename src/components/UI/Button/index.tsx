import s from "./Button.module.scss";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: string;
};

function Button({ children, ...otherProps }: ButtonProps) {
  return (
    <button className={s.button} {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
