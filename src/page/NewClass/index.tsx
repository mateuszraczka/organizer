import SubPageTitle from "../../components/SubPageTitle";
import Add from "../../components/Add";
import StudentFields from "./StudentFields";
import Save from "../../components/Save";
import ClassField from "./ClassField";
import { useContext } from "react";
import { ClassContext } from "../../contexts/ClassContextProvider";
const NewClass = () => {
  const { saveClass, addStudent } = useContext(ClassContext);

  return (
    <>
      <section>
        <SubPageTitle>Klasa</SubPageTitle>
      </section>
      <article>
        <ClassField></ClassField>
      </article>
      <section className="flex gap-4 items-center">
        <SubPageTitle>Uczniowie</SubPageTitle>
        <Add onClick={addStudent}></Add>
      </section>
      <article>
        <StudentFields />
      </article>
      <section>
        <Save onClick={saveClass}></Save>
      </section>
    </>
  );
};
export default NewClass;
