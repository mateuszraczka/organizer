import Input from "../../../components/Input";
import Table from "../../../components/Table";
import TableField from "../../../components/TableField";
import { NewClassContext } from "../../../contexts/NewClassContextProvider";
import { useContext } from "react";
import { Class } from "../../../types";

const ClassField = () => {
  const { class_, setClass_ } = useContext(NewClassContext);

  const handleClassFieldChange = (
    value: string | number,
    field: keyof Class
  ) => {
    setClass_((prev: Class) => {
      return { ...prev, [field]: value };
    });
  };

  return (
    <section className="flex gap-4 p-2 border-2 border-gray-200">
      <Table colTitle1="Nazwa klasy" colTitle2="Opis" colTitle3="Rok">
        <TableField
          input1={
            <Input
              type="text"
              placeholder="Nazwa klasy"
              name="class_name"
              value={class_.name}
              onChange={(e) => handleClassFieldChange(e.target.value, "name")}
            />
          }
          input2={
            <Input
              type="text"
              placeholder="Opis"
              name="class_description"
              value={class_.description}
              onChange={(e) =>
                handleClassFieldChange(e.target.value, "description")
              }
            />
          }
          input3={
            <Input
              type="number"
              placeholder="Rok"
              name="class_year"
              min={1}
              value={class_.year}
              onChange={(e) => handleClassFieldChange(e.target.value, "year")}
            />
          }
        ></TableField>
      </Table>
    </section>
  );
};
export default ClassField;
