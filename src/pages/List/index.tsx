import { ContentHeader } from "../../components/ContentHeader";
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
    </S.Container>
  );
}
