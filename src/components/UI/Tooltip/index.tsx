import s from "./Tooltip.module.scss";

type TooltipProps = {
  children?: React.ReactNode;
  label?: string;
};

function Tooltip({ children, label }: TooltipProps) {
  return (
    <div className={s.wrapper}>
      {children}
      <div className={s.tooltip}>{label}</div>
    </div>
  );
}

export default Tooltip;
