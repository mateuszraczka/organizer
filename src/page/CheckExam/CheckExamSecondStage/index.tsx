import Previous from "../../../components/Previous";
import { useContext } from "react";
import { CheckExamContext } from "../../../contexts/CheckExamContextProvider";
import CheckExerciseFields from "./CheckExerciseFields";
import { useEffect } from "react";
import Next from "../../../components/Next";

const CheckExamSecondStage = () => {
    const { handleStageChange, saveCheckedExam, postSuccess, notCheckedExercises } = useContext(CheckExamContext);

    useEffect(() => {
        console.log("postSuccess", postSuccess)
    }, [postSuccess]);

    return(
        <>
            <article>
                <CheckExerciseFields></CheckExerciseFields>
            </article>
            <section className="flex items-end h-full justify-between">
                <Previous onClick={handleStageChange}></Previous>
                <Next onClick={saveCheckedExam} active={notCheckedExercises.length===0}></Next>
            </section>
        </>
    )
};
export default CheckExamSecondStage;