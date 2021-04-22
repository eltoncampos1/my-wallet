import { ReactNode } from "react";
import * as S from "./styles";

interface IProps {
  children: ReactNode;
}

export function Content({ children }: IProps) {
  return <S.Container>{children}</S.Container>;
}
