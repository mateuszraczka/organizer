import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Table from "../../../components/Table";
import TableField from "../../../components/TableField";
import { useContext } from "react";
import { Exam, Exercise, ExerciseFormField } from "../../../types";
import { NewExamContext } from "../../../contexts/NewExamContextProvider";
import {FiDelete} from "react-icons/fi";

const ExerciseFields = () => {
  const { exam, setExam } = useContext(NewExamContext);
  const { exercises } = exam;

  const handleFieldChange = (
    value: string | number,
    field: keyof ExerciseFormField,
    id: number
  ) => {
    setExam((prev: Exam) => {
      const updatedExercises = prev.exercises.map((exercise) =>
        exercise.id === id ? { ...exercise, [field]: value } : exercise
      );
      return { ...prev, exercises: updatedExercises };
    });
  };

  return (
    <section className="flex gap-4 p-2 border-2 border-gray-200">
      <Table
        index={true}
        colTitle1="Nazwa ćwiczenia"
        colTitle2="Punkty do zdobycia"
        colTitle3="Typ"
      >
        {exercises.map((exercise: Exercise, index: number) => {
          const { id, name, points, type } = exercise;
          return (
            <TableField
              key={`${exam.id}-${exercise.id}`}
              index={index}
              input1={
                <Input
                  onChange={(e) =>
                    handleFieldChange(e.target.value, "name", id)
                  }
                  value={name}
                  type="text"
                  placeholder="Nazwa ćwiczenia"
                  name={`exerciseName-${index}`}
                ></Input>
              }
              input2={
                <Input
                  onChange={(e) =>
                    handleFieldChange(e.target.value, "points", id)
                  }
                  value={points}
                  type="number"
                  name={`exerciseMax-${index}`}
                  placeholder="Punkty do zdobycia"
                  min={1}
                ></Input>
              }
              select={
                <Select
                  onChange={(e) =>
                    handleFieldChange(e.target.value, "type", id)
                  }
                  value={type}
                  name="exercise_type"
                >
                  <option value="-">-</option>
                </Select>
              }
              delete_={
                <FiDelete></FiDelete>
              }
            ></TableField>
          );
        })}
      </Table>
    </section>
  );
};

export default ExerciseFields;
