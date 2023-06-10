import SubPageTitle from "../../components/SubPageTitle";
import { Chart } from "react-google-charts";
import { ExamResultsContext } from "../../contexts/ExamResultsContextProvider";
import { useContext } from "react";

const ExamResults = () => {
  const { maxPoints, gainedPointsChartData } = useContext(ExamResultsContext);

  const gainedPointsChartOptions = {
    title: `Maksymalna liczba punktów do zdobycia: ${maxPoints}`,
    hAxis: { title: "Zdobyte punkty", minValue: 0, maxValue: maxPoints },
    legend: "none",
    controlType: "NumberRangeFilter",
  };

  return (
    <>
      <section>
        <SubPageTitle>Wyniki ze sprawdzianu</SubPageTitle>
      </section>
      <article className="grid grid-cols-1 xl:grid-cols-2">
        <section className="flex justify-center w-full">
          {gainedPointsChartData.length&&<Chart
            height={`${gainedPointsChartData.length * 80}px`}
            width={"100%"}
            chartType="BarChart"
            loader={<div>Loading Chart...</div>}
            options={gainedPointsChartOptions}
            data={[
              ["Uczeń", "Zdobyte punkty", { role: "style" }],
              ...gainedPointsChartData.map((data) => [
                data.name,
                data.value,
                data.color,
              ]),
            ]}
          ></Chart>}
        </section>
        <section className="flex justify-center w-full">
            {gainedPointsChartData.length&&<Chart
            height={`${gainedPointsChartData.length * 80}px`}
            width={"100%"}
            chartType="BarChart"
            loader={<div>Loading Chart...</div>}
            options={gainedPointsChartOptions}
            ></Chart>}
        </section>
      </article>
    </>
  );
};
export default ExamResults;
