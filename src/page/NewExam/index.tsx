import Add from "../../components/Add";
import SubPageTitle from "../../components/SubPageTitle";
import ExerciseFields from "./ExerciseFields/index"
import ExamField from "./ExamField/index";
import Save from "../../components/Save";

const NewExam = () => {
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
                <Add></Add>
            </section>
            <article>
                <ExerciseFields></ExerciseFields>
            </article>
            <section>
                <Save></Save>
            </section>
        </>
    )
}
export default NewExam;