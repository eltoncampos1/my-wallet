import { MainHeader } from "../MainHeader";
import { Aside } from "../Aside";
import { Content } from "../Content";

import * as S from "./styles";

export function Layout() {
  return (
    <S.Grid>
      <MainHeader />
      <Aside />
      <Content />
    </S.Grid>
  );
}
