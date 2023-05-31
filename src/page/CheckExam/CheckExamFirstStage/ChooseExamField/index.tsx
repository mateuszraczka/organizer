import TableField from "../../../../components/TableField";
import useFetch from "../../../../hooks/useFetch";
import Table from "../../../../components/Table";
import Input from "../../../../components/Input";
import { Exam } from "../../../../types";
import { useContext } from "react";
import { CheckExamContext } from "../../../../contexts/CheckExamContextProvider";

const ChooseExamField = () => {
  const { data } = useFetch({ collection_: "teachers/123/exams" });
  const exams = data as Exam[];
  const { setSelectedExam } = useContext(CheckExamContext);

  const handleExamChange = (examId: string) => {
    setSelectedExam(() => examId);
  };

  return (
    <section className="flex flex-col gap-2 p-3">
      <h4 className="text-center font-semibold border-b-2 border-gray-200">
        Wybierz sprawdzian
      </h4>
      <Table colTitle1="Nazwa" colTitle2="Opis">
        {exams.length > 0 ? (
          exams.map((exam: Exam, index: number) => {
            const { name, description, id } = exam;
            return (
              <TableField
                key={index}
                input1={
                  <>{name || <span className="opacity-30">Brak nazwy</span>}</>
                }
                input2={
                  <>
                    {description || (
                      <span className="opacity-30">Brak opisu</span>
                    )}
                  </>
                }
                input3={
                  <div className="flex justify-center items-center">
                    <Input
                      type="radio"
                      name="exam"
                      onChange={() => handleExamChange(id)}
                    />
                  </div>
                }
              ></TableField>
            );
          })
        ) : (
          <tr>
            <td>
              <span className="opacity-30">Brak dostępnych sprawdzianów</span>
            </td>
          </tr>
        )}
      </Table>
    </section>
  );
};
export default ChooseExamField;
