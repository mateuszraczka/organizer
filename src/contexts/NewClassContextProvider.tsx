import { createContext } from "react";
import { Class } from "../types";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import usePost from "../hooks/usePost";
import { useEffect } from "react";
import Redirection from "../components/Redirection";
import { useNavigate } from "react-router-dom";

export type NewClassContextType = {
  class_: Class;
  setClass_: React.Dispatch<React.SetStateAction<Class>>;
  saveClass: () => void;
  addStudent: () => void;
  fetchLoading: boolean;
  fetchSuccess: boolean;
  postLoading: boolean;
  postSuccess: boolean;
};

export const NewClassContext = createContext<NewClassContextType>(
  {} as NewClassContextType
);

interface NewClassContextProviderProps {
  children: React.ReactNode;
}

const NewClassContextProvider = ({
  children,
}: NewClassContextProviderProps) => {
  const classId = new URLSearchParams(window.location.search).get("id");
  const navigate = useNavigate();
  const { data, fetchLoading, fetchSuccess } = useFetch({
    collection_: "teachers/123/classes",
    searchFor: "id",
    condition: classId || undefined,
  });
  const [class_, setClass_] = useState<Class>({
    id: crypto.randomUUID(),
    name: "",
    description: "",
    year: 0,
    students: [
      {
        id: 0,
        forename: "",
        surname: "",
        number: 0,
      }
    ],
  });
  const { post, postLoading, postSuccess } = usePost({
    doc_: `teachers/123/classes/${classId ? classId : class_.id}}`,
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
    else if(fetchSuccess && classId!==null){
      navigate("/invalidPath");
    }
  }, [fetchSuccess]);

  return (
    <NewClassContext.Provider
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
      <Redirection
        redirectPath={`?id=${class_.id}`}
        condition={postSuccess && !classId}
      >
        {children}
      </Redirection>
    </NewClassContext.Provider>
  );
};
export default NewClassContextProvider;
