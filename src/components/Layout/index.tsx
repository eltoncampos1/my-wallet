import { ReactNode } from "react";
import { MainHeader } from "../MainHeader";
import { Aside } from "../Aside";
import { Content } from "../Content";

import * as S from "./styles";

interface IProps {
  children: ReactNode;
}

export function Layout({ children }: IProps) {
  return (
    <S.Grid>
      <MainHeader />
      <Aside />
      <Content>{children}</Content>
    </S.Grid>
  );
}
