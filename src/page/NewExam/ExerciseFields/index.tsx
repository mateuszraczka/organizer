import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Table from "../../../components/Table";
import TableField from "../../../components/TableField";

const ExerciseFields = () => {
  return (
    <section className="flex gap-4 p-2 border-2 border-gray-200">
      <Table
        index={true}
        colTitle1="Nazwa ćwiczenia"
        colTitle2="Min"
        colTitle3="Max"
        colTitle4="Typ"
      >
        <TableField
          index={1}
          input1={
            <Input
              variant="horizontal"
              type="text"
              placeholder="Nazwa ćwiczenia"
              name="exercise_name"
            ></Input>
          }
          input2={
            <Input
              variant="horizontal"
              type="number"
              placeholder="Min"
              name="min"
              min={0}
              defaultValue={0}
            ></Input>
          }
          input3={
            <Input
              variant="horizontal"
              type="number"
              name="max"
              placeholder="Max"
              min={1}
              defaultValue={1}
            ></Input>
          }
          select={
            <Select name="exercise_type">
              <option value="czytanie">Czytanie</option>
              <option value="gramatyka">Gramatyka</option>
              <option value="sluchanie">Słuchanie</option>
            </Select>
          }
        ></TableField>
      </Table>
    </section>
  );
};

export default ExerciseFields;
