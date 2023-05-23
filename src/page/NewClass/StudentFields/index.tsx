import Input from "../../../components/Input";
import Table from "../../../components/Table";
import TableField from "../../../components/TableField";
import { Class, Student } from "../../../types";
import { StudentFormField } from "../../../types";
import { useContext } from "react";
import { ClassContext } from "../../../contexts/ClassContextProvider";

const StudentFields = () => {
  const { class_, setClass_ } = useContext(ClassContext);
  const { students } = class_;
  const handleStudentFieldChange = (
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
    console.log(class_)
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
              key={`${index}-${student.id}`}
              index={index}
              input1={
                <Input
                  onChange={(e) =>
                    handleStudentFieldChange(e.target.value, "forename", id)
                  }
                  value={forename}
                  variant="horizontal"
                  type="text"
                  placeholder="Imię"
                  name={`studentForename-${id}`}
                />
              }
              input2={
                <Input
                  onChange={(e) =>
                    handleStudentFieldChange(e.target.value, "surname", id)
                  }
                  value={surname}
                  variant="horizontal"
                  type="text"
                  placeholder="Nazwisko"
                  name={`studentSurname-${id}`}
                />
              }
              input3={
                <Input
                  onChange={(e) =>
                    handleStudentFieldChange(e.target.value, "number", id)
                  }
                  value={number}
                  variant="horizontal"
                  type="number"
                  placeholder="Numer w dzienniku"
                  name={`studentNumber-${id}`}
                  min={1}
                />
              }
            />
          );
        })}
      </Table>
    </section>
  );
};

export default StudentFields;