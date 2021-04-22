import * as S from "./styles";

export function Toggle() {
  return (
    <S.Container>
      <S.ToggleLabel>Light</S.ToggleLabel>
      <S.ToggleSelector
        checked
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={() => console.log("mudou")}
      />
      <S.ToggleLabel>Dark</S.ToggleLabel>
    </S.Container>
  );
}
