import { useMemo, useState, useEffect } from "react";
import { ContentHeader } from "../../components/ContentHeader";
import { HistoryFinanceCard } from "../../components/HistoryFinanceCard";
import { SelectInput } from "../../components/SelectInput";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

import * as S from "./styles";

interface IRouteParams {
  match: {
    params: {
      type: string;
    };
  };
}

interface IData {
  id: string;
  description: string;
  amountFormated: string;
  frequency: string;
  dateFormated: string;
  tagcolor: string;
}

export function List({ match }: IRouteParams) {
  const [data, setData] = useState<IData[]>([]);

  const { type } = match.params;
  const { title, lineColor } = useMemo(() => {
    return type === "entry-balance"
      ? {
          title: "Entradas",
          lineColor: "#f79318",
        }
      : {
          title: "Saídas",
          lineColor: "#e44c4e",
        };
  }, [type]);

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

  const listData = useMemo(() => {
    return type === "entry-balance" ? gains : expenses;
  }, [type]);

  useEffect(() => {
    const response = listData.map((item) => {
      return {
        id: String(Math.random() * data.length),
        description: item.description,
        amountFormated: item.amount,
        frequency: item.frequency,
        dateFormated: item.date,
        tagcolor: item.frequency === "recorrente" ? "#4e41f0" : "#e44c4e",
      };
    });

    setData(response);
  }, [listData]);

  return (
    <S.Container>
      <ContentHeader title={title} lineColor={lineColor}>
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
        {data.map((item) => (
          <HistoryFinanceCard
            key={item.id}
            tagcolor={item.tagcolor}
            title={item.description}
            subTitle={item.dateFormated}
            amount={item.amountFormated}
          />
        ))}
      </S.Content>
    </S.Container>
  );
}
