import { createContext } from "react";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import usePost from "../hooks/usePost";
import { useEffect } from "react";
import { Exam } from "../types";
import Redirection from "../components/Redirection";
import { useNavigate } from "react-router-dom";

export type NewExamContextType = {
  exam: Exam;
  setExam: React.Dispatch<React.SetStateAction<Exam>>;
  saveExam: () => void;
  addExercise: () => void;
  fetchLoading: boolean;
  fetchSuccess: boolean;
  postLoading: boolean;
  postSuccess: boolean;
};

export const NewExamContext = createContext<NewExamContextType>(
  {} as NewExamContextType
);

interface NewClassContextProviderProps {
  children: React.ReactNode;
}

const NewExamContextProvider = ({ children }: NewClassContextProviderProps) => {
  const examId = new URLSearchParams(window.location.search).get("id");
  const navigate = useNavigate();
  const { data, fetchLoading, fetchSuccess } = useFetch({
    collection_: "teachers/123/exams",
    searchFor: "id",
    condition: examId || undefined,
  });
  const [exam, setExam] = useState<Exam>({
    id: crypto.randomUUID(),
    name: "",
    description: "",
    exercises: [
        {
            id: 0,
            name: "",
            points: 0,
            type: "",
        }
    ],
  });
  const { post, postLoading, postSuccess } = usePost({
    doc_: `teachers/123/exams/${examId ? examId : exam.id}}`,
  });

  const addExercise = () => {
    setExam((prev: any) => {
      return {
        ...prev,
        exercises: [
          ...prev.exercises,
          {
            id: prev.exercises.length,
            name: "",
            points: 0,
            type: "",
          },
        ],
      };
    });
  };

  const saveExam = () => {
    post(exam);
  };

  useEffect(() => {
    if (fetchSuccess && data.length > 0 && examId) {
      setExam(data[0]);
    }
    else if(fetchSuccess && examId!==null){
        navigate("/invalidPath");
      }
  }, [fetchSuccess]);

  return (
    <NewExamContext.Provider
      value={{
        exam,
        setExam,
        saveExam,
        addExercise,
        fetchLoading,
        fetchSuccess,
        postLoading,
        postSuccess,
      }}
    >
      <Redirection
        redirectPath={`?id=${exam.id}`}
        condition={postSuccess && !examId}
      >
        {children}
      </Redirection>
    </NewExamContext.Provider>
  );
};
export default NewExamContextProvider;
