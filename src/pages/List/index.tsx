import { useMemo, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

import listOfmonths from "../../utils/months";

import { ContentHeader } from "../../components/ContentHeader";
import { HistoryFinanceCard } from "../../components/HistoryFinanceCard";
import { SelectInput } from "../../components/SelectInput";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

import * as S from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatDate } from "../../utils/formatDate";

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
  const [monthSelected, setMonthSelected] = useState<string>(
    String(new Date().getMonth() + 1)
  );
  const [yearSelected, setYearSelected] = useState<string>(
    String(new Date().getFullYear())
  );

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

  const listData = useMemo(() => {
    return type === "entry-balance" ? gains : expenses;
  }, [type]);

  // const months = [
  //   {
  //     value: 4,
  //     label: "Abril",
  //   },
  //   {
  //     value: 5,
  //     label: "Maio",
  //   },
  //   {
  //     value: 6,
  //     label: "Junho",
  //   },
  // ];

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    listData.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year,
      };
    });
  }, [listData]);

  const months = useMemo(() => {
    return listOfmonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      };
    });
  }, []);

  useEffect(() => {
    const filteredDate = listData.filter((item) => {
      const date = new Date(item.date);
      const month = String(date.getMonth() + 1);
      const year = String(date.getFullYear());

      return month === monthSelected && year === yearSelected;
    });

    const foramatedDate = filteredDate.map((item) => {
      return {
        id: uuid(),
        description: item.description,
        amountFormated: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormated: formatDate(item.date),
        tagcolor: item.frequency === "recorrente" ? "#4e41f0" : "#e44c4e",
      };
    });

    setData(foramatedDate);
  }, [listData, data.length, monthSelected, yearSelected]);

  return (
    <S.Container>
      <ContentHeader title={title} lineColor={lineColor}>
        <SelectInput
          onChange={(e) => setMonthSelected(e.target.value)}
          options={months}
          defaultValue={monthSelected}
        />
        <SelectInput
          onChange={(e) => setYearSelected(e.target.value)}
          options={years}
          defaultValue={yearSelected}
        />
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
