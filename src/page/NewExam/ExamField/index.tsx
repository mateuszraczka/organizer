import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Table from "../../../components/Table";
import TableField from "../../../components/TableField";
const ExamField = () => {
  return (
    <section className="flex gap-4 p-2 border-2 border-gray-200">
      <Table
        colTitle1="Nazwa sprawdzianu"
        colTitle2="Opis"
        colTitle3="Data"
        colTitle4="Klasa"
      >
        <TableField
          input1={
            <Input
              variant="horizontal"
              type="text"
              placeholder="Nazwa sprawdzianu"
              name="exam_name"
            ></Input>
          }
          input2={
            <Input
              variant="horizontal"
              type="text"
              placeholder="Opis"
              name="exam_description"
            ></Input>
          }
          input3={
            <Input
              variant="horizontal"
              type="date"
              placeholder="Data"
              name="exam_date"
            ></Input>
          }
          select={
            <Select name="exam_class">
              <option value="klasa">2A</option>
            </Select>
          }
        ></TableField>
      </Table>
    </section>
  );
};
export default ExamField;
