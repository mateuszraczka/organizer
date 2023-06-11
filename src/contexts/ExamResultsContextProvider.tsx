import useFetch from "../hooks/useFetch";
import { createContext } from "react";
import { useEffect } from "react";
import {
  ChartData,
  ExamResult,
  Exercise,
  ExerciseResult,
  Student,
} from "../types";
import { useState } from "react";
import { StudentResult } from "../types";

type ExamResultsContextType = {
  results: ExamResult;
  maxPoints: number;
  gainedPointsChartData: ChartData[];
};

interface ExamResultsContextProps {
  children: React.ReactNode;
}

export const ExamResultsContext = createContext<ExamResultsContextType>(
  {} as ExamResultsContextType
);

const ExamResultsContextProvider = ({ children }: ExamResultsContextProps) => {
  const checkedExamId = new URLSearchParams(window.location.search).get("id");
  const { data: results } = useFetch({
    collection_: `teachers/123/checkedExams`,
    searchFor: "id",
    condition: checkedExamId || undefined,
  });
  const { data: class_ } = useFetch({
    collection_: `teachers/123/classes`,
    searchFor: "id",
    condition: results[0]?.classId,
    await_: results,
  });
  const { data: exam } = useFetch({
    collection_: `teachers/123/exams`,
    searchFor: "id",
    condition: results[0]?.examId,
    await_: results,
  });
  const [maxPoints, setMaxPoints] = useState<number>(0);
  const [gainedPointsChartData, setGainedPointsChartData] = useState<ChartData[]>([]);
  const [exercisePointsChartData, setExercisePointsChartData] = useState<ChartData[]>([]);


  const getGreenToRed = (percent:number) =>{
    let r = percent<50 ? 255 : Math.floor(255-(percent*2-100)*255/100);
    let g = percent>50 ? 255 : Math.floor((percent*2)*255/100);
    return 'rgb('+r+','+g+',0)';
}

  useEffect(() => {
    if (results[0] && class_[0] && results[0].classId === class_[0].id) {
      
      let maxPoints = 0;
      results[0].students[0].exercises.forEach((exercise: ExerciseResult) => {
        maxPoints += parseInt(exercise.maxPoints.toString()); // do poprawy
      });
      setMaxPoints(() => maxPoints);

      let gainedPointsChartData: ChartData[] = [];
      results[0].students.map((student: StudentResult) => {
        let gainedPoints = 0;
        student.exercises.map((exercise: ExerciseResult) => {
          gainedPoints += parseInt(exercise.gainedPoints?.toString() || "0"); // do poprawy
        });
        const studentData_ = class_[0].students.find(
          (student_: Student) => student_.id === student.id
        );
        gainedPointsChartData.push({
          name: `${studentData_?.forename} ${studentData_?.surname}`,
          value: gainedPoints,
          color: getGreenToRed(Math.floor((gainedPoints/maxPoints)*100)),
        });
      });
      setGainedPointsChartData(() => gainedPointsChartData);
    }
  }, [class_, results]);

  useEffect(() => { // t o d o
    if (results[0] && exam[0] && results[0].examId === exam[0].id) {
      let exerciseDifficulty = new Map<string, ChartData>(); // percentage of difficulty
      results[0].students.map((student: StudentResult) => {
        student.exercises.map((exercise: ExerciseResult) => {
          const exerciseData_ = exam[0].exercises.find(
            (exercise_: Exercise) => exercise_.id === exercise.id
          );
        });
      });
      console.log(exerciseDifficulty);
    }
  }, [exam, results]);

  return (
    <ExamResultsContext.Provider
      value={{
        results,
        maxPoints,
        gainedPointsChartData,
      }}
    >
      {children}
    </ExamResultsContext.Provider>
  );
};
export default ExamResultsContextProvider;
