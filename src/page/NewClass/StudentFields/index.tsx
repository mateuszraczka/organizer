import Input from "../../../components/Input";
import Table from "../../../components/Table";
import TableField from "../../../components/TableField";
import { Class, Student } from "../../../types";
import { StudentFormField } from "../../../types";
import { useContext } from "react";
import { NewClassContext } from "../../../contexts/NewClassContextProvider";
import { FiDelete } from "react-icons/fi";

const StudentFields = () => {
  const { class_, setClass_ } = useContext(NewClassContext);
  const { students } = class_;

  const handleFieldChange = (
    value: string | number,
    field: keyof StudentFormField,
    id: number
  ) => {
    setClass_((prev: Class) => {
      const updatedStudents = prev.students.map((student) =>
        student.id === id ? { ...student, [field]: value } : student
      );
      return { ...prev, students: updatedStudents };
    });
  };

  return (
    <section className="flex gap-4 p-2 border-2 border-gray-200">
      <Table
        index={true}
        colTitle1="Imię"
        colTitle2="Nazwisko"
        colTitle3="Numer w dzienniku"
      >
        {students.map((student: Student, index: number) => {
          const { id, forename, surname, number } = student;
          return (
            <TableField
              key={`${class_.id}-${student.id}`}
              index={index}
              input1={
                <Input
                  onChange={(e) =>
                    handleFieldChange(e.target.value, "forename", id)
                  }
                  value={forename}
                  type="text"
                  placeholder="Imię"
                  name={`studentForename-${id}`}
                />
              }
              input2={
                <Input
                  onChange={(e) =>
                    handleFieldChange(e.target.value, "surname", id)
                  }
                  value={surname}
                  type="text"
                  placeholder="Nazwisko"
                  name={`studentSurname-${id}`}
                />
              }
              input3={
                <Input
                  onChange={(e) =>
                    handleFieldChange(e.target.value, "number", id)
                  }
                  value={number}
                  type="number"
                  placeholder="Numer w dzienniku"
                  name={`studentNumber-${id}`}
                  min={1}
                />
              }
              delete_={
                <FiDelete></FiDelete>
              }
            />
          );
        })}
      </Table>
    </section>
  );
};

export default StudentFields;
