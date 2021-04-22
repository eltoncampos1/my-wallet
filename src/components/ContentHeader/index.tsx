import * as S from "./styles";

interface IContentHeaderprops {
  title: string;
  lineColor: string;
  children: React.ReactNode;
}

export function ContentHeader({
  title,
  lineColor,
  children,
}: IContentHeaderprops) {
  return (
    <S.Container>
      <S.TitleContainer lineColor={lineColor}>
        <h1>{title}</h1>
      </S.TitleContainer>
      <S.Controllers>{children}</S.Controllers>
    </S.Container>
  );
}
