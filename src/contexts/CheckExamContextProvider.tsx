import { createContext, useState } from "react";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { Class, Exam, Exercise } from "../types";
import usePost from "../hooks/usePost";
import { StudentResult } from "../types";
import { Student } from "../types";
import { ExamResult } from "../types";

type CheckExamContextType = {
  setNotCheckedExercises: React.Dispatch<React.SetStateAction<{ studentId: number; exerciseId: number }[]>>;
  notCheckedExercises: { studentId: number; exerciseId: number }[];
  areAllExercisesChecked: () => boolean;
  postLoading: boolean;
  postSuccess: boolean;
  saveCheckedExam: () => void;
  setStudentsResult: React.Dispatch<React.SetStateAction<StudentResult[]>>;
  studentsResult: StudentResult[];
  selectedClass: string;
  setSelectedClass: React.Dispatch<React.SetStateAction<string>>;
  selectedExam: string;
  setSelectedExam: React.Dispatch<React.SetStateAction<string>>;
  secondStage: boolean;
  handleStageChange: () => void;
  buttonUnlocked: boolean;
  selectedClassData: Class | undefined;
  selectedExamData: Exam | undefined;
};

interface CheckExamContextProps {
  children: React.ReactNode;
}

export const CheckExamContext = createContext<CheckExamContextType>(
  {} as CheckExamContextType
);

const CheckExamContextProvider = ({ children }: CheckExamContextProps) => {
  const { data: classes } = useFetch({ collection_: "teachers/123/classes" });
  const { data: exams } = useFetch({ collection_: "teachers/123/exams" });
  const [selectedClass, setSelectedClass] = useState<string>("");
  const [selectedExam, setSelectedExam] = useState<string>("");
  const [secondStage, setSecondStage] = useState(false);
  const [buttonUnlocked, setButtonUnlocked] = useState(false);
  const [selectedClassData, setSelectedClassData] = useState<Class>();
  const [selectedExamData, setSelectedExamData] = useState<Exam>();
  const [notCheckedExercises, setNotCheckedExercises] = useState<
    { studentId: number; exerciseId: number }[]
  >([]);
  const { post, postLoading, postSuccess } = usePost({
    doc_: `teachers/123/checkedExams/${crypto.randomUUID()}`,
  });

  const [studentsResult, setStudentsResult] = useState<StudentResult[]>([]);

  const handleStageChange = () => {
    if (secondStage) {
      setSecondStage(() => false);
      setButtonUnlocked(() => false);
      setSelectedClass(() => "");
      setSelectedExam(() => "");
    } else if (buttonUnlocked) {
      setSecondStage(() => true);
    }
  };

  const areAllExercisesChecked = (): boolean => {
    setNotCheckedExercises(() => []);
    let notChecked: { studentId: number; exerciseId: number }[] = [];
    let result = true;
    studentsResult.forEach((studentResult: StudentResult) => {
      studentResult.exercises.forEach((exerciseResult: any) => {
        if (exerciseResult.gainedPoints === null) {
          result = false;
          notChecked.push({
            studentId: studentResult.id,
            exerciseId: exerciseResult.id,
          });
        }
      });
    });

    if (!result) {
      setNotCheckedExercises(() => notChecked);
    }
    return result;
  };

  const saveCheckedExam = () => {
    if (areAllExercisesChecked()) {
      const examResult: ExamResult = {
        examId: selectedExam,
        classId: selectedClass,
        date: new Date(),
        students: studentsResult,
      };
      post(examResult);
    }
  };

  const defaultStudentsResult = () => {
    const studentsResult: StudentResult[] = [];
    selectedClassData?.students.forEach((student: Student) => {
      const exercisesResult: any = [];
      selectedExamData?.exercises.forEach((exercise: Exercise) => {
        exercisesResult.push({
          id: exercise.id,
          gainedPoints: null,
          maxPoints: exercise.points,
        });
      });
      studentsResult.push({
        id: student.id,
        exercises: exercisesResult,
      });
    });

    setStudentsResult(() => studentsResult);
  };

  useEffect(() => {
    if (selectedClass && selectedExam) {
      setButtonUnlocked(() => true);
    } else {
      setButtonUnlocked(() => false);
    }
  }, [selectedClass, selectedExam]);

  useEffect(() => {
    if (selectedClass && selectedExam) {
      const selectedClassData = classes?.find(
        (class_: Class) => class_.id === selectedClass
      );
      const selectedExamData = exams?.find(
        (exam: Exam) => exam.id === selectedExam
      );
      setSelectedClassData(() => selectedClassData);
      setSelectedExamData(() => selectedExamData);
    }
  }, [secondStage]);

  useEffect(() => {
    if (selectedClassData && selectedExamData) {
      defaultStudentsResult();
    }
  }, [selectedClassData, selectedExamData]);

  return (
    <CheckExamContext.Provider
      value={{
        setNotCheckedExercises,
        notCheckedExercises,
        areAllExercisesChecked,
        postLoading,
        postSuccess,
        saveCheckedExam,
        setStudentsResult,
        studentsResult,
        selectedClassData,
        selectedExamData,
        selectedClass,
        setSelectedClass,
        selectedExam,
        setSelectedExam,
        handleStageChange,
        secondStage,
        buttonUnlocked,
      }}
    >
      {children}
    </CheckExamContext.Provider>
  );
};
export default CheckExamContextProvider;
