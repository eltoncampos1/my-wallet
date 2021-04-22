import { useMemo } from "react";
import * as S from "./styles";

import { Toggle } from "../Toggle";

import emojis from "../../utils/emojis";

export function MainHeader() {
  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length);
    return emojis[index];
  }, []);

  return (
    <S.Container>
      <Toggle />

      <S.Profile>
        <S.Welcome>Olá, {emoji}</S.Welcome>
        <S.UserName>Elton Campos</S.UserName>
      </S.Profile>
    </S.Container>
  );
}
