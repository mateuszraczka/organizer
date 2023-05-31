import Input from "../../../components/Input";
import Table from "../../../components/Table";
import TableField from "../../../components/TableField";
import { NewExamContext } from "../../../contexts/NewExamContextProvider";
import { useContext } from "react";
import { Exam } from "../../../types";
const ExamField = () => {
  const { exam, setExam } = useContext(NewExamContext);

  const handleFieldChange = (field: keyof Exam, value: string | number) => {
    setExam((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <section className="flex gap-4 p-2 border-2 border-gray-200">
      <Table colTitle1="Nazwa sprawdzianu" colTitle2="Opis">
        <TableField
          input1={
            <Input
              onChange={(e) => handleFieldChange("name", e.target.value)}
              value={exam.name}
              type="text"
              placeholder="Nazwa sprawdzianu"
              name="exam_name"
            ></Input>
          }
          input2={
            <Input
              onChange={(e) => handleFieldChange("description", e.target.value)}
              value={exam.description}
              type="text"
              placeholder="Opis"
              name="exam_description"
            ></Input>
          }
        ></TableField>
      </Table>
    </section>
  );
};
export default ExamField;
