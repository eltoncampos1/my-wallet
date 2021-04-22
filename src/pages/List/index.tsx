import { ContentHeader } from "../../components/ContentHeader";
import { HistoryFinanceCard } from "../../components/HistoryFinanceCard";
import { SelectInput } from "../../components/SelectInput";

import * as S from "./styles";

export function List() {
  const months = [
    {
      value: 4,
      label: "Abril",
    },
    {
      value: 5,
      label: "Maio",
    },
    {
      value: 6,
      label: "Junho",
    },
  ];

  const years = [
    {
      value: 2021,
      label: 2021,
    },
    {
      value: 2020,
      label: 2020,
    },
    {
      value: 2019,
      label: 2019,
    },
  ];

  return (
    <S.Container>
      <ContentHeader title="Saidas" lineColor="#e44c4e">
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <S.Filters>
        <button type="button" className="tag-filter tag-filter-recurrent">
          Recorrentes
        </button>
        <button type="button" className="tag-filter tag-filter-eventual">
          Eventuais
        </button>
      </S.Filters>

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
