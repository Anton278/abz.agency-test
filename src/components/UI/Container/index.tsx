import s from "./Container.module.scss";

type ContainerProps = {
  children?: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return <div className={s.container}>{children}</div>;
}

export default Container;
