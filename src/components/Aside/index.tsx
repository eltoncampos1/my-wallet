import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from "react-icons/md";

import * as S from "./styles";

import logo from "../../assets/logo.svg";

export function Aside() {
  return (
    <S.Container>
      <S.Header>
        <S.LogoImg src={logo} />
        <S.Title>My Wallet</S.Title>
      </S.Header>

      <S.MenuContainer>
        <S.MenuItemLink href="/dashboard">
          <MdDashboard />
          Dashboard
        </S.MenuItemLink>
        <S.MenuItemLink href="/list/entry-balance">
          <MdArrowUpward />
          Entradas
        </S.MenuItemLink>
        <S.MenuItemLink href="/list/exit-balance">
          <MdArrowDownward />
          Saidas
        </S.MenuItemLink>
        <S.MenuItemLink href="#">
          <MdExitToApp />
          Sair
        </S.MenuItemLink>
      </S.MenuContainer>
    </S.Container>
  );
}
