import { ContentHeader } from "../../components/ContentHeader";
import { SelectInput } from "../../components/SelectInput";

import * as S from "./styles";

export function Dashboard() {
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
      <ContentHeader title="Dashboard" lineColor="#f7931b">
        <SelectInput onChange={() => {}} options={options} />
      </ContentHeader>
    </S.Container>
  );
}
