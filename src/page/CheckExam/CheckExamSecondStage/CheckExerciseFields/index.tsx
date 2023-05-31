import Input from "../../../../components/Input";
import Table from "../../../../components/Table";
import TableField from "../../../../components/TableField";
import { CheckExamContext } from "../../../../contexts/CheckExamContextProvider";
import { Exercise, StudentResult } from "../../../../types";
import { useContext } from "react";

const CheckExerciseFields = () => {
  const {
    selectedExamData,
    selectedClassData,
    setStudentsResult,
    studentsResult,
    notCheckedExercises,
    setNotCheckedExercises,
  } = useContext(CheckExamContext);

  const handleFilterNotCheckedExercises = (
    studentId: number,
    exerciseId: number
  ) => {
    const updatedNotCheckedExercises = notCheckedExercises.filter(
      (notCheckedExercise) =>
        notCheckedExercise.studentId !== studentId ||
        notCheckedExercise.exerciseId !== exerciseId
    );
    setNotCheckedExercises(() => updatedNotCheckedExercises);
  };

  const handleExerciseCheck = (
    studentId: number,
    exerciseId: number,
    gainedPoints: number
  ) => {
    const updatedStudentsResult = studentsResult.map(
      (studentResult: StudentResult) => {
        if (studentResult.id === studentId) {
          const updatedExercisesResult = studentResult.exercises.map(
            (exerciseResult: {
              id: number;
              gainedPoints: number | null;
              maxPoints: number;
            }) => {
              if (exerciseResult.id === exerciseId) {
                return { ...exerciseResult, gainedPoints: gainedPoints };
              } else {
                return exerciseResult;
              }
            }
          );
          return { ...studentResult, exercises: updatedExercisesResult };
        } else {
          return studentResult;
        }
      }
    );
    setStudentsResult(() => updatedStudentsResult);
  };

  const generateRadioInputs = (
    inputsToGenerate: number,
    studentId: number,
    exerciseId: number
  ) => {
    const radioInputs = [];
    for (let i = 0; i <= inputsToGenerate; i++) {
      radioInputs.push(
        <div
          className="flex flex-col justify-center items-center m-[3px]"
          key={i}
        >
          <span className="text-[8px]">{i}</span>
          <Input
            onChange={() => {
              handleExerciseCheck(studentId, exerciseId, i);
              handleFilterNotCheckedExercises(studentId, exerciseId);
            }}
            type="radio"
            name={`student:${studentId}/exercise:${exerciseId}`}
            value={i}
          ></Input>
        </div>
      );
    }
    return radioInputs;
  };

  return (
    <section className="grid gap-2 p-2 sm:grid-cols-1 md:grid-cols-2 3xl:grid-cols-3">
      {selectedClassData?.students.map((student, index) => {
        const { forename, surname } = student;
        return (
          <div
            key={`student-${index}`}
            className="mt-4 border-2 border-gray-200 p-2 rounded-md"
          >
            <div className="border-b-2 border-gray-200 flex flex-col justify-center items-center">
              <h4 className="font-bold text-blue-500">
                {forename && surname ? `${forename} ${surname}` : "Brak danych"}
              </h4>
            </div>
            <Table index={true} colTitle1="Ćwiczenie" colTitle2="Punkty">
              {selectedExamData?.exercises.map(
                (exercise: Exercise, index: number) => {
                  const { name, points } = exercise;
                  return (
                    <TableField
                      key={index}
                      className={
                        notCheckedExercises.find(
                          (notCheckedExercise) =>
                            notCheckedExercise.studentId === student.id &&
                            notCheckedExercise.exerciseId === exercise.id
                        )
                          ? "bg-red-400"
                          : ""
                      }
                      index={index}
                      input1={name}
                      input2={
                        <div className="flex gap-1 w-fit flex-wrap">
                          {generateRadioInputs(points, student.id, exercise.id)}
                        </div>
                      }
                    ></TableField>
                  );
                }
              )}
            </Table>
          </div>
        );
      })}
    </section>
  );
};
export default CheckExerciseFields;
