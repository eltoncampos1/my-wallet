import * as S from "./styles";

interface ISelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[];
}

export function SelectInput({ options }: ISelectInputProps) {
  return (
    <S.Container>
      <select>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </S.Container>
  );
}