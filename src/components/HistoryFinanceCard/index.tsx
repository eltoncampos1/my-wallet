import * as S from "./styles";

interface IHistoryFinanceCardProps {
  tagcolor: string;
  title: string;
  subTitle: string;
  amount: string;
}

export function HistoryFinanceCard({
  tagcolor,
  amount,
  title,
  subTitle,
}: IHistoryFinanceCardProps) {
  return (
    <S.Container>
      <S.Tag color={tagcolor} />
      <div>
        <span>{title}</span>
        <small>{subTitle}</small>
      </div>
      <h3>{amount}</h3>
    </S.Container>
  );
}
