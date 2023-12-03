import s from "./Button.module.scss";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: string;
  as?: "button" | "a";
  href?: string;
};

function Button({
  children,
  as = "button",
  href,
  className,
  ...otherProps
}: ButtonProps) {
  return as === "button" ? (
    <button className={`${s.button} ${className}`} {...otherProps}>
      {children}
    </button>
  ) : (
    <a href={href} className={s.button}>
      {children}
    </a>
  );
}

export default Button;
