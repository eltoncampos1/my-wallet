import { ContentHeader } from "../../components/ContentHeader";
import { HistoryFinanceCard } from "../../components/HistoryFinanceCard";
import { SelectInput } from "../../components/SelectInput";

import * as S from "./styles";

export function List() {
  const options = [
    {
      value: "Elton",
      label: "Elton",
    },
    {
      value: "Bea",
      label: "Bea",
    },
    {
      value: "Zaum",
      label: "Zaum",
    },
  ];

  return (
    <S.Container>
      <ContentHeader title="Saidas" lineColor="#e44c4e">
        <SelectInput options={options} />
      </ContentHeader>

      <S.Content>
        <HistoryFinanceCard
          tagcolor="#e44c4e"
          title="Internet"
          subTitle="21/04/2021"
          amount="R$ 120,00"
        />
      </S.Content>
    </S.Container>
  );
}
