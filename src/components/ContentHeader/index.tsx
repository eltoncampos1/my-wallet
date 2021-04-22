import * as S from "./styles";

export function ContentHeader() {
  return (
    <S.Container>
      <S.TitleContainer>
        <h1>Title</h1>
      </S.TitleContainer>
      <S.Controllers>
        <button type="button">Botão a</button>
        <button type="button">Botão b</button>
      </S.Controllers>
    </S.Container>
  );
}
