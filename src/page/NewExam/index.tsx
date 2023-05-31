import Add from "../../components/Add";
import SubPageTitle from "../../components/SubPageTitle";
import ExerciseFields from "./ExerciseFields/index"
import ExamField from "./ExamField/index";
import Save from "../../components/Save";
import { useContext } from "react";
import { NewExamContext } from "../../contexts/NewExamContextProvider";

const NewExam = () => {
    const { saveExam, addExercise } = useContext(NewExamContext);

    return (
        <>
            <section>
                <SubPageTitle>Sprawdzian</SubPageTitle>
            </section>
            <article>
                <ExamField></ExamField>
            </article>
            <section className="flex gap-4 items-center">
                <SubPageTitle>Zadania</SubPageTitle>
                <Add onClick={addExercise}></Add>
            </section>
            <article>
                <ExerciseFields></ExerciseFields>
            </article>
            <section className="flex items-end justify-end h-full">
                <Save onClick={saveExam}></Save>
            </section>
        </>
    )
}
export default NewExam;