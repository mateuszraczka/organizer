import { createContext } from "react";
import { Class } from "../types";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import usePost from "../hooks/usePost";
import { useEffect } from "react";
export type ClassContextType = {
  class_: Class;
  setClass_: React.Dispatch<React.SetStateAction<Class>>;
  saveClass: () => void;
  addStudent: () => void;
  fetchLoading: boolean;
  fetchSuccess: boolean;
  postLoading: boolean;
  postSuccess: boolean;
};

export const ClassContext = createContext<ClassContextType>(
  {} as ClassContextType
);

interface ClassContextProviderProps {
  children: React.ReactNode;
}

const ClassContextProvider = ({ children }: ClassContextProviderProps) => {
  const classId = new URLSearchParams(window.location.search).get("id");
  const { data, fetchLoading, fetchSuccess } = useFetch({
    collection_: "classes",
    searchFor: "id",
    condition: classId || undefined,
  });
  const [class_, setClass_] = useState<Class>({
    id: crypto.randomUUID(),
    name: "",
    description: "",
    teacher: "",
    year: 0,
    students: [],
  });
  const { post, postLoading, postSuccess } = usePost({
    doc_: `classes/${classId ? classId : class_.id}}`,
  });

  const addStudent = () => {
    setClass_((prev: any) => {
      return {
        ...prev,
        students: [
          ...prev.students,
          {
            id: prev.students.length,
            forename: "",
            surname: "",
            number: 0,
          },
        ],
      };
    });
  };

  const saveClass = () => {
    post(class_);
  };

  useEffect(() => {
    if (fetchSuccess && data.length > 0 && classId) {
      setClass_(data[0]);
    }
  }, [fetchSuccess]);

  return (
    <ClassContext.Provider
      value={{
        class_,
        setClass_,
        saveClass,
        addStudent,
        fetchLoading,
        fetchSuccess,
        postLoading,
        postSuccess,
      }}
    >
      {children}
    </ClassContext.Provider>
  );
};
export default ClassContextProvider;
